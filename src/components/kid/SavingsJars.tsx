"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { JarCard } from "./JarCard";
import { useKidStore } from "@/store/useKidStore";
import type { JarId } from "@/types";

const JAR_IDS: JarId[] = ["spend", "save", "invest", "give", "fun"];

export function SavingsJars() {
  const jars = useKidStore((s) => s.jars);
  const setJars = useKidStore((s) => s.setJars);
  const [draggingFrom, setDraggingFrom] = useState<JarId | null>(null);

  const total = JAR_IDS.reduce((sum, id) => sum + jars[id], 0);

  const handleDrop = useCallback(
    (targetJarId: JarId) => {
      if (!draggingFrom || draggingFrom === targetJarId) return;
      const amount = 10;
      const fromAmount = jars[draggingFrom];
      if (fromAmount < amount) return;
      setJars({
        [draggingFrom]: fromAmount - amount,
        [targetJarId]: jars[targetJarId] + amount,
      });
      setDraggingFrom(null);
    },
    [draggingFrom, jars, setJars]
  );

  return (
    <div className="space-y-6">
      <p className="text-sm text-text-dark/80">
        Drag the circles between jars to move 10% at a time. Total: {total}%.
      </p>
      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {JAR_IDS.map((jarId) => (
          <JarCard
            key={jarId}
            jarId={jarId}
            amount={jars[jarId]}
            total={total || 1}
            isDropTarget={!!draggingFrom && draggingFrom !== jarId}
            draggingFrom={draggingFrom}
            onDragStart={setDraggingFrom}
            onDrop={handleDrop}
          />
        ))}
      </motion.div>
    </div>
  );
}
