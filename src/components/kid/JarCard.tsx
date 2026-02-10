"use client";

import { useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { JarId } from "@/types";
import { cn } from "@/lib/utils";

const JAR_LABELS: Record<JarId, string> = {
  spend: "Spend",
  save: "Save",
  invest: "Invest",
  give: "Give",
  fun: "Fun",
};

const JAR_COLORS: Record<JarId, string> = {
  spend: "bg-orange",
  save: "bg-primary",
  invest: "bg-sky-blue",
  give: "bg-gold",
  fun: "bg-accent",
};

const CHIP_PERCENT = 10;

interface JarCardProps {
  jarId: JarId;
  amount: number;
  total: number;
  isDropTarget: boolean;
  draggingFrom: JarId | null;
  onDragStart: (jarId: JarId | null) => void;
  onDrop: (targetJarId: JarId) => void;
}

export function JarCard({
  jarId,
  amount,
  total,
  isDropTarget,
  draggingFrom,
  onDragStart,
  onDrop,
}: JarCardProps) {
  const [isDragging, setIsDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const percent = total > 0 ? Math.round((amount / total) * 100) : 0;
  const chips = Math.floor(amount / CHIP_PERCENT);
  const canTakeChip = amount >= CHIP_PERCENT;

  function handleDragStart(e: React.DragEvent) {
    if (!canTakeChip) return;
    e.dataTransfer.setData("application/json", JSON.stringify({ jarId, amount: CHIP_PERCENT }));
    e.dataTransfer.effectAllowed = "move";
    setIsDragging(true);
    onDragStart(jarId);
  }

  function handleDragEnd() {
    setIsDragging(false);
    onDragStart(null);
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    onDrop(jarId);
  }

  return (
    <Card
      ref={ref}
      className={cn(
        "transition-all",
        isDropTarget && "ring-2 ring-primary ring-offset-2"
      )}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-text-dark">{JAR_LABELS[jarId]}</span>
          <span className="text-sm text-text-dark/70">{percent}%</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <Progress value={percent} className="h-3" />
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: chips }).map((_, i) => (
            <div
              key={`${jarId}-${i}`}
              draggable={canTakeChip}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              className={cn(
                "h-6 w-6 cursor-grab rounded-full border-2 border-primary/50 active:cursor-grabbing",
                JAR_COLORS[jarId],
                isDragging && "opacity-50"
              )}
              role="button"
              aria-label={`Move 10% from ${JAR_LABELS[jarId]}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
