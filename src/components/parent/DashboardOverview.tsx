"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChildTreeSummary } from "./ChildTreeSummary";

const MOCK_CHILDREN = [
  { id: "child-1", name: "Alex", treeLevel: 1, sproutPoints: 100, questsCompleted: 0 },
];

const MOCK_LEARNED = [
  "What it means to save vs. spend",
  "Putting points in different jars",
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="text-lg font-semibold text-navy">Your kids</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {MOCK_CHILDREN.map((child, i) => (
            <ChildTreeSummary key={child.id} child={child} index={i} />
          ))}
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="/parent/kids">View all kids</Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">What they learned this week</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-1 text-sm text-text-dark">
              {MOCK_LEARNED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Weekly stats</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-text-dark/80">
              Quests completed: 0 — Points earned: 0 (connect a child to see real data).
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
