import { create } from "zustand";
import type { JarsState } from "@/types";

const PERSIST_KEY = "moneysprout-kid";

type PersistedKidState = {
  treeLevel?: number;
  sproutPoints?: number;
  jars?: JarsState;
  completedQuestIds?: string[];
};

function loadState(): PersistedKidState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PERSIST_KEY);
    return raw ? (JSON.parse(raw) as PersistedKidState) : null;
  } catch {
    return null;
  }
}

function saveState(state: KidState) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(
      PERSIST_KEY,
      JSON.stringify({
        treeLevel: state.treeLevel,
        sproutPoints: state.sproutPoints,
        jars: state.jars,
        completedQuestIds: state.completedQuestIds,
      })
    );
  } catch {
    // ignore
  }
}

interface KidState {
  treeLevel: number;
  sproutPoints: number;
  jars: JarsState;
  completedQuestIds: string[];
  addPoints: (n: number) => void;
  setJars: (jars: Partial<JarsState>) => void;
  addToJar: (jar: keyof JarsState, amount: number) => void;
  completeQuest: (questId: string, points: number) => void;
  levelUp: () => void;
}

const defaultJars: JarsState = {
  spend: 20,
  save: 30,
  invest: 10,
  give: 10,
  fun: 30,
};

export const useKidStore = create<KidState>((set) => ({
  treeLevel: 1,
  sproutPoints: 100,
  jars: defaultJars,
  completedQuestIds: [],

  addPoints: (n) =>
    set((s) => {
      const next = { ...s, sproutPoints: s.sproutPoints + n };
      saveState(next);
      return next;
    }),

  setJars: (partial) =>
    set((s) => {
      const next = { ...s, jars: { ...s.jars, ...partial } };
      saveState(next);
      return next;
    }),

  addToJar: (jar, amount) =>
    set((s) => {
      const jars = {
        ...s.jars,
        [jar]: Math.max(0, s.jars[jar] + amount),
      };
      const next = { ...s, jars };
      saveState(next);
      return next;
    }),

  completeQuest: (questId, points) =>
    set((s) => {
      const completedQuestIds = s.completedQuestIds.includes(questId)
        ? s.completedQuestIds
        : [...s.completedQuestIds, questId];
      const next = {
        ...s,
        completedQuestIds,
        sproutPoints: s.sproutPoints + points,
      };
      saveState(next);
      return next;
    }),

  levelUp: () =>
    set((s) => {
      const next = { ...s, treeLevel: s.treeLevel + 1 };
      saveState(next);
      return next;
    }),
}));

// Hydrate from localStorage on client
if (typeof window !== "undefined") {
  const saved = loadState();
  if (saved && (saved.treeLevel != null || saved.sproutPoints != null || saved.jars || saved.completedQuestIds)) {
    useKidStore.setState({
      treeLevel: saved.treeLevel ?? 1,
      sproutPoints: saved.sproutPoints ?? 100,
      jars: saved.jars ?? defaultJars,
      completedQuestIds: saved.completedQuestIds ?? [],
    });
  }
}
