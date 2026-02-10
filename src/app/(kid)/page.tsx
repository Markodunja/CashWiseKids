import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { Landing } from "@/components/landing/Landing";
import { IslandHome } from "@/components/kid/IslandHome";

export default async function HomePage() {
  const session = await getSession();
  const role = (session?.user as { role?: "parent" | "kid" } | undefined)?.role;

  if (!session) {
    return <Landing />;
  }
  if (role === "parent") {
    redirect("/parent");
  }
  return <IslandHome />;
}
