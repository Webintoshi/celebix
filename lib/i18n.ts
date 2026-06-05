export type Locale = "tr" | "en";

export const defaultLocale: Locale = "tr";

export const locales: Locale[] = ["tr", "en"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeLabels: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
};

export const localePrefixes: Record<Locale, string> = {
  tr: "/tr",
  en: "/en",
};
