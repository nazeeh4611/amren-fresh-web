/**
 * Central site configuration.
 * Update real values here once they are confirmed. Nothing else in the
 * codebase should hardcode domain, contact, app store or social URLs.
 */

export const siteConfig = {
  name: "AMREN Fresh",
  legalName: "AMREN Fresh",
  domain: "https://fresh.amren.ae",
  url: "https://fresh.amren.ae/",
  tagline: "Fresh produce and business supply across the UAE.",
  description:
    "Wholesale supplier of fresh fruits, vegetables, cut and ready-to-cook produce and plastic products for shops, supermarkets and restaurants across the UAE.",
  locale: "en_AE",
  themeColor: "#0A2918",

  // Physical / regional presence: city only, no invented street address.
  city: "Dubai",
  region: "Dubai",
  country: "United Arab Emirates",
  countryCode: "AE",

  // App store links. DO NOT invent these: replace with real URLs when available.
  APP_STORE_URL: "YOUR_OFFICIAL_APP_STORE_URL",
  GOOGLE_PLAY_URL: "YOUR_OFFICIAL_GOOGLE_PLAY_URL",
  AMAZON_APPSTORE_URL: "YOUR_OFFICIAL_AMAZON_APPSTORE_URL",

  // Contact details. Each phone number is shown with call and WhatsApp actions.
  CONTACT_EMAIL: "hello@amren.ae",
  CONTACT_PHONES: ["+971 50 587 5088", "+971 56 885 7443"],
  CONTACT_ADDRESS: "",

  // Social placeholders: only rendered when a real URL is supplied.
  INSTAGRAM_URL: "",
  FACEBOOK_URL: "",
  LINKEDIN_URL: "",
  TIKTOK_URL: "",
} as const;

export const isConfigured = (value: string) =>
  Boolean(value) && !value.startsWith("YOUR_");

/** "+971 50 587 5088" -> "+971505875088" for tel: links. */
export const toTelHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

/** "+971 50 587 5088" -> "https://wa.me/971505875088" (optionally with a prefilled message). */
export const toWhatsAppHref = (phone: string, text?: string) =>
  `https://wa.me/${phone.replace(/\D/g, "")}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
