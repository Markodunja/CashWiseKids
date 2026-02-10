"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Choice {
  label: string;
  outcome: string;
  points?: number;
}

interface QuestMiniGameProps {
  content: string;
  choices: Choice[];
  onChoice: (outcome: string, points: number) => void;
}

export function QuestMiniGame({
  content,
  choices,
  onChoice,
}: QuestMiniGameProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="mb-4 font-medium text-text-dark">{content}</p>
        <ul className="flex flex-col gap-2">
          {choices.map((c, i) => (
            <motion.li
              key={c.label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Button
                variant="outline"
                className="w-full justify-start text-left"
                onClick={() => onChoice(c.outcome, c.points ?? 0)}
              >
                {c.label}
              </Button>
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
