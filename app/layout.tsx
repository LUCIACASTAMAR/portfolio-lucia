import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { languageAlternates, seoByLocale, siteUrl } from "@/data/seo";

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

  title: seoByLocale.es.title,

  description: seoByLocale.es.description,

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
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}