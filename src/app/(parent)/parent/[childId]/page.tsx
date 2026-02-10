import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function ParentChildDetailPage({
  params,
}: {
  params: Promise<{ childId: string }>;
}) {
  const { childId } = await params;
  return (
    <PageContainer>
      <h1 className="mb-6 text-2xl font-bold text-navy">Child progress</h1>
      <Card>
        <CardHeader>
          <CardTitle>{childId}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-text-dark">
            Progress timeline, strengths, and goals progress will appear here.
          </p>
        </CardContent>
      </Card>
      <Button asChild variant="outline" className="mt-4">
        <Link href="/parent/kids">Back to kids</Link>
      </Button>
    </PageContainer>
  );
}
