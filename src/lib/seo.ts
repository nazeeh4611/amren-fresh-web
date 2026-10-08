import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const defaultTitle =
  "Fresh Fruits & Vegetables Wholesale Supplier in UAE | AMREN Fresh";

export const defaultDescription = siteConfig.description;

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(siteConfig.domain),
    title: {
      default: defaultTitle,
      template: `%s | ${siteConfig.name}`,
    },
    description: defaultDescription,
    keywords: [
      "fresh fruits supplier UAE",
      "fresh vegetables supplier UAE",
      "fresh produce supplier UAE",
      "fruit wholesale UAE",
      "vegetable wholesale UAE",
      "fresh fruits wholesale UAE",
      "fresh vegetables wholesale UAE",
      "fruit supplier Dubai",
      "vegetable supplier Dubai",
      "B2B fruit supplier UAE",
      "B2B vegetable supplier UAE",
      "wholesale fruits Dubai",
      "wholesale vegetables Dubai",
      "plastic products supplier UAE",
      "AMREN Fresh app",
    ],
    alternates: {
      canonical: siteConfig.url,
    },
    openGraph: {
      type: "website",
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: defaultTitle,
      description: defaultDescription,
      locale: siteConfig.locale,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "AMREN Fresh | Fresh produce supply across the UAE",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    ...overrides,
  };
}
