"use client";

import { useState } from "react";
import { QuestCard } from "./QuestCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PILLAR_IDS } from "@/constants/pillars";
import { getAllQuests } from "@/data/quests";
import type { Pillar } from "@/types";

const quests = getAllQuests();

export function QuestList() {
  const [pillar, setPillar] = useState<Pillar | "all">("all");

  const filtered =
    pillar === "all"
      ? quests
      : quests.filter((q) => q.pillar === pillar);

  return (
    <Tabs value={pillar} onValueChange={(v) => setPillar(v as Pillar | "all")}>
      <TabsList className="mb-4 flex w-full flex-wrap">
        <TabsTrigger value="all">All</TabsTrigger>
        {PILLAR_IDS.map((id) => (
          <TabsTrigger key={id} value={id}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="mt-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((quest, i) => (
            <QuestCard key={quest.id} quest={quest} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-8 text-center text-text-dark/70">
            No quests in this category yet.
          </p>
        )}
      </div>
    </Tabs>
  );
}
