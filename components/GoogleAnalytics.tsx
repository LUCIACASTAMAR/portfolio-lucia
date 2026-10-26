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

    let configured = false;

    const ensureGtagQueue = () => {
      window.dataLayer = window.dataLayer || [];
      // Use Google's standard gtag queue format (the Arguments object).
      window.gtag = window.gtag || function gtag() {
        window.dataLayer?.push(arguments);
      };
      return window.gtag;
    };

    // Consent Mode v2: deny optional storage before any Google tag can run.
    const gtag = ensureGtagQueue();
    gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      functionality_storage: "granted",
      security_storage: "granted",
      wait_for_update: 500,
    });
    gtag("js", new Date());

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
        gtag("consent", "update", {
          analytics_storage: "denied",
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
        });
        return;
      }

      window[`ga-disable-${measurementId}`] = false;
      gtag("consent", "update", {
        analytics_storage: "granted",
        // The site has no advertising consent category connected to Google Ads.
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });

      if (!document.querySelector(`script[data-lucia-ga="${measurementId}"]`)) {
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        script.dataset.luciaGa = measurementId;
        document.head.appendChild(script);
      }

      if (!configured) {
        gtag("config", measurementId, {
          anonymize_ip: true,
          send_page_view: true,
        });
        configured = true;
      }
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
