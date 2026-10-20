import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "lc_admin_session";
const SESSION_SECONDS = 60 * 60 * 24 * 7;

export function envReady() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY && process.env.RESEND_API_KEY && process.env.ADMIN_PASSWORD && process.env.SESSION_SECRET);
}

export function constantTimeEqual(a: string, b: string) {
  const aa = Buffer.from(a);
  const bb = Buffer.from(b);
  return aa.length === bb.length && timingSafeEqual(aa, bb);
}

function signature(value: string) {
  return createHmac("sha256", process.env.SESSION_SECRET || "").update(value).digest("hex");
}

export function createSessionToken() {
  const expires = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const payload = String(expires);
  return { value: payload + "." + signature(payload), maxAge: SESSION_SECONDS };
}

export function verifySessionToken(token: string | undefined) {
  if (!token || !process.env.SESSION_SECRET) return false;
  const [expires, supplied, extra] = token.split(".");
  if (!expires || !supplied || extra || !/^\d+$/.test(expires)) return false;
  if (Number(expires) < Math.floor(Date.now() / 1000)) return false;
  return constantTimeEqual(signature(expires), supplied);
}

export async function isAdminRequest() {
  const cookieStore = await cookies();
  return verifySessionToken(cookieStore.get(SESSION_COOKIE)?.value);
}

export async function supabaseRequest(path: string, init: RequestInit = {}) {
  const base = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!base || !key) throw new Error("Supabase is not configured");
  return fetch(`${base.replace(/\/$/, "")}/rest/v1/${path}`, {
    ...init,
    cache: "no-store",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });
}

export async function sendEmail(to: string, subject: string, html: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) throw new Error("Email service is not configured");
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], subject, html }),
  });
  if (!response.ok) throw new Error("Email delivery failed");
}

export async function sendNotificationEmail(subject: string, html: string) {
  const to = process.env.NOTIFICATION_EMAIL;
  if (!to) throw new Error("Notification email is not configured");
  return sendEmail(to, subject, html);
}
