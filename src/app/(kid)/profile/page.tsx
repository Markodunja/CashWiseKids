import { redirect } from "next/navigation";
import { getSession, getRole } from "@/lib/session";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProfileForm } from "@/components/kid/ProfileForm";

export default async function ProfilePage() {
  const session = await getSession();
  const role = await getRole();
  if (!session || role !== "kid") redirect("/login");
  return (
    <PageContainer>
      <h1 className="mb-6 text-2xl font-bold text-navy">Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your profile</CardTitle>
        </CardHeader>
        <CardContent>
          <ProfileForm
            defaultName={(session.user as { name?: string })?.name ?? "Sprout"}
            defaultEmail={session.user.email ?? ""}
          />
        </CardContent>
      </Card>
    </PageContainer>
  );
}
