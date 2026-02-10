import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ParentKidsPage() {
  return (
    <PageContainer>
      <h1 className="mb-6 text-2xl font-bold text-navy">Kids</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your children</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-text-dark">
            Per-child progress and links to detail pages will appear here.
          </p>
          <Button asChild variant="outline" size="sm">
            <Link href="/parent/child-1">View sample child</Link>
          </Button>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
