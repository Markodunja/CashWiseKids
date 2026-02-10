import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import type { UserRole } from "@/types";

export async function getSession() {
  return getServerSession(authOptions);
}

export async function getRole(): Promise<UserRole | null> {
  const session = await getSession();
  const role = (session?.user as { role?: UserRole } | undefined)?.role;
  return role ?? null;
}

export async function getChildId(): Promise<string | null> {
  const session = await getSession();
  return (session?.user as { childId?: string } | undefined)?.childId ?? null;
}
