export type UserRole = "parent" | "kid";

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name?: string;
}

export interface Child {
  id: string;
  name: string;
  age: number;
  parentId: string;
}

export type Pillar = "earn" | "save" | "spend" | "give" | "invest";

export interface Quest {
  id: string;
  title: string;
  pillar: Pillar;
  storyIntro: string;
  steps: QuestStep[];
  points: number;
  ageRange: [number, number];
}

export interface QuestStep {
  id: string;
  type: "dialog" | "choice" | "mini-game";
  content: string;
  choices?: { label: string; outcome: string; points?: number }[];
}

export interface Goal {
  id: string;
  name: string;
  target: number;
  current: number;
  imagePlaceholder?: string;
  childId: string;
}

export type JarId = "spend" | "save" | "invest" | "give" | "fun";

export interface JarsState {
  spend: number;
  save: number;
  invest: number;
  give: number;
  fun: number;
}

export interface Badge {
  id: string;
  name: string;
  hint: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  imagePlaceholder?: string;
  description?: string;
}

export interface VirtualDecoration {
  id: string;
  name: string;
  cost: number;
  category: "animal" | "plant" | "sky";
}
