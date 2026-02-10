"use client";

import { motion } from "framer-motion";

interface WelcomeSproutProps {
  childName: string;
  onComplete?: () => void;
}

export function WelcomeSprout({ childName, onComplete }: WelcomeSproutProps) {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <motion.p
        className="mb-6 text-xl font-medium text-navy"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Welcome, {childName}! Your first sprout is growing.
      </motion.p>
      <motion.div
        className="text-8xl"
        role="img"
        aria-label="Growing sprout"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: 0.2,
        }}
      >
        🌱
      </motion.div>
      <motion.div
        className="mt-4 text-6xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
      >
        🌳
      </motion.div>
      <motion.p
        className="mt-4 text-sm text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Your Money Tree is ready. Let&apos;s go to Sprout Island!
      </motion.p>
      {onComplete && (
        <motion.button
          type="button"
          className="mt-8 min-h-tap-target rounded-button bg-primary px-6 py-3 font-medium text-white hover:bg-primary-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={onComplete}
        >
          Continue
        </motion.button>
      )}
    </div>
  );
}
