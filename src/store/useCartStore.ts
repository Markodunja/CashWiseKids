import { create } from "zustand";

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (productId: string, name: string, price: number, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],

  addItem: (productId, name, price, quantity = 1) =>
    set((s) => {
      const existing = s.items.find((i) => i.productId === productId);
      if (existing) {
        return {
          items: s.items.map((i) =>
            i.productId === productId
              ? { ...i, quantity: i.quantity + quantity }
              : i
          ),
        };
      }
      return {
        items: [...s.items, { productId, name, price, quantity }],
      };
    }),

  removeItem: (productId) =>
    set((s) => ({
      items: s.items.filter((i) => i.productId !== productId),
    })),

  updateQuantity: (productId, quantity) =>
    set((s) => ({
      items:
        quantity <= 0
          ? s.items.filter((i) => i.productId !== productId)
          : s.items.map((i) =>
              i.productId === productId ? { ...i, quantity } : i
            ),
    })),

  clearCart: () => set({ items: [] }),
}));
