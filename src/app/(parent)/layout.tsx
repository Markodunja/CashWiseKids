import { ParentNav } from "@/components/layout/ParentNav";

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ParentNav />
      {children}
    </>
  );
}
