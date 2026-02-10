import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-bg-warm px-4 py-12">
      <div className="mx-auto max-w-2xl space-y-6">
        <h1 className="text-2xl font-bold text-navy">Help & FAQ</h1>
        <Card>
          <CardHeader>
            <CardTitle>What is MoneySprout?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-text-dark">
              MoneySprout is a story-driven financial education platform where
              kids grow a Money Tree on Sprout Island by completing quests.
              Parents can follow progress from their dashboard.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-text-dark">
              For MVP, contact is placeholder. You can reach support at
              support@moneysprout.example
            </p>
          </CardContent>
        </Card>
        <Button asChild variant="outline">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}
