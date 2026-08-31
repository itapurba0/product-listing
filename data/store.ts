import fs from "fs";
import path from "path";
import type { Product } from "./products";
import { products as seedProducts } from "./products";

const DATA_FILE = path.join(process.cwd(), "data", "products.json");

function ensureDataFile(): Product[] {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify(seedProducts, null, 2), "utf-8");
      return seedProducts;
    }
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw) as Product[];
  } catch {
    return seedProducts;
  }
}

export function getAllProducts(): Product[] {
  return ensureDataFile();
}

export function getProductById(id: string): Product | undefined {
  const products = getAllProducts();
  return products.find((p) => p.id === id);
}

export function addProduct(data: Omit<Product, "id">): Product {
  const products = getAllProducts();
  const newProduct: Product = {
    id: `p${Date.now()}`,
    ...data,
  };
  const updated = [...products, newProduct];
  fs.writeFileSync(DATA_FILE, JSON.stringify(updated, null, 2), "utf-8");
  return newProduct;
}

export function updateProduct(id: string, data: Partial<Product>): Product | null {
  const products = getAllProducts();
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;
  const updated = { ...products[index], ...data, id };
  products[index] = updated;
  fs.writeFileSync(DATA_FILE, JSON.stringify(products, null, 2), "utf-8");
  return updated;
}

export function deleteProduct(id: string): boolean {
  const products = getAllProducts();
  const filtered = products.filter((p) => p.id !== id);
  if (filtered.length === products.length) return false;
  fs.writeFileSync(DATA_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}

export function searchProducts(query: string): Product[] {
  const products = getAllProducts();
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );
}
