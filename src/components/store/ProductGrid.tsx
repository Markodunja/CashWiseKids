"use client";

import { ProductCard } from "./ProductCard";
import { storeProducts } from "@/data/store-products";

export function ProductGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {storeProducts.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </div>
  );
}
