import es from "./locales/es.json";
import en from "./locales/en.json";

export const translations = {
  es,
  en,
};

export type Locale = keyof typeof translations;

export function getTranslations(locale: Locale) {
  return translations[locale];
}