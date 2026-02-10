"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
import { formatCurrency } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card>
        <CardHeader className="pb-2">
          <div className="mb-2 flex h-24 items-center justify-center rounded-card bg-primary/10 text-4xl">
            🛒
          </div>
          <h3 className="font-semibold text-navy">{product.name}</h3>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-lg font-medium text-primary">
            {formatCurrency(product.price)}
          </p>
          {product.description && (
            <p className="text-sm text-text-dark/70">{product.description}</p>
          )}
          <Button
            size="sm"
            variant="orange"
            className="w-full"
            onClick={() => addItem(product.id, product.name, product.price)}
          >
            Add to cart
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
