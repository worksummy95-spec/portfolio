import type { MetadataRoute } from "next";
import { cases } from "@/lib/content";
const base = "https://sumanthmanjunathportfolio.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, priority: 1 },
    ...cases.map((c) => ({ url: `${base}/work/${c.slug}`, priority: 0.8 })),
  ];
}
