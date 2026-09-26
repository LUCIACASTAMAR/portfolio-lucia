import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import type { Locale } from "@/i18n";
import { languageAlternates, seoByLocale } from "@/data/seo";

const locales = ["es", "en", "fr", "de", "it", "pt", "nl", "ru"] as const;

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    return {};
  }

  const currentLocale = locale as Locale;
  const seo = seoByLocale[currentLocale];

  return {
    title: seo.title,
    description: seo.description,

    alternates: {
      canonical: `/${currentLocale}`,
      languages: languageAlternates,
    },

    openGraph: {
      type: "website",
      url: languageAlternates[currentLocale],
      siteName: "Lucía Castañeda",
      title: seo.title,
      description: seo.description,
       images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Lucía Castañeda — Ingeniería Informática · Sistemas de Información",
    },
  ],
      locale:
        currentLocale === "es"
          ? "es_ES"
          : currentLocale === "en"
            ? "en_US"
            : currentLocale === "fr"
              ? "fr_FR"
              : currentLocale === "de"
                ? "de_DE"
                : currentLocale === "it"
                  ? "it_IT"
                  : currentLocale === "pt"
                    ? "pt_PT"
                    : currentLocale === "nl"
                      ? "nl_NL"
                      : "ru_RU",
    },

    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export default async function LocalizedPage({ params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  return <HomePage locale={locale as Locale} />;
}