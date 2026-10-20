import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest, supabaseRequest } from "@/lib/requests";

export const runtime = "nodejs";

export async function GET() {
  if (!await isAdminRequest()) return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  const response = await supabaseRequest("client_requests?select=id,created_at,type,locale,name,email,company,service,budget,message,meeting_date,meeting_time,status&order=created_at.desc&limit=200");
  if (!response.ok) return NextResponse.json({ error: "No se han podido cargar las solicitudes." }, { status: 502 });
  return NextResponse.json({ requests: await response.json() });
}

export async function PATCH(request: NextRequest) {
  if (!await isAdminRequest()) return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  const body = await request.json().catch(() => null);
  const id = typeof body?.id === "string" ? body.id : "";
  const status = typeof body?.status === "string" ? body.status : "";
  if (!id || !["new", "in_progress", "quoted", "accepted", "closed"].includes(status)) return NextResponse.json({ error: "Datos no válidos." }, { status: 400 });
  const response = await supabaseRequest(`client_requests?id=eq.${encodeURIComponent(id)}`, { method: "PATCH", headers: { Prefer: "return=minimal" }, body: JSON.stringify({ status, updated_at: new Date().toISOString() }) });
  if (!response.ok) return NextResponse.json({ error: "No se ha podido actualizar el estado." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
