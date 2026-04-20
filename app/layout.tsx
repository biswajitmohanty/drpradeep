// Root layout is a pass-through. `app/[locale]/layout.tsx` owns <html>, <body>,
// fonts, schemas, and the i18n provider — this keeps the lang attribute in sync
// with the active locale. See https://next-intl.dev/docs/routing/app-router.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
