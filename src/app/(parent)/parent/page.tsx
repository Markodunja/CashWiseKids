import { PageContainer } from "@/components/layout/PageContainer";
import { DashboardOverview } from "@/components/parent/DashboardOverview";

export default function ParentDashboardPage() {
  return (
    <PageContainer>
      <h1 className="mb-6 text-2xl font-bold text-navy">Parent Dashboard</h1>
      <DashboardOverview />
    </PageContainer>
  );
}
