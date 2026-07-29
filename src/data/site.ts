export type Product = {
  id: string;
  category: string;
  categorySlug: "whole-home" | "drinking-water" | "add-ons";
  name: string;
  description: string;
  benefits: string[];
  availability: string;
  availabilityTone: "available" | "limited" | "quote";
  visual: "complete" | "softener" | "ro" | "prefilter";
  featured?: boolean;
};

export const navigation = [
  { label: "Products", href: "/products" },
  { label: "Reviews", href: "/reviews" },
  { label: "Our Story", href: "/our-story" },
];

export const products: Product[] = [
  {
    id: "complete-home",
    category: "Whole home systems",
    categorySlug: "whole-home",
    name: "Complete Home System Package",
    description: "A coordinated softening and carbon filtration package built to improve water throughout the home.",
    benefits: ["Ceramic disc valve", "Jacobi coconut shell carbon", "ResinTech CG10 resin", "1 1/4-inch distributor tube"],
    availability: "In stock - quote today",
    availabilityTone: "available",
    visual: "complete",
    featured: true,
  },
  {
    id: "water-softener",
    category: "Whole home systems",
    categorySlug: "whole-home",
    name: "Water Softener with Chlorine Filtration",
    description: "High-flow whole-home treatment designed to reduce hardness and chlorine while protecting fixtures and appliances.",
    benefits: ["High-flow valve platform", "Programmable regeneration", "USA-built assembly", "NSF-certified components"],
    availability: "In stock",
    availabilityTone: "available",
    visual: "softener",
    featured: true,
  },
  {
    id: "hw800-alkapro",
    category: "Drinking water systems",
    categorySlug: "drinking-water",
    name: "HW800 AlkaPro",
    description: "A compact tankless reverse-osmosis drinking water system for clean, convenient water at the kitchen tap.",
    benefits: ["100 GPD capacity", "Tankless footprint", "Multi-stage filtration", "Installation available"],
    availability: "Limited stock",
    availabilityTone: "limited",
    visual: "ro",
    featured: true,
  },
  {
    id: "presediment-filter",
    category: "Add ons",
    categorySlug: "add-ons",
    name: "Pre-Sediment Filter",
    description: "Captures dirt, sand, rust, and sediment before they reach the primary treatment system or household plumbing.",
    benefits: ["Protects downstream media", "Serviceable housing", "Supports steady flow", "Visible filter chamber"],
    availability: "Configured to order",
    availabilityTone: "quote",
    visual: "prefilter",
  },
];

export const superiority = [
  { number: "01", title: "Ceramic Disc Valve", detail: "Durable valve control engineered for dependable daily cycling." },
  { number: "02", title: "Jacobi Carbon", detail: "Premium coconut shell activated carbon from a trusted media specialist." },
  { number: "03", title: "ResinTech CG10", detail: "Ten-percent crosslinked resin selected for demanding water conditions." },
  { number: "04", title: "Higher Flow", detail: "A 1 1/4-inch distributor tube supports better whole-home flow." },
  { number: "05", title: "NSF Components", detail: "System components are selected with recognized NSF certifications." },
  { number: "06", title: "Built in USA", detail: "Assembled with direct oversight and serviceability in mind." },
];

export const faqs = [
  {
    question: "What does a whole-home filtration system do?",
    answer: "It treats water where the main line enters the house, so filtered water can reach the kitchen, bathrooms, laundry, and other fixtures.",
  },
  {
    question: "How does reverse osmosis treat drinking water?",
    answer: "An RO system uses pressure to move water through a semipermeable membrane, helping reduce many dissolved substances before the water reaches its dedicated faucet.",
  },
  {
    question: "When do replacement filters need to be changed?",
    answer: "The timing depends on the equipment and household usage. Many replaceable cartridges are serviced every six to twelve months; the product schedule is the best guide.",
  },
  {
    question: "Why choose filtration for the entire home?",
    answer: "Whole-home treatment can improve water at every fixture and help protect plumbing, water-using appliances, surfaces, and everyday routines.",
  },
  {
    question: "Which water concerns can these systems address?",
    answer: "Configurations can be tailored for concerns such as hardness, chlorine, sediment, taste, and odor. A water test helps determine the right media and equipment.",
  },
  {
    question: "Will a filtration system reduce water pressure?",
    answer: "Correct sizing is critical. Evergreen H2O uses high-flow components, including a 1 1/4-inch distributor tube, to help preserve strong household flow.",
  },
];

export const reviews = [
  {
    quote: "The difference was immediate. The water feels better, the glassware is clearer, and the installation looks incredibly clean.",
    name: "Verified homeowner",
    location: "North Texas",
    product: "Complete Home System",
  },
  {
    quote: "They explained every component without pressure. We understood the system, the maintenance, and exactly why it fit our home.",
    name: "Whole-home customer",
    location: "Dallas-Fort Worth",
    product: "Softener + Carbon",
  },
  {
    quote: "Strong pressure, excellent-tasting water, and a team that treated the mechanical room like it was their own home.",
    name: "Installation customer",
    location: "Texas",
    product: "Whole Home + RO",
  },
];

export const installations = [
  "/installations/1.jpg",
  "/installations/2.jpeg",
  "/installations/3.jpeg",
  "/installations/4.jpeg",
  "/installations/5.png",
  "/installations/6.png",
  "/installations/7.png",
  "/installations/8.png",
  "/installations/9.png",
  "/installations/10.png",
  "/installations/11.png",
  "/installations/12.png",
  "/installations/13.png",
  "/installations/14.png",
  "/installations/15.png",
  "/installations/16.png",
  "/installations/17.png",
  "/installations/18.png",
  "/installations/19.png",
  "/installations/20.png",
  "/installations/21.png",
  "/installations/22.png",
  "/installations/23.png",
  "/installations/24.png",
  "/installations/25.png",
  "/installations/26.png",
  "/installations/27.png",
  "/installations/28.png",
  "/installations/29.png",
];
