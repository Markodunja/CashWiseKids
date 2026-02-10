"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ChildTreeSummaryProps {
  child: {
    id: string;
    name: string;
    treeLevel: number;
    sproutPoints: number;
    questsCompleted: number;
  };
  index?: number;
}

export function ChildTreeSummary({ child, index = 0 }: ChildTreeSummaryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl" aria-hidden>🌳</span>
            <span className="font-semibold text-navy">{child.name}</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-text-dark/80">
            Tree level {child.treeLevel} · {child.sproutPoints} Sprout Points
          </p>
          <p className="text-xs text-text-dark/60">
            {child.questsCompleted} quests completed
          </p>
          <Button asChild size="sm" variant="outline" className="mt-2">
            <Link href={`/parent/${child.id}`}>View progress</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
