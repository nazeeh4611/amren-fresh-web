export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductDetail = {
  name: string;
  description: string;
};

export type ProductGroup = {
  id: string;
  name: string;
  summary: string;
  images: ProductImage[];
  /** Short item names rendered as chips. */
  items?: string[];
  /** Named sub-products with a one-line description. */
  details?: ProductDetail[];
  note?: string;
};

export const productGroups: ProductGroup[] = [
  {
    id: "fruits",
    name: "Fresh Fruits",
    summary: "A wide range of fresh fruits supplied to shops, supermarkets and other businesses across the UAE.",
    images: [
      {
        src: "/images/fruits/fresh-fruits-wholesale-uae.webp",
        alt: "Fresh fruits wholesale supply for UAE businesses",
      },
    ],
    items: [
      "Apples",
      "Oranges",
      "Bananas",
      "Mangoes",
      "Grapes",
      "Watermelon",
      "Pineapple",
      "Papaya",
      "Pomegranate",
      "Kiwi",
      "Strawberries",
      "Lemons",
    ],
  },
  {
    id: "vegetables",
    name: "Fresh Vegetables",
    summary: "Fresh vegetables supplied for everyday retail and commercial requirements across the UAE.",
    images: [
      {
        src: "/images/vegetables/fresh-vegetables-supplier-uae.webp",
        alt: "Fresh vegetables supplier for UAE businesses",
      },
    ],
    items: [
      "Potatoes",
      "Onions",
      "Tomatoes",
      "Carrots",
      "Cucumbers",
      "Capsicum",
      "Cabbage",
      "Cauliflower",
      "Broccoli",
      "Beans",
      "Spinach",
      "Lettuce",
      "Eggplant",
      "Zucchini",
      "Garlic",
      "Ginger",
    ],
  },
  {
    id: "prepared-produce",
    name: "Prepared Produce",
    summary: "Prepared produce designed to help businesses save preparation time and simplify everyday operations.",
    images: [
      {
        src: "/images/prepared/cut-fruits-cut-vegetables-uae.webp",
        alt: "Cut fruits and cut vegetables prepared for UAE food businesses",
      },
      {
        src: "/images/prepared/ready-to-cook-vegetables-uae.webp",
        alt: "Ready-to-cook vegetables prepared for UAE kitchens",
      },
    ],
    details: [
      {
        name: "Cut Fruits",
        description: "Fresh fruit cut and prepared for immediate use in food service and retail.",
      },
      {
        name: "Cut Vegetables",
        description: "Vegetables washed, cut and prepared to reduce kitchen preparation time.",
      },
      {
        name: "Ready-to-Cook Vegetables",
        description: "Vegetables prepared to a ready-to-cook stage for faster kitchen turnaround.",
      },
    ],
  },
  {
    id: "plastic-products",
    name: "Plastic Products",
    summary:
      "Alongside fresh produce, AMREN Fresh also supplies a range of plastic products for business and operational requirements.",
    images: [
      {
        src: "/images/plastics/plastic-products-supplier-uae.webp",
        alt: "Plastic products and packaging supplied by AMREN Fresh in the UAE",
      },
    ],
    items: [
      "Plastic packaging",
      "Commercial food containers",
      "Bags",
      "Storage products",
      "Disposable business supplies",
    ],
    note: "The exact range is confirmed at the time of ordering.",
  },
];

export const businessAudiences = [
  "Shops",
  "Supermarkets",
  "Restaurants",
  "Cafeterias",
  "Hotels",
  "Catering",
  "Retailers",
  "Food Businesses",
];
