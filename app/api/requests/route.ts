import { NextRequest, NextResponse } from "next/server";
import { envReady, sendNotificationEmail, supabaseRequest } from "@/lib/requests";

export const runtime = "nodejs";

const allowedTypes = new Set(["quote", "meeting"]);
const allowedLocales = new Set(["es", "en", "fr", "de", "it", "pt", "nl", "ru"]);
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!);

export async function POST(request: NextRequest) {
  if (!envReady()) return NextResponse.json({ error: "El sistema aún no está configurado." }, { status: 503 });
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") return NextResponse.json({ error: "Solicitud no válida." }, { status: 400 });
  if (typeof body.website !== "string" || body.website.length > 0) return NextResponse.json({ ok: true });
  const { type, locale, name, email, company, service, budget, message, meetingDate, meetingTime } = body as Record<string, unknown>;
  if (typeof type !== "string" || !allowedTypes.has(type) || typeof locale !== "string" || !allowedLocales.has(locale)) return NextResponse.json({ error: "Tipo de solicitud no válido." }, { status: 400 });
  if (typeof name !== "string" || name.trim().length < 2 || name.length > 120 || typeof email !== "string" || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Revisa el nombre y el correo electrónico." }, { status: 400 });
  if (typeof message !== "string" || message.trim().length < 10 || message.length > 5000) return NextResponse.json({ error: "Añade una descripción de al menos 10 caracteres." }, { status: 400 });
  if (typeof service !== "string" || service.length > 120 || typeof budget !== "string" || budget.length > 80) return NextResponse.json({ error: "Revisa el servicio y el presupuesto." }, { status: 400 });
  if (type === "meeting" && (typeof meetingDate !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(meetingDate) || typeof meetingTime !== "string" || !/^([01]\d|2[0-3]):[0-5]\d$/.test(meetingTime))) return NextResponse.json({ error: "Indica una fecha y hora preferidas." }, { status: 400 });

  const row = {
    type, locale, name: name.trim(), email: email.trim().toLowerCase(),
    company: typeof company === "string" ? company.trim().slice(0, 160) : "",
    service, budget, message: message.trim(),
    meeting_date: type === "meeting" ? meetingDate : null,
    meeting_time: type === "meeting" ? meetingTime : null,
    status: "new",
  };

  try {
    const response = await supabaseRequest("client_requests", { method: "POST", headers: { Prefer: "return=representation" }, body: JSON.stringify(row) });
    if (!response.ok) {
      const detail = await response.text();
      console.error("Supabase insert failed", response.status, detail.slice(0, 300));
      return NextResponse.json({ error: "No se ha podido guardar la solicitud. Inténtalo de nuevo más tarde." }, { status: 502 });
    }
    const inserted = await response.json();
    const id = Array.isArray(inserted) ? inserted[0]?.id : undefined;
    const meeting = type === "meeting" ? `<p><strong>Fecha preferida:</strong> ${escapeHtml(String(meetingDate))} a las ${escapeHtml(String(meetingTime))}</p><p>Esta es una petición de reunión pendiente de confirmación, no una reserva confirmada.</p>` : "";
    const html = `<h2>Nueva solicitud desde el portfolio</h2><p><strong>Tipo:</strong> ${escapeHtml(type === "meeting" ? "Solicitud de reunión" : "Presupuesto")}</p><p><strong>Nombre:</strong> ${escapeHtml(row.name)}</p><p><strong>Email:</strong> ${escapeHtml(row.email)}</p><p><strong>Empresa:</strong> ${escapeHtml(row.company || "—")}</p><p><strong>Servicio:</strong> ${escapeHtml(row.service)}</p><p><strong>Presupuesto:</strong> ${escapeHtml(row.budget)}</p>${meeting}<p><strong>Descripción:</strong></p><p>${escapeHtml(row.message).replace(/\n/g, "<br>")}</p><p>ID: ${escapeHtml(String(id ?? "guardado"))}</p>`;
    await sendNotificationEmail(type === "meeting" ? "Nueva solicitud de reunión" : "Nueva solicitud de presupuesto", html);
    return NextResponse.json({ ok: true, id });
  } catch (error) {
    console.error("Request handling failed", error);
    return NextResponse.json({ error: "La solicitud puede haberse guardado, pero no se ha podido enviar el aviso. Contacta con soporte." }, { status: 502 });
  }
}
