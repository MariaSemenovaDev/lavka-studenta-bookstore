import { CalendarDays, MapPin } from "lucide-react";

import { CmsImage } from "@/components/cms/CmsImage";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FULL_ADDRESS } from "@/lib/constants";
import type { SanityEvent } from "@/types/sanity";

function formatEventDate(date: string) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

type EventCardProps = {
  event: SanityEvent;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden bg-panel/90 p-0">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-border/70 bg-secondary">
        <CmsImage
          image={event.coverImage}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-300 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute left-4 top-4">
          <Badge tone="accent">{event.status === "past" ? "Прошло" : event.status === "cancelled" ? "Отменено" : "Скоро"}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="size-4" />
          {formatEventDate(event.eventDate)}
        </p>
        <h3 className="mt-3 font-display text-3xl leading-tight text-foreground">{event.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{event.shortDescription}</p>
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4" />
          {event.location || FULL_ADDRESS}
        </p>
        <div className="mt-5">
          <Button href={`/book-club/${event.slug}`} variant="secondary">
            Подробнее
          </Button>
        </div>
      </div>
    </Card>
  );
}
