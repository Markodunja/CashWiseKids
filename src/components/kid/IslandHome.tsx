"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/layout/PageContainer";
import { MoneyTree } from "@/components/kid/MoneyTree";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useKidStore } from "@/store/useKidStore";
import { formatPoints } from "@/lib/utils";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

export function IslandHome() {
  const { treeLevel, sproutPoints, completedQuestIds } = useKidStore();
  const fruits = Math.min(completedQuestIds.length + 1, treeLevel * 3);

  return (
    <PageContainer>
      <motion.h1
        className="mb-1 text-2xl font-bold text-navy"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Sprout Island
      </motion.h1>
      <motion.p
        className="mb-6 text-text-dark"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        {getGreeting()}! Here&apos;s your Money Tree.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <MoneyTree level={treeLevel} fruits={fruits} />
      </motion.div>

      <motion.div
        className="mt-6 flex flex-wrap items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Badge variant="gold" className="text-sm">
          {formatPoints(sproutPoints)}
        </Badge>
        <Badge variant="secondary">Level {treeLevel}</Badge>
        <Link
          href="/savings"
          className="text-sm font-medium text-primary underline hover:no-underline"
        >
          Savings jars →
        </Link>
      </motion.div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Today&apos;s quest</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-text-dark/80">
              Complete a short adventure to earn Sprout Points and grow your tree.
            </p>
            <Button asChild size="sm">
              <Link href="/quests">See quests</Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </PageContainer>
  );
}
