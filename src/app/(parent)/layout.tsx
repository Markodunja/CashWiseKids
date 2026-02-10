import { redirect } from "next/navigation";
import { getRole } from "@/lib/session";
import { ParentNav } from "@/components/layout/ParentNav";

export default async function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const role = await getRole();
  if (role === "kid") redirect("/");
  return (
    <>
      <ParentNav />
      {children}
    </>
  );
}
