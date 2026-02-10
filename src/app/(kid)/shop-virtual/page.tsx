import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ShopVirtualPage() {
  return (
    <PageContainer>
      <h1 className="mb-6 text-2xl font-bold text-navy">Island shop</h1>
      <Card>
        <CardHeader>
          <CardTitle>Decorations</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-text-dark">
            Buy island/tree decorations with Sprout Points — coming soon.
          </p>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
