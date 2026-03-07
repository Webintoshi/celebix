export type Locale = "tr" | "en";

export const defaultLocale: Locale = "tr";

export const locales: Locale[] = ["tr", "en"];

export const localeLabels: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
};

export const localePrefixes: Record<Locale, string> = {
  tr: "/tr",
  en: "/en",
};
