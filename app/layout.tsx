import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { languageAlternates, seoByLocale, siteUrl } from "@/data/seo";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },

  title: seoByLocale.es.title,

  description: seoByLocale.es.description,

  verification: {
    google: "eh0fHRYi7eCZgFDVRG-ANiWlHPNoUMqwLixUwhVHuzw",
  },


  authors: [
    {
      name: "Lucía Castañeda",
    },
  ],

  creator: "Lucía Castañeda",

  keywords: [
    "Lucía Castañeda",
    "Ingeniería Informática",
    "Sistemas de Información",
    "Desarrollo web",
    "Inteligencia artificial",
    "Automatización",
    "Data Engineering",
    "SAP S/4HANA",
    "Data Migration",
    "Portfolio",
  ],

  alternates: {
    canonical: "/",
    languages: {
      es: languageAlternates.es,
      en: languageAlternates.en,
      fr: languageAlternates.fr,
      de: languageAlternates.de,
      it: languageAlternates.it,
      pt: languageAlternates.pt,
      nl: languageAlternates.nl,
      ru: languageAlternates.ru,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Lucía Castañeda",
    title: seoByLocale.es.title,
    description: seoByLocale.es.description,

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lucía Castañeda — Ingeniería Informática · Sistemas de Información",
      },
    ],

    locale: "es_ES",
    alternateLocale: [
      "en_US",
      "fr_FR",
      "de_DE",
      "it_IT",
      "pt_PT",
      "nl_NL",
      "ru_RU",
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: seoByLocale.es.title,
    description: seoByLocale.es.description,
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: profile.name,
  alternateName: "Lucía Castañeda",
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  description: profile.extendedDescription,
  email: profile.contact.email,
  sameAs: [profile.contact.linkedin],
  knowsAbout: [...profile.areas, ...profile.technologies],
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Lucía Castañeda",
  alternateName: "Portfolio de Lucía Castañeda",
  description: seoByLocale.es.description,
  inLanguage: ["es", "en", "fr", "de", "it", "pt", "nl", "ru"],
  publisher: { "@id": `${siteUrl}/#person` },
};

const personStructuredDataJson = JSON.stringify(personStructuredData).replace(/</g, "\\u003c");
const websiteStructuredDataJson = JSON.stringify(websiteStructuredData).replace(/</g, "\\u003c");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personStructuredDataJson }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: websiteStructuredDataJson }} />
        {children}
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}