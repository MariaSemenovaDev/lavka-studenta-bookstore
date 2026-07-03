import { ArrowRight } from "lucide-react";

import { AnnouncementCard } from "@/components/cms/AnnouncementCard";
import { EventCard } from "@/components/cms/EventCard";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DraggableCarousel } from "@/components/ui/DraggableCarousel";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { SanityAnnouncement, SanityEvent } from "@/types/sanity";

type BookClubSectionProps = {
  events: SanityEvent[];
  announcements: SanityAnnouncement[];
};

export function BookClubSection({ events, announcements }: BookClubSectionProps) {
  return (
    <Section id="book-club" className="bg-panel/35">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          eyebrow="Книжный клуб"
          title="Книжный клуб и мероприятия"
          description="Встречи, анонсы и события магазина — следите за ближайшими датами."
        />
        <Button href="/book-club" variant="secondary">
          Смотреть мероприятия
          <ArrowRight className="size-4" />
        </Button>
      </div>

      {events.length ? (
        <DraggableCarousel ariaLabel="Ближайшие мероприятия книжного клуба" className="mt-10">
          {events.slice(0, 4).map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </DraggableCarousel>
      ) : (
        <Card className="mt-10 bg-panel/82">
          <h3 className="font-display text-3xl text-foreground">Скоро здесь появятся новые встречи книжного клуба.</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            После подключения Sanity заказчик сможет сам публиковать анонсы, даты, фотографии и обновления мероприятий.
          </p>
        </Card>
      )}

      {announcements.length ? (
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {announcements.slice(0, 3).map((announcement) => (
            <AnnouncementCard key={announcement._id} announcement={announcement} />
          ))}
        </div>
      ) : null}
    </Section>
  );
}
