import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AchievementsPage() {
  return (
    <PageContainer>
      <h1 className="mb-6 text-2xl font-bold text-navy">Achievements</h1>
      <Card>
        <CardHeader>
          <CardTitle>Badge gallery</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-text-dark">
            Earned and locked badges, level-up celebration — coming soon.
          </p>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
