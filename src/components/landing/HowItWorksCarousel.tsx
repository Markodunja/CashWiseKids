"use client";

import { motion } from "framer-motion";

const STEPS = [
  { title: "Create your account", desc: "Parents sign up and add their first child.", icon: "👋" },
  { title: "Grow your Money Tree", desc: "Kids complete quests and earn Sprout Points.", icon: "🌱" },
  { title: "Learn by doing", desc: "Earn, Save, Spend, Give, Invest — one adventure at a time.", icon: "✨" },
];

export function HowItWorksCarousel() {
  return (
    <section
      className="rounded-card-lg border border-primary/20 bg-bg-warm-alt p-6"
      aria-label="How it works"
    >
      <h2 className="mb-6 text-center text-xl font-bold text-navy">
        How it works
      </h2>
      <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.title}
            className="flex flex-1 flex-col items-center rounded-card border border-primary/20 bg-bg-warm p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="mb-2 text-4xl" aria-hidden>{step.icon}</span>
            <h3 className="mb-1 font-semibold text-navy">{step.title}</h3>
            <p className="text-sm text-text-dark/80">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
