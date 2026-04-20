import type { Metadata, Viewport } from "next";
import { Caveat, Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { SITE, DOCTOR } from "@/lib/constants";
import { buildPhysicianSchema, buildOrganizationSchema } from "@/lib/schema";
import { Analytics } from "@/components/analytics";
import "./globals.css";

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

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700"],
  variable: "--font-script",
});

export const viewport: Viewport = {
  themeColor: "#7C3AED",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
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
    locale: "en_IN",
    url: SITE.url,
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
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const physicianSchema = buildPhysicianSchema();
  const organizationSchemas = buildOrganizationSchema();

  return (
    <html
      lang="en-IN"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        {children}
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
