import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ParentChallengesPage() {
  return (
    <PageContainer>
      <h1 className="mb-6 text-2xl font-bold text-navy">Challenges</h1>
      <Card>
        <CardHeader>
          <CardTitle>Weekly family challenge</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-text-dark">
            Weekly challenge and conversation starters, mark-as-done — coming
            soon.
          </p>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
