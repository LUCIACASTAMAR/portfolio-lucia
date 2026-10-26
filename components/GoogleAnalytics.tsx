"use client";

import { useEffect } from "react";

type Consent = { analytics?: boolean; marketing?: boolean };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

const STORAGE_KEY = "lucia-cookie-consent";
const CONSENT_EVENT = "lucia-cookie-consent-updated";

export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID || "G-5H2CYHJ2QD";

  useEffect(() => {
    if (!measurementId || !/^G-[A-Z0-9]+$/.test(measurementId)) return;

    let scriptAdded = false;

    const readConsent = (): Consent => {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        return raw ? (JSON.parse(raw) as Consent) : {};
      } catch {
        return {};
      }
    };

    const applyConsent = () => {
      const consent = readConsent();
      const analyticsAllowed = consent.analytics === true;

      if (!analyticsAllowed) {
        window[`ga-disable-${measurementId}`] = true;
        if (window.gtag) {
          window.gtag("consent", "update", {
            analytics_storage: "denied",
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
          });
        }
        return;
      }

      window[`ga-disable-${measurementId}`] = false;

      if (!scriptAdded && !document.querySelector(`script[data-lucia-ga="${measurementId}"]`)) {
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        script.dataset.luciaGa = measurementId;
        document.head.appendChild(script);
        scriptAdded = true;
      }

      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      };
      window.gtag("js", new Date());
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      window.gtag("config", measurementId, {
        anonymize_ip: true,
        send_page_view: true,
      });
    };

    applyConsent();
    window.addEventListener(CONSENT_EVENT, applyConsent);
    window.addEventListener("storage", applyConsent);

    return () => {
      window.removeEventListener(CONSENT_EVENT, applyConsent);
      window.removeEventListener("storage", applyConsent);
    };
  }, [measurementId]);

  return null;
}
