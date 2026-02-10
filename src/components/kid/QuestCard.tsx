"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PILLARS } from "@/constants/pillars";
import type { Quest } from "@/types";
import { useKidStore } from "@/store/useKidStore";

interface QuestCardProps {
  quest: Quest;
  index?: number;
}

export function QuestCard({ quest, index = 0 }: QuestCardProps) {
  const completedQuestIds = useKidStore((s) => s.completedQuestIds);
  const isCompleted = completedQuestIds.includes(quest.id);
  const pillar = PILLARS[quest.pillar];
  const Icon = pillar.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className="overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="gap-1">
              <Icon className="h-3 w-3" />
              {pillar.label}
            </Badge>
            {isCompleted && (
              <Badge variant="gold">Done</Badge>
            )}
          </div>
          <h3 className="text-lg font-semibold text-navy">{quest.title}</h3>
        </CardHeader>
        <CardContent>
          <p className="mb-4 line-clamp-2 text-sm text-text-dark/80">
            {quest.storyIntro}
          </p>
          <Button asChild size="sm" variant="orange">
            <Link href={`/quests/${quest.id}`}>
              {isCompleted ? "Play again" : "Start"}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
