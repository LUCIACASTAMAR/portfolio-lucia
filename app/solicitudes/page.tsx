"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

const copy = {
  es: { back:"Volver al portfolio", eyebrow:"NUEVO PROYECTO / REUNIÓN", title:"Cuéntame qué necesitas.", intro:"Rellena este formulario y revisaré tu solicitud personalmente. Las reuniones quedan pendientes de confirmación por email.", kind:"¿Qué necesitas?", quote:"Solicitar presupuesto", meeting:"Solicitar una reunión", name:"Nombre", email:"Correo electrónico", company:"Empresa (opcional)", service:"Servicio", choose:"Selecciona una opción", web:"Web esencial", corporate:"Web corporativa", redesign:"Rediseño web", ai:"IA y automatización", maintenance:"Mantenimiento web", other:"Otro / no lo tengo claro", budget:"Presupuesto aproximado", budgetOptions:["Aún no lo sé","Menos de 500 €","500–1.000 €","1.000–2.000 €","Más de 2.000 €"], date:"Fecha preferida", time:"Hora preferida", message:"Cuéntame un poco sobre el proyecto", messageHint:"Objetivos, necesidades, plazos o cualquier detalle útil…", send:"Enviar solicitud", sending:"Enviando…", success:"Solicitud enviada. Gracias; me pondré en contacto contigo por email.", error:"No se ha podido enviar. Comprueba los datos e inténtalo de nuevo.", required:"Completa los campos obligatorios.", privacy:"Al enviar el formulario, aceptas que use tus datos para responder a esta solicitud. No los usaré para otros fines." },
  en: { back:"Back to portfolio", eyebrow:"NEW PROJECT / MEETING", title:"Tell me what you need.", intro:"Fill in this form and I’ll review your request personally. Meeting requests are pending email confirmation.", kind:"What do you need?", quote:"Request a quote", meeting:"Request a meeting", name:"Name", email:"Email address", company:"Company (optional)", service:"Service", choose:"Choose an option", web:"Essential website", corporate:"Corporate website", redesign:"Website redesign", ai:"AI & automation", maintenance:"Website maintenance", other:"Other / not sure yet", budget:"Approximate budget", budgetOptions:["Not sure yet","Under €500","€500–€1,000","€1,000–€2,000","Over €2,000"], date:"Preferred date", time:"Preferred time", message:"Tell me about the project", messageHint:"Goals, needs, timeline or any helpful details…", send:"Send request", sending:"Sending…", success:"Request sent. Thank you; I’ll contact you by email.", error:"Could not send the request. Check the details and try again.", required:"Please complete the required fields.", privacy:"By submitting, you agree that I may use your details to respond to this request. They will not be used for other purposes." },
  fr: { back:"Retour au portfolio", eyebrow:"NOUVEAU PROJET / RENDEZ-VOUS", title:"Parlons de votre besoin.", intro:"Remplissez ce formulaire. Les demandes de rendez-vous restent à confirmer par e-mail.", kind:"Votre besoin", quote:"Demander un devis", meeting:"Demander un rendez-vous", name:"Nom", email:"Adresse e-mail", company:"Entreprise (facultatif)", service:"Service", choose:"Choisir une option", web:"Site essentiel", corporate:"Site vitrine", redesign:"Refonte du site", ai:"IA et automatisation", maintenance:"Maintenance du site", other:"Autre / pas encore sûr", budget:"Budget approximatif", budgetOptions:["Pas encore défini","Moins de 500 €","500–1 000 €","1 000–2 000 €","Plus de 2 000 €"], date:"Date souhaitée", time:"Heure souhaitée", message:"Parlez-moi du projet", messageHint:"Objectifs, besoins, délais ou détails utiles…", send:"Envoyer la demande", sending:"Envoi…", success:"Demande envoyée. Merci, je vous répondrai par e-mail.", error:"Envoi impossible. Vérifiez les informations et réessayez.", required:"Veuillez remplir les champs obligatoires.", privacy:"Vos données seront utilisées uniquement pour répondre à cette demande." },
  de: { back:"Zurück zum Portfolio", eyebrow:"NEUES PROJEKT / TERMIN", title:"Was benötigen Sie?", intro:"Füllen Sie das Formular aus. Terminanfragen werden per E-Mail bestätigt.", kind:"Worum geht es?", quote:"Angebot anfragen", meeting:"Gespräch anfragen", name:"Name", email:"E-Mail-Adresse", company:"Unternehmen (optional)", service:"Leistung", choose:"Option auswählen", web:"Basis-Website", corporate:"Unternehmenswebsite", redesign:"Website-Redesign", ai:"KI und Automatisierung", maintenance:"Website-Wartung", other:"Sonstiges / noch unklar", budget:"Ungefähres Budget", budgetOptions:["Noch unklar","Unter 500 €","500–1.000 €","1.000–2.000 €","Über 2.000 €"], date:"Wunschtermin", time:"Wunschzeit", message:"Erzählen Sie mir vom Projekt", messageHint:"Ziele, Anforderungen, Zeitplan oder weitere Details…", send:"Anfrage senden", sending:"Wird gesendet…", success:"Anfrage gesendet. Ich melde mich per E-Mail.", error:"Anfrage konnte nicht gesendet werden. Bitte erneut versuchen.", required:"Bitte füllen Sie die Pflichtfelder aus.", privacy:"Ihre Daten werden ausschließlich zur Beantwortung dieser Anfrage verwendet." },
  it: { back:"Torna al portfolio", eyebrow:"NUOVO PROGETTO / INCONTRO", title:"Raccontami di cosa hai bisogno.", intro:"Compila il modulo. Le richieste di incontro saranno confermate via email.", kind:"Di cosa hai bisogno?", quote:"Richiedi un preventivo", meeting:"Richiedi un incontro", name:"Nome", email:"Indirizzo email", company:"Azienda (facoltativo)", service:"Servizio", choose:"Scegli un'opzione", web:"Sito essenziale", corporate:"Sito aziendale", redesign:"Restyling del sito", ai:"IA e automazione", maintenance:"Manutenzione sito", other:"Altro / non so ancora", budget:"Budget indicativo", budgetOptions:["Non ancora definito","Meno di 500 €","500–1.000 €","1.000–2.000 €","Oltre 2.000 €"], date:"Data preferita", time:"Orario preferito", message:"Parlami del progetto", messageHint:"Obiettivi, esigenze, tempi o altri dettagli…", send:"Invia richiesta", sending:"Invio…", success:"Richiesta inviata. Ti contatterò via email.", error:"Invio non riuscito. Controlla i dati e riprova.", required:"Completa i campi obbligatori.", privacy:"I dati saranno usati solo per rispondere a questa richiesta." },
  pt: { back:"Voltar ao portfólio", eyebrow:"NOVO PROJETO / REUNIÃO", title:"Conte-me do que precisa.", intro:"Preencha o formulário. Os pedidos de reunião serão confirmados por email.", kind:"O que precisa?", quote:"Pedir orçamento", meeting:"Pedir reunião", name:"Nome", email:"Email", company:"Empresa (opcional)", service:"Serviço", choose:"Escolha uma opção", web:"Site essencial", corporate:"Site corporativo", redesign:"Redesign do site", ai:"IA e automação", maintenance:"Manutenção do site", other:"Outro / ainda não sei", budget:"Orçamento aproximado", budgetOptions:["Ainda não sei","Menos de 500 €","500–1.000 €","1.000–2.000 €","Mais de 2.000 €"], date:"Data preferida", time:"Hora preferida", message:"Conte-me sobre o projeto", messageHint:"Objetivos, necessidades, prazos ou outros detalhes…", send:"Enviar pedido", sending:"A enviar…", success:"Pedido enviado. Entrarei em contacto por email.", error:"Não foi possível enviar. Verifique os dados e tente novamente.", required:"Preencha os campos obrigatórios.", privacy:"Os dados serão usados apenas para responder a este pedido." },
  nl: { back:"Terug naar portfolio", eyebrow:"NIEUW PROJECT / AFSPRAAK", title:"Vertel me wat je nodig hebt.", intro:"Vul het formulier in. Afspraakverzoeken worden per e-mail bevestigd.", kind:"Wat heb je nodig?", quote:"Offerte aanvragen", meeting:"Gesprek aanvragen", name:"Naam", email:"E-mailadres", company:"Bedrijf (optioneel)", service:"Dienst", choose:"Kies een optie", web:"Essentiële website", corporate:"Bedrijfswebsite", redesign:"Website vernieuwen", ai:"AI en automatisering", maintenance:"Websiteonderhoud", other:"Anders / nog niet zeker", budget:"Geschat budget", budgetOptions:["Nog niet bekend","Minder dan €500","€500–€1.000","€1.000–€2.000","Meer dan €2.000"], date:"Voorkeursdatum", time:"Voorkeurstijd", message:"Vertel over het project", messageHint:"Doelen, wensen, planning of andere details…", send:"Aanvraag versturen", sending:"Verzenden…", success:"Aanvraag verzonden. Ik neem per e-mail contact op.", error:"Verzenden mislukt. Controleer de gegevens en probeer opnieuw.", required:"Vul de verplichte velden in.", privacy:"Je gegevens worden alleen gebruikt om op deze aanvraag te reageren." },
  ru: { back:"Вернуться в портфолио", eyebrow:"НОВЫЙ ПРОЕКТ / ВСТРЕЧА", title:"Расскажите, что вам нужно.", intro:"Заполните форму. Запрос встречи будет подтверждён по электронной почте.", kind:"Что вам нужно?", quote:"Запросить смету", meeting:"Запросить встречу", name:"Имя", email:"Электронная почта", company:"Компания (необязательно)", service:"Услуга", choose:"Выберите вариант", web:"Базовый сайт", corporate:"Корпоративный сайт", redesign:"Редизайн сайта", ai:"ИИ и автоматизация", maintenance:"Поддержка сайта", other:"Другое / пока не знаю", budget:"Примерный бюджет", budgetOptions:["Пока не знаю","Менее 500 €","500–1 000 €","1 000–2 000 €","Более 2 000 €"], date:"Предпочтительная дата", time:"Предпочтительное время", message:"Расскажите о проекте", messageHint:"Цели, задачи, сроки и другие подробности…", send:"Отправить запрос", sending:"Отправка…", success:"Запрос отправлен. Я свяжусь с вами по электронной почте.", error:"Не удалось отправить запрос. Проверьте данные и попробуйте снова.", required:"Заполните обязательные поля.", privacy:"Данные будут использоваться только для ответа на этот запрос." },
} as const;

type Locale = keyof typeof copy;

export default function RequestsPage() {
  const params = useSearchParams();
  const requestedLocale = params.get("lang") as Locale | null;
  const locale: Locale = requestedLocale && requestedLocale in copy ? requestedLocale : "es";
  const t = copy[locale];
  const [type, setType] = useState<"quote" | "meeting">(params.get("type") === "meeting" ? "meeting" : "quote");
  const [service, setService] = useState(params.get("service") || "");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [statusKind, setStatusKind] = useState<"success" | "error" | "">("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("11:00");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true); setStatus(""); setStatusKind("");
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch("/api/requests", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type, locale, name, email, company, service, budget, message, meetingDate: date, meetingTime: time, website: data.get("website") }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || t.error);
      setStatus(t.success); setStatusKind("success");
      setName(""); setEmail(""); setCompany(""); setBudget(""); setMessage("");
      form.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : t.error); setStatusKind("error");
    } finally { setBusy(false); }
  }

  const inputClass = "mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-white/40";
  const labelClass = "block text-sm text-white/65";

  return <main className="min-h-screen bg-[#050505] px-5 py-10 text-white md:px-10 md:py-16">
    <div className="mx-auto max-w-3xl">
      <a href={`/${locale}`} className="text-sm text-white/50 transition hover:text-white">← {t.back}</a>
      <header className="mt-14 border-b border-white/10 pb-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">{t.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl">{t.title}</h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55">{t.intro}</p>
      </header>
      <form onSubmit={submit} className="mt-8 space-y-6">
        <div>
          <label className="block text-sm text-white/65">{t.kind}</label>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <button type="button" onClick={() => setType("quote")} className={`rounded-xl border px-4 py-3 text-sm transition ${type === "quote" ? "border-white/60 bg-white/10 text-white" : "border-white/10 text-white/50 hover:border-white/25"}`}>{t.quote}</button>
            <button type="button" onClick={() => setType("meeting")} className={`rounded-xl border px-4 py-3 text-sm transition ${type === "meeting" ? "border-white/60 bg-white/10 text-white" : "border-white/10 text-white/50 hover:border-white/25"}`}>{t.meeting}</button>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>{t.name} *<input required minLength={2} maxLength={120} autoComplete="name" value={name} onChange={e=>setName(e.target.value)} className={inputClass} /></label>
          <label className={labelClass}>{t.email} *<input required type="email" maxLength={254} autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} className={inputClass} /></label>
          <label className={labelClass}>{t.company}<input maxLength={160} autoComplete="organization" value={company} onChange={e=>setCompany(e.target.value)} className={inputClass} /></label>
          <label className={labelClass}>{t.service}<select value={service} onChange={e=>setService(e.target.value)} className={inputClass}><option value="">{t.choose}</option><option value="web">{t.web}</option><option value="corporate">{t.corporate}</option><option value="redesign">{t.redesign}</option><option value="ai">{t.ai}</option><option value="maintenance">{t.maintenance}</option><option value="other">{t.other}</option></select></label>
          <label className={labelClass}>{t.budget}<select value={budget} onChange={e=>setBudget(e.target.value)} className={inputClass}>{t.budgetOptions.map((option,i)=><option key={option} value={option}>{option}</option>)}</select></label>
          {type === "meeting" && <><label className={labelClass}>{t.date} *<input required type="date" min={new Date().toISOString().slice(0,10)} value={date} onChange={e=>setDate(e.target.value)} className={inputClass} /></label><label className={labelClass}>{t.time} *<input required type="time" value={time} onChange={e=>setTime(e.target.value)} className={inputClass} /></label></>}
        </div>
        <label className={labelClass}>{t.message} *<textarea required minLength={10} maxLength={5000} rows={6} value={message} onChange={e=>setMessage(e.target.value)} placeholder={t.messageHint} className={inputClass} /></label>
        <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <p className="text-xs leading-6 text-white/35">{t.privacy}</p>
        {status && <p role="status" className={`rounded-xl border p-4 text-sm ${statusKind === "success" ? "border-emerald-300/20 bg-emerald-300/5 text-emerald-100" : "border-red-300/20 bg-red-300/5 text-red-100"}`}>{status}</p>}
        <button disabled={busy} className="w-full rounded-xl border border-white/25 bg-white px-5 py-4 text-sm font-medium text-black transition hover:bg-white/90 disabled:cursor-wait disabled:opacity-60">{busy ? t.sending : t.send} <span aria-hidden="true">↗</span></button>
      </form>
    </div>
  </main>;
}
