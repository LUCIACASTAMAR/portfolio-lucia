import es from "./locales/es.json";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
import it from "./locales/it.json";
import pt from "./locales/pt.json";
import nl from "./locales/nl.json";
import ru from "./locales/ru.json";

export const translations = {
  es,
  en,
  fr,
  de,
  it,
  pt,
  nl,
  ru,
};

export type Locale = keyof typeof translations;

export function getTranslations(locale: Locale) {
  return translations[locale];
}