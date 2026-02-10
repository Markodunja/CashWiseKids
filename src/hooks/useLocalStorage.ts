"use client";

import { useEffect, useState } from "react";

const KEY = "moneysprout-kid";

export function useHydrateKidStore() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
      if (raw) {
        const data = JSON.parse(raw) as {
          treeLevel?: number;
          sproutPoints?: number;
          jars?: Record<string, number>;
          completedQuestIds?: string[];
        };
        const { useKidStore } = require("@/store/useKidStore");
        if (data.treeLevel != null) useKidStore.setState({ treeLevel: data.treeLevel });
        if (data.sproutPoints != null) useKidStore.setState({ sproutPoints: data.sproutPoints });
        if (data.jars) useKidStore.setState({ jars: data.jars });
        if (data.completedQuestIds) useKidStore.setState({ completedQuestIds: data.completedQuestIds });
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  return hydrated;
}

export function persistKidStore(state: {
  treeLevel: number;
  sproutPoints: number;
  jars: Record<string, number>;
  completedQuestIds: string[];
}) {
  try {
    if (typeof window !== "undefined") {
      localStorage.setItem(KEY, JSON.stringify(state));
    }
  } catch {
    // ignore
  }
}
