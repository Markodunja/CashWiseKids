import { notFound } from "next/navigation";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { QuestDetail } from "@/components/kid/QuestDetail";
import { Button } from "@/components/ui/button";
import { getQuestById } from "@/data/quests";

export default async function QuestDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const quest = getQuestById(id);
  if (!quest) notFound();

  return (
    <PageContainer>
      <div className="mb-6 flex items-center justify-between">
        <Button asChild variant="ghost" size="sm">
          <Link href="/quests">← Back</Link>
        </Button>
      </div>
      <h1 className="mb-2 text-2xl font-bold text-navy">{quest.title}</h1>
      <p className="mb-6 text-text-dark/80">{quest.storyIntro}</p>
      <QuestDetail quest={quest} />
    </PageContainer>
  );
}
