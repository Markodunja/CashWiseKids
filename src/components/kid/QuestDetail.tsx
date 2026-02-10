"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QuestMiniGame } from "./QuestMiniGame";
import { useKidStore } from "@/store/useKidStore";
import type { Quest } from "@/types";

interface QuestDetailProps {
  quest: Quest;
}

export function QuestDetail({ quest }: QuestDetailProps) {
  const router = useRouter();
  const completeQuest = useKidStore((s) => s.completeQuest);
  const [stepIndex, setStepIndex] = useState(0);
  const [feedback, setFeedback] = useState<{ outcome: string; points: number } | null>(null);

  const steps = quest.steps;
  const currentStep = steps[stepIndex];
  const isLastStep = stepIndex >= steps.length - 1;

  function handleChoice(outcome: string, points: number) {
    completeQuest(quest.id, points);
    setFeedback({ outcome, points });
  }

  function handleNext() {
    if (feedback) {
      router.push("/quests");
      router.refresh();
      return;
    }
    if (currentStep?.type === "dialog") {
      if (isLastStep) {
        completeQuest(quest.id, quest.points);
        setFeedback({ outcome: "Quest complete!", points: quest.points });
      } else {
        setStepIndex((i) => i + 1);
      }
    }
  }

  if (!currentStep && !feedback) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-text-dark/80">No steps in this quest.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        {feedback ? (
          <motion.div
            key="feedback"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <Card className="border-primary/40 bg-primary/5">
              <CardContent className="pt-6">
                <p className="mb-2 font-medium text-navy">{feedback.outcome}</p>
                <p className="text-sm text-gold-dark">
                  +{feedback.points} Sprout Points
                </p>
                <Button
                  className="mt-4"
                  onClick={() => {
                    router.push("/quests");
                    router.refresh();
                  }}
                >
                  Back to Quests
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ) : currentStep?.type === "choice" && currentStep.choices?.length ? (
          <motion.div
            key={`step-${stepIndex}`}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
          >
            <QuestMiniGame
              content={currentStep.content}
              choices={currentStep.choices}
              onChoice={handleChoice}
            />
          </motion.div>
        ) : currentStep ? (
          <motion.div
            key={`step-${stepIndex}`}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
          >
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-text-dark">{currentStep.content}</p>
                <Button onClick={handleNext}>
                  {isLastStep ? "Finish" : "Next"}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
