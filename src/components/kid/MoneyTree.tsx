"use client";

import { motion } from "framer-motion";

interface MoneyTreeProps {
  level: number;
  fruits?: number;
}

function treeEmoji(level: number) {
  if (level >= 5) return "🌳";
  if (level >= 3) return "🌲";
  return "🌱";
}

export function MoneyTree({ level, fruits = 0 }: MoneyTreeProps) {
  const displayFruits = fruits > 0 ? Math.min(fruits, level * 3) : level;
  const emoji = treeEmoji(level);

  return (
    <motion.div
      className="flex flex-col items-center justify-end rounded-card-lg border-2 border-primary/30 bg-bg-warm-alt p-8"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      aria-label={`Money Tree level ${level} with ${displayFruits} fruits`}
    >
      <motion.div
        className="mb-4 text-6xl sm:text-7xl"
        role="img"
        aria-hidden
        animate={{ rotate: [-1, 1, -1] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {emoji}
      </motion.div>
      <p className="text-sm font-medium text-primary">Level {level}</p>
      {displayFruits > 0 && (
        <motion.p
          className="text-sm text-gold-dark"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          {displayFruits} {displayFruits === 1 ? "fruit" : "fruits"} 🍎
        </motion.p>
      )}
    </motion.div>
  );
}
