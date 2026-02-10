import productsJson from "./store-products.json";
import type { Product } from "@/types";

export const storeProducts = productsJson as Product[];

export function getProductById(id: string): Product | undefined {
  return storeProducts.find((p) => p.id === id);
}
