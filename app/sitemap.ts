import type { MetadataRoute } from "next";
import { languageAlternates, siteUrl } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const localizedPages = Object.entries(languageAlternates).map(
    ([locale, url]) => ({
      url,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: locale === "es" ? 1 : 0.8,
    })
  );

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },

    ...localizedPages,

    {
      url: `${siteUrl}/experiencia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${siteUrl}/proyectos/toldos-pepe`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/proyectos/luxury`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}