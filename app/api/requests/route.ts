import { NextRequest, NextResponse } from "next/server";
import { envReady, sendEmail, sendNotificationEmail, supabaseRequest } from "@/lib/requests";

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
    const calendarLink = type === "meeting" && typeof meetingDate === "string" && typeof meetingTime === "string"
      ? (() => {
          const start = `${meetingDate.replace(/-/g, "")}T${meetingTime.replace(":", "")}00`;
          const endDate = new Date(`${meetingDate}T${meetingTime}:00Z`);
          endDate.setUTCMinutes(endDate.getUTCMinutes() + 30);
          const end = `${endDate.getUTCFullYear()}${String(endDate.getUTCMonth() + 1).padStart(2, "0")}${String(endDate.getUTCDate()).padStart(2, "0")}T${String(endDate.getUTCHours()).padStart(2, "0")}${String(endDate.getUTCMinutes()).padStart(2, "0")}00`;
          const params = new URLSearchParams({
            action: "TEMPLATE",
            text: `Reunión con ${row.name}`,
            dates: `${start}/${end}`,
            details: `Solicitud de reunión recibida desde luciacastaneda.com.\\nEmail: ${row.email}\\nModalidad y hora pendientes de confirmar.\\n\\nDescripción: ${row.message}`,
            ctz: "Europe/Madrid",
          });
          return `https://calendar.google.com/calendar/render?${params.toString()}`;
        })()
      : "";
    const meeting = type === "meeting" ? `<p><strong>Fecha preferida:</strong> ${escapeHtml(String(meetingDate))} a las ${escapeHtml(String(meetingTime))}</p><p>Esta es una petición de reunión pendiente de confirmación, no una reserva confirmada.</p><p><a href="${calendarLink}" style="display:inline-block;padding:12px 18px;background:#111827;color:#ffffff;text-decoration:none;border-radius:8px;font-weight:bold;">Añadir a Google Calendar</a></p><p>Duración inicial del evento: 30 minutos. Puedes editarla en Calendar. Confirma la modalidad y la hora con el cliente antes de darla por cerrada.</p>` : "";
    const html = `<h2>Nueva solicitud desde el portfolio</h2><p><strong>Tipo:</strong> ${escapeHtml(type === "meeting" ? "Solicitud de reunión" : "Presupuesto")}</p><p><strong>Nombre:</strong> ${escapeHtml(row.name)}</p><p><strong>Email:</strong> ${escapeHtml(row.email)}</p><p><strong>Empresa:</strong> ${escapeHtml(row.company || "—")}</p><p><strong>Servicio:</strong> ${escapeHtml(row.service)}</p><p><strong>Presupuesto:</strong> ${escapeHtml(row.budget)}</p>${meeting}<p><strong>Descripción:</strong></p><p>${escapeHtml(row.message).replace(/\n/g, "<br>")}</p><p>ID: ${escapeHtml(String(id ?? "guardado"))}</p>`;
    await sendNotificationEmail(type === "meeting" ? "Nueva solicitud de reunión" : "Nueva solicitud de presupuesto", html);
    const confirmations: Record<string, string> = {
      es: "Gracias por contactar conmigo. He recibido tu solicitud y la revisaré personalmente. Las fechas de reunión propuestas quedan pendientes de confirmación.",
      en: "Thank you for getting in touch. I have received your request and will review it personally. Proposed meeting times are not confirmed yet.",
      fr: "Merci pour votre message. J’ai bien reçu votre demande. Les horaires de rendez-vous proposés restent à confirmer.",
      de: "Vielen Dank. Ich habe Ihre Anfrage erhalten. Vorgeschlagene Gesprächstermine sind noch nicht bestätigt.",
      it: "Grazie per avermi contattata. Ho ricevuto la richiesta. Gli orari proposti per l’incontro sono ancora da confermare.",
      pt: "Obrigado pelo contacto. Recebi o seu pedido. Os horários propostos para a reunião ainda não estão confirmados.",
      nl: "Bedankt voor je bericht. Ik heb je aanvraag ontvangen. Voorgestelde afspraaktijden zijn nog niet bevestigd.",
      ru: "Спасибо за обращение. Я получила ваш запрос. Предложенное время встречи пока не подтверждено.",
    };
    await sendEmail(row.email, "Hemos recibido tu solicitud / Request received", "<p>" + escapeHtml(row.name) + ",</p><p>" + escapeHtml(confirmations[String(locale)] || confirmations.es) + "</p><p>Lucía Castañeda</p>");
    return NextResponse.json({ ok: true, id });
  } catch (error) {
    console.error("Request handling failed", error);
    return NextResponse.json({ error: "La solicitud puede haberse guardado, pero no se ha podido enviar el aviso. Contacta con soporte." }, { status: 502 });
  }
}
