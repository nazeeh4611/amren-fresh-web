export type HowItWorksStep = {
  step: string;
  title: string;
  description: string;
};

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: "01",
    title: "Log In",
    description: "Use your Shop ID and PIN.",
  },
  {
    step: "02",
    title: "Browse",
    description: "Search products and check current prices and availability.",
  },
  {
    step: "03",
    title: "Order",
    description: "Choose quantities, review your order and submit.",
  },
  {
    step: "04",
    title: "Manage",
    description: "Track orders and access invoices in the app.",
  },
];

export const invoiceFeatures = [
  "Daily invoice history",
  "Open invoices directly in the app",
  "Download invoices as PDF",
  "Share invoices with accounts or records",
];

export const easeOfUseTraits = ["Large buttons", "Clear product images", "Readable text", "Straightforward navigation"];

export const appLanguages = ["English", "Arabic", "Hindi", "Malayalam"];

export const orderUnits = ["KG", "BOX", "CARTON", "PIECE"];

export type WhyPrinciple = {
  title: string;
  description: string;
};

export const whyPrinciples: WhyPrinciple[] = [
  { title: "Fresh Produce", description: "Fruits, vegetables and prepared produce sourced for business needs." },
  { title: "B2B Focus", description: "Built around wholesale ordering, not one-off consumer purchases." },
  { title: "UAE Supply", description: "Supporting business customers across the United Arab Emirates." },
  { title: "Easy Ordering", description: "Order through the app when it works better for you." },
  { title: "Clear Product Information", description: "Current pricing and availability shown before you order." },
  { title: "Order Tracking", description: "View new and completed orders in one place." },
  { title: "Invoice Access", description: "Daily invoice history, downloadable and shareable as PDF." },
  { title: "Multilingual App", description: "Available in English, Arabic, Hindi and Malayalam." },
];
