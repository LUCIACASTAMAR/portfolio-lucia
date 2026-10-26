"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  savedAt: string;
  version: 1;
};

const STORAGE_KEY = "lucia-cookie-consent";

const copy = {
  es: {
    title: "Tu privacidad importa",
    body: "Utilizamos almacenamiento necesario para recordar tus preferencias. Las cookies de análisis y marketing permanecen desactivadas salvo que las aceptes.",
    policy: "Política de cookies",
    accept: "Aceptar todas",
    reject: "Rechazar opcionales",
    configure: "Configurar",
    settings: "Preferencias de cookies",
    necessary: "Necesarias",
    necessaryText: "Imprescindibles para recordar tu elección y permitir funciones básicas. Siempre activas.",
    analytics: "Análisis",
    analyticsText: "Ayudan a entender cómo se utiliza la web. No se activan sin tu permiso.",
    marketing: "Marketing",
    marketingText: "Permiten medir campañas o personalizar publicidad. No se activan sin tu permiso.",
    save: "Guardar preferencias",
    close: "Cerrar",
    reopen: "Cookies",
    saved: "Preferencias guardadas.",
  },
  en: {
    title: "Your privacy matters",
    body: "We use necessary storage to remember your preferences. Analytics and marketing cookies stay off unless you choose to enable them.",
    policy: "Cookie policy",
    accept: "Accept all",
    reject: "Reject optional",
    configure: "Settings",
    settings: "Cookie preferences",
    necessary: "Necessary",
    necessaryText: "Required to remember your choice and provide basic functions. Always active.",
    analytics: "Analytics",
    analyticsText: "Help us understand how the website is used. Off unless you consent.",
    marketing: "Marketing",
    marketingText: "Help measure campaigns or personalize advertising. Off unless you consent.",
    save: "Save preferences",
    close: "Close",
    reopen: "Cookies",
    saved: "Preferences saved.",
  },
  fr: {
    title: "Votre vie privée compte",
    body: "Nous utilisons le stockage nécessaire pour mémoriser vos préférences. Les cookies d’analyse et de marketing restent désactivés sans votre accord.",
    policy: "Politique relative aux cookies",
    accept: "Tout accepter",
    reject: "Refuser les facultatifs",
    configure: "Paramètres",
    settings: "Préférences de cookies",
    necessary: "Nécessaires",
    necessaryText: "Nécessaires pour mémoriser votre choix et assurer les fonctions de base. Toujours actifs.",
    analytics: "Analyse",
    analyticsText: "Aident à comprendre l’utilisation du site. Désactivés sans consentement.",
    marketing: "Marketing",
    marketingText: "Aident à mesurer les campagnes ou personnaliser la publicité. Désactivés sans consentement.",
    save: "Enregistrer",
    close: "Fermer",
    reopen: "Cookies",
    saved: "Préférences enregistrées.",
  },
  de: {
    title: "Ihre Privatsphäre ist wichtig",
    body: "Wir verwenden notwendige Speicherung, um Ihre Einstellungen zu merken. Analyse- und Marketing-Cookies bleiben ohne Zustimmung deaktiviert.",
    policy: "Cookie-Richtlinie",
    accept: "Alle akzeptieren",
    reject: "Optionale ablehnen",
    configure: "Einstellungen",
    settings: "Cookie-Einstellungen",
    necessary: "Notwendig",
    necessaryText: "Erforderlich, um Ihre Auswahl zu speichern und Grundfunktionen bereitzustellen. Immer aktiv.",
    analytics: "Analyse",
    analyticsText: "Hilft uns zu verstehen, wie die Website genutzt wird. Ohne Zustimmung deaktiviert.",
    marketing: "Marketing",
    marketingText: "Hilft Kampagnen zu messen oder Werbung zu personalisieren. Ohne Zustimmung deaktiviert.",
    save: "Einstellungen speichern",
    close: "Schließen",
    reopen: "Cookies",
    saved: "Einstellungen gespeichert.",
  },
  it: {
    title: "La tua privacy è importante",
    body: "Utilizziamo la memoria necessaria per ricordare le preferenze. I cookie di analisi e marketing restano disattivati senza consenso.",
    policy: "Informativa sui cookie",
    accept: "Accetta tutti",
    reject: "Rifiuta opzionali",
    configure: "Impostazioni",
    settings: "Preferenze cookie",
    necessary: "Necessari",
    necessaryText: "Servono a ricordare la scelta e a fornire funzioni di base. Sempre attivi.",
    analytics: "Analisi",
    analyticsText: "Aiutano a capire come viene usato il sito. Disattivati senza consenso.",
    marketing: "Marketing",
    marketingText: "Aiutano a misurare campagne o personalizzare la pubblicità. Disattivati senza consenso.",
    save: "Salva preferenze",
    close: "Chiudi",
    reopen: "Cookie",
    saved: "Preferenze salvate.",
  },
  pt: {
    title: "A sua privacidade importa",
    body: "Utilizamos armazenamento necessário para guardar as suas preferências. Os cookies de análise e marketing ficam desativados sem consentimento.",
    policy: "Política de cookies",
    accept: "Aceitar todos",
    reject: "Rejeitar opcionais",
    configure: "Configurar",
    settings: "Preferências de cookies",
    necessary: "Necessários",
    necessaryText: "Necessários para guardar a sua escolha e permitir funções básicas. Sempre ativos.",
    analytics: "Análise",
    analyticsText: "Ajudam a compreender a utilização do site. Desativados sem consentimento.",
    marketing: "Marketing",
    marketingText: "Ajudam a medir campanhas ou personalizar publicidade. Desativados sem consentimento.",
    save: "Guardar preferências",
    close: "Fechar",
    reopen: "Cookies",
    saved: "Preferências guardadas.",
  },
  nl: {
    title: "Uw privacy is belangrijk",
    body: "We gebruiken noodzakelijke opslag om uw voorkeuren te onthouden. Analyse- en marketingcookies blijven uit tenzij u toestemming geeft.",
    policy: "Cookiebeleid",
    accept: "Alles accepteren",
    reject: "Optionele weigeren",
    configure: "Instellingen",
    settings: "Cookievoorkeuren",
    necessary: "Noodzakelijk",
    necessaryText: "Nodig om uw keuze te onthouden en basisfuncties te bieden. Altijd actief.",
    analytics: "Analyse",
    analyticsText: "Helpt begrijpen hoe de website wordt gebruikt. Uit zonder toestemming.",
    marketing: "Marketing",
    marketingText: "Helpt campagnes meten of advertenties personaliseren. Uit zonder toestemming.",
    save: "Voorkeuren opslaan",
    close: "Sluiten",
    reopen: "Cookies",
    saved: "Voorkeuren opgeslagen.",
  },
  ru: {
    title: "Ваша конфиденциальность важна",
    body: "Мы используем необходимое хранилище для сохранения настроек. Аналитические и маркетинговые cookie отключены без вашего согласия.",
    policy: "Политика cookie",
    accept: "Принять все",
    reject: "Отклонить необязательные",
    configure: "Настройки",
    settings: "Настройки cookie",
    necessary: "Необходимые",
    necessaryText: "Нужны для сохранения выбора и основных функций. Всегда активны.",
    analytics: "Аналитика",
    analyticsText: "Помогает понять использование сайта. Отключена без согласия.",
    marketing: "Маркетинг",
    marketingText: "Помогает измерять кампании или персонализировать рекламу. Отключен без согласия.",
    save: "Сохранить настройки",
    close: "Закрыть",
    reopen: "Cookie",
    saved: "Настройки сохранены.",
  },
} as const;

type Locale = keyof typeof copy;

function getLocale(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return segment in copy ? (segment as Locale) : "es";
}

export default function CookieConsent() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const t = copy[locale];
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [savedMessage, setSavedMessage] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Consent;
        setAnalytics(Boolean(saved.analytics));
        setMarketing(Boolean(saved.marketing));
        setVisible(false);
      } else {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function saveConsent(allowAnalytics: boolean, allowMarketing: boolean) {
    const consent: Consent = {
      necessary: true,
      analytics: allowAnalytics,
      marketing: allowMarketing,
      savedAt: new Date().toISOString(),
      version: 1,
    };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch {
      // Keep the UI usable if browser storage is unavailable.
    }
    setAnalytics(allowAnalytics);
    setMarketing(allowMarketing);
    setVisible(false);
    setSettingsOpen(false);
    setSavedMessage(true);
    window.setTimeout(() => setSavedMessage(false), 3500);
  }

  return (
    <>
      {!visible && (
        <button
          type="button"
          onClick={() => {
            setSettingsOpen(true);
            setVisible(true);
          }}
          className="fixed bottom-4 left-4 z-[90] rounded-full border border-white/20 bg-black/90 px-4 py-2 text-xs text-white shadow-lg backdrop-blur transition hover:border-white/50"
          aria-label={t.settings}
        >
          {t.reopen}
        </button>
      )}

      {visible && (
        <section
          aria-label={t.title}
          className="fixed inset-x-0 bottom-0 z-[100] border-t border-white/15 bg-[#090909]/[.98] text-white shadow-[0_-18px_60px_rgba(0,0,0,.45)] backdrop-blur-xl"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <p className="mb-2 text-base font-semibold tracking-tight">{t.title}</p>
              <p className="text-sm leading-6 text-white/70">{t.body}</p>
              <a href="/cookies" className="mt-2 inline-block text-xs text-white/80 underline underline-offset-4 hover:text-white">
                {t.policy}
              </a>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:justify-end">
              <button type="button" onClick={() => saveConsent(false, false)} className="rounded-full border border-white/25 px-5 py-3 text-sm transition hover:bg-white/10">
                {t.reject}
              </button>
              <button type="button" onClick={() => { setSettingsOpen(true); }} className="rounded-full border border-white/25 px-5 py-3 text-sm transition hover:bg-white/10">
                {t.configure}
              </button>
              <button type="button" onClick={() => saveConsent(true, true)} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/85">
                {t.accept}
              </button>
            </div>
          </div>
        </section>
      )}

      {settingsOpen && (
        <div className="fixed inset-0 z-[110] flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-5">
          <section role="dialog" aria-modal="true" aria-labelledby="cookie-settings-title" className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-t-3xl border border-white/15 bg-[#101010] p-6 text-white shadow-2xl sm:rounded-3xl sm:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[.2em] text-white/50">Privacy</p>
                <h2 id="cookie-settings-title" className="text-xl font-semibold">{t.settings}</h2>
              </div>
              <button type="button" onClick={() => { setSettingsOpen(false); setVisible(!window.localStorage.getItem(STORAGE_KEY)); }} className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/70 hover:text-white">
                {t.close}
              </button>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[.03] p-4">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-medium">{t.necessary}</h3>
                  <span className="text-xs text-emerald-300">Always on</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/60">{t.necessaryText}</p>
              </div>
              <label className="flex cursor-pointer items-start justify-between gap-4 rounded-2xl border border-white/10 p-4 transition hover:bg-white/[.03]">
                <span>
                  <span className="block font-medium">{t.analytics}</span>
                  <span className="mt-2 block text-sm leading-6 text-white/60">{t.analyticsText}</span>
                </span>
                <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} className="mt-1 h-5 w-5 accent-white" />
              </label>
              <label className="flex cursor-pointer items-start justify-between gap-4 rounded-2xl border border-white/10 p-4 transition hover:bg-white/[.03]">
                <span>
                  <span className="block font-medium">{t.marketing}</span>
                  <span className="mt-2 block text-sm leading-6 text-white/60">{t.marketingText}</span>
                </span>
                <input type="checkbox" checked={marketing} onChange={(event) => setMarketing(event.target.checked)} className="mt-1 h-5 w-5 accent-white" />
              </label>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button type="button" onClick={() => saveConsent(false, false)} className="rounded-full border border-white/25 px-5 py-3 text-sm hover:bg-white/10">
                {t.reject}
              </button>
              <button type="button" onClick={() => saveConsent(analytics, marketing)} className="rounded-full border border-white/25 px-5 py-3 text-sm hover:bg-white/10">
                {t.save}
              </button>
              <button type="button" onClick={() => saveConsent(true, true)} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/85">
                {t.accept}
              </button>
            </div>
          </section>
        </div>
      )}

      {savedMessage && (
        <div role="status" className="fixed bottom-4 right-4 z-[120] rounded-xl border border-white/15 bg-[#111] px-4 py-3 text-sm text-white shadow-xl">
          {t.saved}
        </div>
      )}
    </>
  );
}
