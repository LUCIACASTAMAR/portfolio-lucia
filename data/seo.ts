import type { Locale } from "@/i18n";

export const siteUrl = "https://portfolio-lucia-swart.vercel.app";

export const seoByLocale: Record<
  Locale,
  {
    title: string;
    description: string;
  }
> = {
  es: {
    title: "Lucía Castañeda | Ingeniería Informática · IA · Datos · SAP",
    description:
      "Portfolio profesional de Lucía Castañeda, estudiante de Ingeniería Informática especializada en Sistemas de Información. Desarrollo web, inteligencia artificial, automatización, datos y SAP S/4HANA.",
  },

  en: {
    title: "Lucía Castañeda | Computer Engineering · AI · Data · SAP",
    description:
      "Professional portfolio of Lucía Castañeda, Computer Engineering student specializing in Information Systems. Web development, artificial intelligence, automation, data and SAP S/4HANA.",
  },

  fr: {
    title: "Lucía Castañeda | Ingénierie informatique · IA · Data · SAP",
    description:
      "Portfolio professionnel de Lucía Castañeda, étudiante en ingénierie informatique spécialisée en systèmes d'information. Développement web, intelligence artificielle, automatisation, data et SAP S/4HANA.",
  },

  de: {
    title: "Lucía Castañeda | Informatik · KI · Daten · SAP",
    description:
      "Professionelles Portfolio von Lucía Castañeda, Informatikstudentin mit Spezialisierung auf Informationssysteme. Webentwicklung, künstliche Intelligenz, Automatisierung, Daten und SAP S/4HANA.",
  },

  it: {
    title: "Lucía Castañeda | Ingegneria Informatica · IA · Data · SAP",
    description:
      "Portfolio professionale di Lucía Castañeda, studentessa di Ingegneria Informatica specializzata in Sistemi Informativi. Sviluppo web, intelligenza artificiale, automazione, dati e SAP S/4HANA.",
  },

  pt: {
    title: "Lucía Castañeda | Engenharia Informática · IA · Dados · SAP",
    description:
      "Portefólio profissional de Lucía Castañeda, estudante de Engenharia Informática especializada em Sistemas de Informação. Desenvolvimento web, inteligência artificial, automação, dados e SAP S/4HANA.",
  },

  nl: {
    title: "Lucía Castañeda | Informatica · AI · Data · SAP",
    description:
      "Professioneel portfolio van Lucía Castañeda, student Computer Engineering gespecialiseerd in Informatiesystemen. Webontwikkeling, kunstmatige intelligentie, automatisering, data en SAP S/4HANA.",
  },

  ru: {
    title: "Lucía Castañeda | Информатика · ИИ · Данные · SAP",
    description:
      "Профессиональное портфолио Lucía Castañeda, студентки компьютерной инженерии со специализацией в информационных системах. Веб-разработка, искусственный интеллект, автоматизация, данные и SAP S/4HANA.",
  },
};

export const languageAlternates = {
  es: `${siteUrl}/es`,
  en: `${siteUrl}/en`,
  fr: `${siteUrl}/fr`,
  de: `${siteUrl}/de`,
  it: `${siteUrl}/it`,
  pt: `${siteUrl}/pt`,
  nl: `${siteUrl}/nl`,
  ru: `${siteUrl}/ru`,
};