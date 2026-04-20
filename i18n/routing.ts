import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "hi", "or"],
  defaultLocale: "en",
  // English at root (no prefix); /hi and /or for other locales.
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

export const LOCALE_LABELS: Record<Locale, { native: string; english: string }> = {
  en: { native: "English", english: "English" },
  hi: { native: "हिन्दी", english: "Hindi" },
  or: { native: "ଓଡ଼ିଆ", english: "Odia" },
};
