"use client";

import { useState } from "react";
import CategoryTabs from "@/components/CategoryTabs";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import type { ProductCategory } from "@/data/products";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
          Our Products
        </h2>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Browse our collection of quality kitchen appliances
        </p>
      </div>

      {/* Category Filter */}
      <div id="categories" className="mb-8">
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-12 text-center text-sm text-zinc-400">
          No products found in this category.
        </div>
      )}
    </section>
  );
}
