export type ProductCategory =
  | "Pressure Cookers"
  | "Mixer Grinders"
  | "Gas Stoves"
  | "Non-Stick Cookware"
  | "Blenders"
  | "Accessories";

export type StockStatus = "In Stock" | "Low Stock" | "Out of Stock";

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  price: number;
  specifications: ProductSpecification[];
  imageUrl: string;
  stockStatus: StockStatus;
  description: string;
}

export const categories: ProductCategory[] = [
  "Pressure Cookers",
  "Mixer Grinders",
  "Gas Stoves",
  "Non-Stick Cookware",
  "Blenders",
  "Accessories",
];

export const products: Product[] = [
  {
    id: "p001",
    name: "Premium Pressure Cooker 5L",
    brand: "AnnaBrand",
    category: "Pressure Cookers",
    price: 2499,
    specifications: [
      { label: "Capacity", value: "5 Liters" },
      { label: "Material", value: "Hard Anodized Aluminium" },
      { label: "Safety Valve", value: "Yes" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1585837146751-a44118595089?w=600&h=400&fit=crop",
    stockStatus: "In Stock",
    description: "Heavy-duty pressure cooker with secure locking system and even heat distribution.",
  },
  {
    id: "p002",
    name: "Auto-Slide Pressure Cooker 3L",
    brand: "AnnaBrand",
    category: "Pressure Cookers",
    price: 1899,
    specifications: [
      { label: "Capacity", value: "3 Liters" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Safety Valve", value: "Yes" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    stockStatus: "Low Stock",
    description: "Compact pressure cooker perfect for small families and quick meals.",
  },
  {
    id: "p003",
    name: "Ultra Mixer Grinder 750W",
    brand: "KitchenElite",
    category: "Mixer Grinders",
    price: 3299,
    specifications: [
      { label: "Power", value: "750 Watts" },
      { label: "Jars", value: "3 Jars (Wet, Dry, Chutney)" },
      { label: "Speed Control", value: "5 Speed Settings" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&h=400&fit=crop",
    stockStatus: "In Stock",
    description: "High-performance mixer grinder with stainless steel blades and three versatile jars.",
  },
  {
    id: "p004",
    name: "Compact Mixer Grinder 500W",
    brand: "HomeChef",
    category: "Mixer Grinders",
    price: 2199,
    specifications: [
      { label: "Power", value: "500 Watts" },
      { label: "Jars", value: "2 Jars" },
      { label: "Speed Control", value: "3 Speed Settings" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&h=400&fit=crop",
    stockStatus: "In Stock",
    description: "Space-saving mixer grinder ideal for daily grinding and blending tasks.",
  },
  {
    id: "p005",
    name: "Gas Stove 3-Burner",
    brand: "AnnaBrand",
    category: "Gas Stoves",
    price: 4299,
    specifications: [
      { label: "Burners", value: "3 Brass Burners" },
      { label: "Auto Ignition", value: "Yes" },
      { label: "Finish", value: "Matt Black" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=600&h=400&fit=crop",
    stockStatus: "In Stock",
    description: "Three-burner gas stove with auto ignition and easy-to-clean matte finish.",
  },
  {
    id: "p006",
    name: "4-Burner Glass Top Gas Stove",
    brand: "ChefLine",
    category: "Gas Stoves",
    price: 5499,
    specifications: [
      { label: "Burners", value: "4 Brass Burners" },
      { label: "Auto Ignition", value: "Yes" },
      { label: "Safety", value: "Flame Failure Protection" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1584568694244-44ed0004532e?w=600&h=400&fit=crop",
    stockStatus: "Out of Stock",
    description: "Premium glass-top gas stove with flame failure protection and elegant design.",
  },
  {
    id: "p007",
    name: "Non-Stick Fry Pan Set 3-Piece",
    brand: "CookRight",
    category: "Non-Stick Cookware",
    price: 1899,
    specifications: [
      { label: "Pieces", value: "3 Pans (28cm, 24cm, 20cm)" },
      { label: "Coating", value: "PFOA-Free Non-Stick" },
      { label: "Compatibility", value: "Gas & Induction" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop",
    stockStatus: "In Stock",
    description: "PFOA-free non-stick fry pan set for healthy cooking and easy cleanup.",
  },
  {
    id: "p008",
    name: "Hard-Anodized Cookware Set 7-Piece",
    brand: "AnnaBrand",
    category: "Non-Stick Cookware",
    price: 4899,
    specifications: [
      { label: "Pieces", value: "7 Pieces" },
      { label: "Material", value: "Hard Anodized Aluminium" },
      { label: "Lid Type", value: "Glass with Vent" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=600&h=400&fit=crop",
    stockStatus: "In Stock",
    description: "Complete 7-piece hard-anodized cookware set for versatile cooking needs.",
  },
  {
    id: "p009",
    name: "Personal Blender 300W",
    brand: "KitchenElite",
    category: "Blenders",
    price: 1299,
    specifications: [
      { label: "Power", value: "300 Watts" },
      { label: "Capacity", value: "600ml" },
      { label: "Portable", value: "Yes (Travel Bottle)" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&h=400&fit=crop",
    stockStatus: "In Stock",
    description: "Compact personal blender with travel bottle - perfect for smoothies on the go.",
  },
  {
    id: "p010",
    name: "Countertop Blender 1000W",
    brand: "ChefLine",
    category: "Blenders",
    price: 2899,
    specifications: [
      { label: "Power", value: "1000 Watts" },
      { label: "Speed", value: "10 Speed Settings + Pulse" },
      { label: "Jar Material", value: "Glass" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&h=400&fit=crop",
    stockStatus: "Low Stock",
    description: "Powerful countertop blender for smoothies, soups, and crushing ice.",
  },
  {
    id: "p011",
    name: "Stainless Steel Tiffin Carrier",
    brand: "AnnaBrand",
    category: "Accessories",
    price: 899,
    specifications: [
      { label: "Material", value: "18/10 Stainless Steel" },
      { label: "Levels", value: "3 Tier" },
      { label: "Capacity", value: "1.5 Liters Total" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=600&h=400&fit=crop",
    stockStatus: "In Stock",
    description: "Classic 3-tier stainless steel tiffin carrier for lunches and meals.",
  },
  {
    id: "p012",
    name: "Chef's Knife Set 5-Piece",
    brand: "KitchenElite",
    category: "Accessories",
    price: 2199,
    specifications: [
      { label: "Pieces", value: "5 Knives" },
      { label: "Material", value: "High-Carbon Stainless Steel" },
      { label: "Includes", value: "Block with Sharpener" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=600&h=400&fit=crop",
    stockStatus: "In Stock",
    description: "Professional 5-piece chef's knife set with block and sharpener for precision cutting.",
  },
];
