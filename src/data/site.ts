export type Product = {
  id: string;
  category: string;
  categorySlug: "whole-home" | "drinking-water" | "add-ons";
  name: string;
  description: string;
  benefits: string[];
  availability: string;
  availabilityTone: "available" | "limited" | "quote";
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export const completeHomePackage: Product = {
  id: "complete-home",
  category: "Whole home systems",
  categorySlug: "whole-home",
  name: "Complete Home System Package",
  description: "A coordinated softening and carbon filtration package built to improve water throughout the home.",
  benefits: ["Ceramic disc valve", "Jacobi coconut shell carbon", "ResinTech CG10 resin", "1 1/4-inch distributor tube"],
  availability: "In stock - quote today",
  availabilityTone: "available",
  image: "/products/city-water-dual-tank.png",
  imageAlt: "Complete whole-home water treatment package with dual tanks and brine cabinet",
  featured: true,
};

export const navigation = [
  { label: "Products", href: "/products" },
  { label: "Reviews", href: "/reviews" },
  { label: "Our Story", href: "/our-story" },
];

export const products: Product[] = [
  {
    id: "water-softener",
    category: "Whole home systems",
    categorySlug: "whole-home",
    name: "Water Softener with Chlorine Filtration",
    description: "High-flow whole-home treatment designed to reduce hardness and chlorine while protecting fixtures and appliances.",
    benefits: ["High-flow valve platform", "Programmable regeneration", "USA-built assembly", "NSF-certified components"],
    availability: "In stock",
    availabilityTone: "available",
    image: "/products/water-softener-chlorine-filtration.png",
    imageAlt: "Water softener with chlorine filtration tank and brine cabinet",
    featured: true,
  },
  {
    id: "whole-home-water-filter",
    category: "Whole home systems",
    categorySlug: "whole-home",
    name: "Whole Home Water Filter",
    description: "Point-of-entry filtration designed to improve water quality throughout the home.",
    benefits: ["Whole-home coverage", "Single-tank footprint", "Professional installation", "Configured to water conditions"],
    availability: "Request a quote",
    availabilityTone: "quote",
    image: "/products/whole-home-water-filter.png",
    imageAlt: "Tall black whole-home water filtration tank",
  },
  {
    id: "whole-home-water-softener",
    category: "Whole home systems",
    categorySlug: "whole-home",
    name: "Whole Home Water Softener",
    description: "A whole-home softening system built to address hard water at every fixture.",
    benefits: ["Whole-home softening", "Space-conscious layout", "Automatic control valve", "Professional installation"],
    availability: "Request a quote",
    availabilityTone: "quote",
    image: "/products/whole-home-water-softener.png",
    imageAlt: "Whole-home water softener with black treatment tank",
  },
  {
    id: "whole-home-salt-free-conditioner",
    category: "Whole home systems",
    categorySlug: "whole-home",
    name: "Whole Home Salt-Free Conditioner",
    description: "A salt-free whole-home conditioning option for homes seeking low-maintenance scale control.",
    benefits: ["Salt-free operation", "No brine tank", "Compact footprint", "Whole-home treatment"],
    availability: "Request a quote",
    availabilityTone: "quote",
    image: "/products/whole-home-salt-free-conditioner.png",
    imageAlt: "Single black whole-home salt-free conditioning tank",
  },
  {
    id: "well-water-dual-tank",
    category: "Whole home systems",
    categorySlug: "whole-home",
    name: "Well Water Dual Tank",
    description: "A coordinated dual-tank system configured for the treatment needs of private well water.",
    benefits: ["Dual-stage treatment", "Well-water configuration", "Automatic controls", "Professional installation"],
    availability: "Configured to order",
    availabilityTone: "quote",
    image: "/products/well-water-dual-tank.png",
    imageAlt: "Well-water dual-tank treatment system with brine cabinet",
  },
  {
    id: "city-water-dual-tank",
    category: "Whole home systems",
    categorySlug: "whole-home",
    name: "City Water Dual Tank",
    description: "A dual-tank whole-home package configured for common municipal water concerns.",
    benefits: ["Dual-stage treatment", "City-water configuration", "Whole-home coverage", "Professional installation"],
    availability: "Configured to order",
    availabilityTone: "quote",
    image: "/products/city-water-dual-tank.png",
    imageAlt: "City-water dual-tank treatment system with brine cabinet",
  },
  {
    id: "home-iron-sulfur-removal",
    category: "Whole home systems",
    categorySlug: "whole-home",
    name: "Home Iron and Sulfur Removal System",
    description: "A whole-home treatment package configured to address iron and sulfur concerns.",
    benefits: ["Iron treatment", "Sulfur treatment", "Multi-stage configuration", "Professional installation"],
    availability: "Configured to order",
    availabilityTone: "quote",
    image: "/products/home-iron-sulfur-removal.png",
    imageAlt: "Iron and sulfur removal system with two treatment tanks and solution tank",
  },
  {
    id: "hw800-alkapro",
    category: "Drinking water systems",
    categorySlug: "drinking-water",
    name: "HWC AlkaPro 800",
    description: "A compact tankless reverse-osmosis drinking water system for clean, convenient water at the kitchen tap.",
    benefits: ["100 GPD capacity", "Tankless footprint", "Multi-stage filtration", "Installation available"],
    availability: "Limited stock",
    availabilityTone: "limited",
    image: "/products/hw800-alkapro.png",
    imageAlt: "HWC AlkaPro 800 tankless reverse-osmosis system with drinking-water faucet",
    featured: true,
  },
  {
    id: "5-stage-ro",
    category: "Drinking water systems",
    categorySlug: "drinking-water",
    name: "5 Stage RO",
    description: "A traditional five-stage reverse-osmosis system with a dedicated storage tank and faucet.",
    benefits: ["Five-stage filtration", "Dedicated faucet", "Storage tank", "Under-sink installation"],
    availability: "Request a quote",
    availabilityTone: "quote",
    image: "/products/5-stage-ro.png",
    imageAlt: "Five-stage reverse-osmosis system with filter housings and storage tank",
  },
  {
    id: "whole-home-uv",
    category: "Add ons",
    categorySlug: "add-ons",
    name: "Whole Home UV",
    description: "An ultraviolet treatment add-on designed for integration with a whole-home water system.",
    benefits: ["Whole-home integration", "Stainless housing", "Serviceable lamp", "Professional installation"],
    availability: "Configured to order",
    availabilityTone: "quote",
    image: "/products/whole-home-uv.png",
    imageAlt: "Stainless whole-home ultraviolet water treatment assembly",
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
    image: "/products/pre-sediment-filter.png",
    imageAlt: "Blue whole-home pre-sediment filter housings",
  },
  {
    id: "faux-rock-installation",
    category: "Add ons",
    categorySlug: "add-ons",
    name: "Faux Rock Installation",
    description: "A discreet outdoor equipment-cover option that helps treatment systems blend into landscaping.",
    benefits: ["Outdoor equipment cover", "Discreet appearance", "Service access", "Installation available"],
    availability: "Request a quote",
    availabilityTone: "quote",
    image: "/products/faux-rock-installation.png",
    imageAlt: "Faux landscape rock covering outdoor water treatment equipment",
  },
  {
    id: "shed-installation",
    category: "Add ons",
    categorySlug: "add-ons",
    name: "Shed Installation",
    description: "A protective outdoor enclosure option for organized, accessible water-treatment equipment.",
    benefits: ["Weather protection", "Organized equipment", "Service access", "Installation available"],
    availability: "Request a quote",
    availabilityTone: "quote",
    image: "/products/shed-installation.png",
    imageAlt: "Outdoor shed enclosure for water treatment equipment",
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
    location: "Upstate New York",
    product: "Complete Home System",
  },
  {
    quote: "They explained every component without pressure. We understood the system, the maintenance, and exactly why it fit our home.",
    name: "Whole-home customer",
    location: "New York City",
    product: "Softener + Carbon",
  },
  {
    quote: "Strong pressure, excellent-tasting water, and a team that treated the mechanical room like it was their own home.",
    name: "Installation customer",
    location: "New York",
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
