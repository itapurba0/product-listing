import type { Product } from "@/data/products";

const STORE_WHATSAPP_NUMBER = "919876543210";

export function generateWhatsAppUrl(product: Product): string {
  const message = encodeURIComponent(
    `Hi, I'm interested in the "${product.name}" by ${product.brand} (ID: ${product.id}). Price: ₹${product.price}. Is it available?`
  );
  return `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${message}`;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
