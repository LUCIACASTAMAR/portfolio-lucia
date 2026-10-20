import { NextRequest, NextResponse } from "next/server";
import { createSessionToken, constantTimeEqual, envReady, SESSION_COOKIE } from "@/lib/requests";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!envReady() || !process.env.ADMIN_PASSWORD || !process.env.SESSION_SECRET) return NextResponse.json({ error: "El acceso de administración aún no está configurado." }, { status: 503 });
  const body = await request.json().catch(() => null);
  const password = body && typeof body.password === "string" ? body.password : "";
  if (!constantTimeEqual(password, process.env.ADMIN_PASSWORD)) return NextResponse.json({ error: "Contraseña incorrecta." }, { status: 401 });
  const session = createSessionToken();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, session.value, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: session.maxAge });
  return response;
}
