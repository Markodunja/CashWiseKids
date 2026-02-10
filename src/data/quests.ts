import questsJson from "./quests.json";
import type { Quest, Pillar } from "@/types";

const quests = questsJson as Quest[];

export function getAllQuests(): Quest[] {
  return quests;
}

export function getQuestById(id: string): Quest | undefined {
  return quests.find((q) => q.id === id);
}

export function getQuestsByPillar(pillar: Pillar): Quest[] {
  return quests.filter((q) => q.pillar === pillar);
}

export function getQuestsForAge(age: number): Quest[] {
  return quests.filter(
    (q) => age >= q.ageRange[0] && age <= q.ageRange[1]
  );
}
