"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden rounded-card-lg bg-gradient-to-b from-sky-blue/20 to-bg-warm px-6 py-12 text-center"
      aria-label="Welcome to MoneySprout"
    >
      <motion.div
        className="mb-6 text-7xl sm:text-8xl"
        role="img"
        aria-label="Money Tree"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        🌳
      </motion.div>
      <motion.h1
        className="mb-3 text-2xl font-bold text-navy sm:text-3xl"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        MoneySprout
      </motion.h1>
      <motion.p
        className="mb-8 text-lg text-text-dark sm:text-xl"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        The fun adventure where kids grow real money habits.
      </motion.p>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        <Button asChild size="lg">
          <Link href="/signup">Sign up</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/login">Log in</Link>
        </Button>
      </motion.div>
    </section>
  );
}
