import {
  Home,
  BookOpen,
  Target,
  ShoppingBag,
  User,
  LayoutDashboard,
  Users,
  Trophy,
  Store,
  CreditCard,
  HelpCircle,
} from "lucide-react";

export const KID_NAV = [
  { path: "/", label: "Home", icon: Home },
  { path: "/quests", label: "Quests", icon: BookOpen },
  { path: "/goals", label: "Goals", icon: Target },
  { path: "/shop-virtual", label: "Shop", icon: ShoppingBag },
  { path: "/profile", label: "Profile", icon: User },
] as const;

export const PARENT_NAV = [
  { path: "/parent", label: "Dashboard", icon: LayoutDashboard },
  { path: "/parent/kids", label: "Kids", icon: Users },
  { path: "/parent/challenges", label: "Challenges", icon: Trophy },
  { path: "/store", label: "Store", icon: Store },
  { path: "/parent/billing", label: "Billing", icon: CreditCard },
  { path: "/help", label: "Help", icon: HelpCircle },
] as const;
