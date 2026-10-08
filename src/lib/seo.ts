import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const defaultTitle =
  "Fresh Fruits & Vegetables Wholesale Supplier in UAE | AMREN Fresh";

export const defaultDescription = siteConfig.description;

const keywords = [
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
  "cut fruits supplier UAE",
  "cut vegetables supplier UAE",
  "ready to cook vegetables UAE",
  "plastic products supplier UAE",
  "restaurant produce supplier Dubai",
  "supermarket produce supplier UAE",
  "AMREN Fresh app",
];

/**
 * Builds page metadata with a correct canonical URL and matching Open Graph /
 * Twitter tags. Pass `path` (e.g. "/privacy-policy") for every page other than
 * the home page.
 */
export function buildMetadata({
  title,
  description = defaultDescription,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const fullTitle = title ? `${title} | ${siteConfig.name}` : defaultTitle;

  return {
    metadataBase: new URL(siteConfig.domain),
    title: title ?? { absolute: defaultTitle },
    description,
    keywords,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
    creator: siteConfig.legalName,
    publisher: siteConfig.legalName,
    category: "Wholesale food supply",
    alternates: { canonical: url },
    formatDetection: { telephone: true, email: true, address: false },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
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
  };
}
