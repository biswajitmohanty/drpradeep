import type { MetadataRoute } from "next";
import { SITE, TREATMENTS } from "@/lib/constants";
import { routing } from "@/i18n/routing";

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

function localizedEntries(path: string, freq: ChangeFreq, priority: number) {
  const canonical =
    path === ""
      ? SITE.url
      : `${SITE.url}${path}`;
  const alternates = Object.fromEntries(
    routing.locales.map((l) => [
      l,
      l === routing.defaultLocale
        ? canonical
        : `${SITE.url}/${l}${path}`,
    ])
  );
  return {
    url: canonical,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
    alternates: { languages: alternates },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/treatments",
    "/robotic-surgery",
    "/patient-stories",
    "/book",
    "/contact",
  ].map((path) => localizedEntries(path, "monthly", path === "" ? 1 : 0.8));

  const treatmentRoutes = TREATMENTS.map((t) =>
    localizedEntries(`/treatments/${t.slug}`, "monthly", 0.7)
  );

  return [...staticRoutes, ...treatmentRoutes];
}
