import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { buildMetadata, defaultTitle } from "@/lib/seo";
import { siteConfig, toWhatsAppHref } from "@/data/siteConfig";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { FloatingContact } from "@/components/contact/FloatingContact";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata(),
  title: { default: defaultTitle, template: `%s | ${siteConfig.name}` },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgId = `${siteConfig.url}#organization`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: siteConfig.legalName,
        url: siteConfig.url,
        logo: `${siteConfig.domain}/icon.png`,
        description: siteConfig.description,
        email: siteConfig.CONTACT_EMAIL,
        telephone: siteConfig.CONTACT_PHONES[0],
        areaServed: { "@type": "Country", name: "United Arab Emirates" },
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.city,
          addressRegion: siteConfig.region,
          addressCountry: siteConfig.countryCode,
        },
        contactPoint: siteConfig.CONTACT_PHONES.map((phone) => ({
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: phone,
          email: siteConfig.CONTACT_EMAIL,
          areaServed: "AE",
          availableLanguage: ["English", "Arabic", "Hindi", "Malayalam"],
          url: toWhatsAppHref(phone),
        })),
      },
      {
        "@type": "WholesaleStore",
        "@id": `${siteConfig.url}#business`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: `${siteConfig.domain}/images/hero/fresh-produce-wholesale-supply-uae-hero.webp`,
        logo: `${siteConfig.domain}/icon.png`,
        description: siteConfig.description,
        telephone: siteConfig.CONTACT_PHONES[0],
        email: siteConfig.CONTACT_EMAIL,
        parentOrganization: { "@id": orgId },
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.city,
          addressRegion: siteConfig.region,
          addressCountry: siteConfig.countryCode,
        },
        areaServed: { "@type": "Country", name: "United Arab Emirates" },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: "en-AE",
        publisher: { "@id": orgId },
      },
    ],
  };

  return (
    <html lang="en-AE" className={`${archivo.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-warm-white"
        >
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
