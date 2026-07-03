import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { SanityAnnouncement } from "@/types/sanity";

const labels: Record<NonNullable<SanityAnnouncement["type"]>, string> = {
  announcement: "Мероприятие клуба",
  news: "Новость клуба",
  recap: "Прошедшая встреча",
};

type AnnouncementCardProps = {
  announcement: SanityAnnouncement;
};

export function AnnouncementCard({ announcement }: AnnouncementCardProps) {
  const date = announcement.publishedAt ? new Date(announcement.publishedAt).toLocaleDateString("ru-RU") : null;

  return (
    <Card className="h-full bg-panel/86">
      {announcement.type ? <Badge tone="muted">{labels[announcement.type]}</Badge> : null}
      <h3 className="mt-4 font-display text-2xl text-foreground">{announcement.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{announcement.shortDescription}</p>
      {date ? <p className="mt-4 text-sm text-muted-foreground">{date}</p> : null}
    </Card>
  );
}
