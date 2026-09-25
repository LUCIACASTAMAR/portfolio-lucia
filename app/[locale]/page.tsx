import { notFound } from "next/navigation";
import HomePage from "@/components/HomePage";
import type { Locale } from "@/i18n";

const locales = ["es", "en","fr","de","it","pt","nl","ru"] as const;

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocalizedPage({ params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

 return <HomePage locale={locale as Locale} />;
}