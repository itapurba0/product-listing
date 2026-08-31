"use client";

import { classNames } from "@/lib/utils";
import type { ProductCategory } from "@/data/products";

interface CategoryTabsProps {
  categories: ProductCategory[];
  activeCategory: ProductCategory | "All";
  onSelect: (category: ProductCategory | "All") => void;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  onSelect,
}: CategoryTabsProps) {
  const allCategories: (ProductCategory | "All")[] = ["All", ...categories];

  return (
    <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2">
      {allCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={classNames(
            "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
            activeCategory === cat
              ? "bg-brand-amber text-white shadow-sm"
              : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
