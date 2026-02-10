import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GoalsPage() {
  return (
    <PageContainer>
      <h1 className="mb-6 text-2xl font-bold text-navy">Goals</h1>
      <Card>
        <CardHeader>
          <CardTitle>Savings goals</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-text-dark">
            Goals grid and add goal — coming soon.
          </p>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
