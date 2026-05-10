import type { MetadataRoute } from "next";

const SITE = "https://travelwithliana.com";

const journalSlugs = ["the-bakery-in-glendale"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/destinations`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE}/journal`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/collabs`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const journalRoutes: MetadataRoute.Sitemap = journalSlugs.map((slug) => ({
    url: `${SITE}/journal/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...journalRoutes];
}
