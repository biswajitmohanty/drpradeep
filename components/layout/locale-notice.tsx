import { Info } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export async function LocaleNotice() {
  const locale = await getLocale();
  if (locale === routing.defaultLocale) return null;
  const t = await getTranslations("localeNotice");

  return (
    <div
      className="border-b border-accent/30 bg-accent-soft/40"
      role="note"
      aria-label={t("title")}
    >
      <div className="container-page py-3 flex items-start gap-3">
        <Info
          size={18}
          className="text-accent-hover mt-0.5 flex-shrink-0"
          aria-hidden="true"
        />
        <p className="text-body-sm text-text-primary text-pretty">
          <span className="font-medium">{t("title")}. </span>
          <span className="text-text-secondary">{t("body")}</span>
        </p>
      </div>
    </div>
  );
}
