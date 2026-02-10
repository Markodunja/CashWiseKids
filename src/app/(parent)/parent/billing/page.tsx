import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ParentBillingPage() {
  return (
    <PageContainer>
      <h1 className="mb-6 text-2xl font-bold text-navy">Billing</h1>
      <Card>
        <CardHeader>
          <CardTitle>Subscription</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-text-dark">
            Subscription status and manage plan (mock for MVP).
          </p>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
