import type { MetadataRoute } from "next";
import { cases, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${site.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    ...cases.map((c) => ({ url: `${site.url}/work/${c.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
