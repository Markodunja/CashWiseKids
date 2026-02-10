"use client";

import { useCartStore } from "@/store/useCartStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

export function CartSummary() {
  const items = useCartStore((s) => s.items);
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  if (count === 0) {
    return (
      <Card>
        <CardContent className="py-6">
          <p className="text-center text-sm text-text-dark/70">
            Your cart is empty.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <p className="font-semibold text-navy">
          Cart ({count} {count === 1 ? "item" : "items"})
        </p>
      </CardHeader>
      <CardContent className="space-y-2">
        <ul className="space-y-1 text-sm text-text-dark/80">
          {items.map((i) => (
            <li key={i.productId}>
              {i.name} × {i.quantity} — {formatCurrency(i.price * i.quantity)}
            </li>
          ))}
        </ul>
        <p className="mt-2 font-medium text-primary">
          Total: {formatCurrency(total)}
        </p>
        <Button className="w-full" variant="gold" disabled>
          Checkout (placeholder)
        </Button>
      </CardContent>
    </Card>
  );
}
