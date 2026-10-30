import { notFound } from "next/navigation";
import type { Locale } from "@/i18n";
import ExperiencePage from "@/components/ExperiencePage";

const locales = ["es", "en", "fr", "de", "it", "pt", "nl", "ru"] as const;

type Props = { params: Promise<{ locale: string }> };

export default async function LocalizedExperience({ params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as (typeof locales)[number])) notFound();
  return <ExperiencePage locale={locale as Locale} />;
}
