import type { Pillar } from "@/types";
import { Leaf, PiggyBank, ShoppingBag, Heart, TrendingUp } from "lucide-react";

export const PILLARS: Record<
  Pillar,
  { label: string; color: string; icon: typeof Leaf }
> = {
  earn: { label: "Earn", color: "text-primary", icon: Leaf },
  save: { label: "Save", color: "text-deep-green", icon: PiggyBank },
  spend: { label: "Spend", color: "text-orange", icon: ShoppingBag },
  give: { label: "Give", color: "text-gold-dark", icon: Heart },
  invest: { label: "Invest", color: "text-sky-blue", icon: TrendingUp },
};

export const PILLAR_IDS: Pillar[] = ["earn", "save", "spend", "give", "invest"];
