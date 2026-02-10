import { PageContainer } from "@/components/layout/PageContainer";
import { SavingsJars } from "@/components/kid/SavingsJars";

export default function SavingsPage() {
  return (
    <PageContainer>
      <h1 className="mb-6 text-2xl font-bold text-navy">Savings jars</h1>
      <SavingsJars />
    </PageContainer>
  );
}
