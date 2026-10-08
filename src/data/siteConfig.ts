/**
 * Central site configuration.
 * Update real values here once they are confirmed — nothing else in the
 * codebase should hardcode domain, contact, app store or social URLs.
 */

export const siteConfig = {
  name: "AMREN Fresh",
  legalName: "AMREN Fresh",
  domain: "https://fresh.amren.ae",
  url: "https://fresh.amren.ae/",
  tagline: "Fresh produce and business supply across the UAE.",
  description:
    "AMREN Fresh supplies wholesale fruits, vegetables, prepared produce and plastic products to shops, supermarkets and businesses across the UAE. Order easily through the AMREN Fresh app.",
  locale: "en-AE",
  themeColor: "#0A2918",

  // Physical / regional presence — city only, no invented street address.
  city: "Dubai",
  region: "Dubai",
  country: "United Arab Emirates",
  countryCode: "AE",

  // App store links. DO NOT invent these — replace with real URLs when available.
  APP_STORE_URL: "YOUR_OFFICIAL_APP_STORE_URL",
  GOOGLE_PLAY_URL: "YOUR_OFFICIAL_GOOGLE_PLAY_URL",
  AMAZON_APPSTORE_URL: "YOUR_OFFICIAL_AMAZON_APPSTORE_URL",

  // Contact placeholders — only rendered when a real value is supplied.
  CONTACT_EMAIL: "",
  CONTACT_PHONE: "",
  CONTACT_ADDRESS: "",
  WHATSAPP_NUMBER: "",

  // Social placeholders — only rendered when a real URL is supplied.
  INSTAGRAM_URL: "",
  FACEBOOK_URL: "",
  LINKEDIN_URL: "",
  TIKTOK_URL: "",
} as const;

export const isConfigured = (value: string) =>
  Boolean(value) && !value.startsWith("YOUR_");
