import { PageContainer } from "@/components/layout/PageContainer";
import { QuestList } from "@/components/kid/QuestList";

export default function QuestsPage() {
  return (
    <PageContainer>
      <h1 className="mb-6 text-2xl font-bold text-navy">Quests</h1>
      <QuestList />
    </PageContainer>
  );
}
