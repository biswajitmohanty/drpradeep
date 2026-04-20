"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Check, Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { LOCALE_LABELS, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LOCALES: Locale[] = ["en", "hi", "or"];

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("languageSwitcher");

  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", onClick);
      return () => document.removeEventListener("mousedown", onClick);
    }
  }, [open]);

  function onSelect(next: Locale) {
    setOpen(false);
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t("label")}
        disabled={isPending}
        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-2 text-body-sm font-medium text-text-secondary hover:text-text-primary hover:border-primary/40 transition-colors duration-300 disabled:opacity-60"
      >
        <Globe size={14} />
        <span className="hidden sm:inline">{LOCALE_LABELS[locale].native}</span>
        <span className="sm:hidden uppercase">{locale}</span>
      </button>

      <div
        role="menu"
        aria-label={t("label")}
        className={cn(
          "absolute right-0 top-full mt-2 min-w-[170px] rounded-md border border-border bg-surface shadow-lg p-1 transition-all duration-300 ease-smooth",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        )}
      >
        {LOCALES.map((loc) => {
          const active = loc === locale;
          return (
            <button
              key={loc}
              type="button"
              role="menuitemradio"
              aria-checked={active}
              onClick={() => onSelect(loc)}
              className={cn(
                "flex items-center justify-between w-full px-3 py-2 rounded-md text-body-sm transition-colors",
                active
                  ? "bg-primary-soft text-text-primary font-medium"
                  : "text-text-secondary hover:bg-primary-soft/50 hover:text-text-primary"
              )}
            >
              <span>
                <span className="block">{LOCALE_LABELS[loc].native}</span>
                <span className="block text-caption text-text-muted">
                  {LOCALE_LABELS[loc].english}
                </span>
              </span>
              {active ? <Check size={14} className="text-primary" /> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
