import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.domain + "/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: siteConfig.domain + "/privacy-policy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: siteConfig.domain + "/terms-and-conditions",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: siteConfig.domain + "/cookie-policy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
