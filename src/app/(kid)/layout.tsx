"use client";

import { useSession } from "next-auth/react";
import { BottomNav } from "@/components/layout/BottomNav";

export default function KidLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const isKid = (session?.user as { role?: string } | undefined)?.role === "kid";

  return (
    <>
      {children}
      {isKid && <BottomNav />}
    </>
  );
}
