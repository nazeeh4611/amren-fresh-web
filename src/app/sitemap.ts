import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

// Bump when page content changes. A lastModified of "now" on every build
// tells Google every page changed every deploy, so it learns to ignore it.
const CONTENT_UPDATED = new Date("2026-10-19");

// Legal pages stay live and linked from the footer, but are left out of the
// sitemap: it lists only the pages we want ranking.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.domain + "/",
      lastModified: CONTENT_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
