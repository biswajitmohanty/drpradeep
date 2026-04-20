import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SITE, DOCTOR } from "@/lib/constants";
import { buildPhysicianSchema, buildOrganizationSchema } from "@/lib/schema";
import { Analytics } from "@/components/analytics";
import { routing } from "@/i18n/routing";
import "../globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
  variable: "--font-mono",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#0F766E",
  width: "device-width",
  initialScale: 1,
};

const OG_LOCALES: Record<string, string> = {
  en: "en_IN",
  hi: "hi_IN",
  or: "or_IN",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical =
    locale === routing.defaultLocale ? SITE.url : `${SITE.url}/${locale}`;

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: `${DOCTOR.name} — ${SITE.tagline}`,
      template: `%s | ${DOCTOR.name}`,
    },
    description: SITE.defaultDescription,
    keywords: [
      "robotic knee replacement Bhubaneswar",
      "hip replacement surgeon Bhubaneswar",
      "orthopaedic surgeon Bhubaneswar",
      "Dr. Pradeep Kumar Sahoo",
      "knee pain specialist Odisha",
      "Elite Ortho Care Bhubaneswar",
      "Chandrasekharpur orthopaedic surgeon",
    ],
    authors: [{ name: DOCTOR.name }],
    creator: DOCTOR.name,
    openGraph: {
      type: "website",
      locale: OG_LOCALES[locale] ?? "en_IN",
      url: canonical,
      siteName: SITE.name,
      title: `${DOCTOR.name} — ${SITE.tagline}`,
      description: SITE.defaultDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: `${DOCTOR.name} — ${SITE.tagline}`,
      description: SITE.defaultDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical,
      languages: {
        en: SITE.url,
        hi: `${SITE.url}/hi`,
        or: `${SITE.url}/or`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "nav" });

  const physicianSchema = buildPhysicianSchema();
  const organizationSchemas = buildOrganizationSchema();

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          {t("skipToMain")}
        </a>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
        {organizationSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <Analytics />
      </body>
    </html>
  );
}
