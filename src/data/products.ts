export type ProductArt = "whole" | "ro" | "counter" | "shower";
export type StockTone = "available" | "low" | "restock";

export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  price: string;
  stock: string;
  stockTone: StockTone;
  art: ProductArt;
  placement: string;
  bestFor: string;
  service: string;
  highlights: readonly string[];
};

export const products: readonly Product[] = [
  {
    slug: "whole-home-carbon-system",
    name: "Whole Home Carbon System",
    category: "Whole home",
    description: "A central filtration system designed to improve water throughout the house.",
    price: "From $2,450",
    stock: "In stock · ships in 2 days",
    stockTone: "available",
    art: "whole",
    placement: "Main water line",
    bestFor: "Households seeking one system for multiple rooms and routines",
    service: "Configuration and replacement guidance included",
    highlights: ["Point-of-entry placement", "Multiple media configurations", "Sized around the home"],
  },
  {
    slug: "under-sink-reverse-osmosis",
    name: "Under-Sink Reverse Osmosis",
    category: "Drinking water",
    description: "Dedicated, multi-stage filtration for crisp water at the kitchen sink.",
    price: "From $890",
    stock: "Low stock · 3 systems left",
    stockTone: "low",
    art: "ro",
    placement: "Kitchen cabinet",
    bestFor: "Households prioritizing a dedicated drinking and cooking tap",
    service: "Configuration and filter schedule confirmed before purchase",
    highlights: ["Point-of-use design", "Compact under-sink layout", "Optional mineral-finish stage"],
  },
  {
    slug: "countertop-mineral-filter",
    name: "Countertop Mineral Filter",
    category: "Countertop",
    description: "A compact option for renters, apartments, and simple everyday use.",
    price: "From $320",
    stock: "In stock · ready to ship",
    stockTone: "available",
    art: "counter",
    placement: "Kitchen countertop",
    bestFor: "Renters, apartments, and households wanting a compact setup",
    service: "Simple cartridge compatibility guidance",
    highlights: ["Small-footprint format", "Straightforward setup", "Easy-to-identify cartridges"],
  },
  {
    slug: "shower-bath-filter",
    name: "Shower & Bath Filter",
    category: "Bath",
    description: "Targeted filtration designed for a cleaner-feeling shower experience.",
    price: "From $145",
    stock: "Restocking · ships next week",
    stockTone: "restock",
    art: "shower",
    placement: "Shower connection",
    bestFor: "Households looking for a focused bath or shower upgrade",
    service: "Replacement-cartridge reminders available",
    highlights: ["Targeted point-of-use design", "Compact housing", "Clear replacement path"],
  },
];
