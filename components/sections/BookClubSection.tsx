import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { AnnouncementCard } from "@/components/cms/AnnouncementCard";
import { EventCard } from "@/components/cms/EventCard";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DraggableCarousel } from "@/components/ui/DraggableCarousel";
import { ImageGalleryCarousel } from "@/components/ui/ImageGalleryCarousel";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { SanityAnnouncement, SanityEvent } from "@/types/sanity";

type BookClubSectionProps = {
  events: SanityEvent[];
  announcements: SanityAnnouncement[];
};

const clubPhotos = [
  "https://sun9-86.userapi.com/s/v1/ig2/FlGeZgSwYEnOqHK0Z6LnkHHj9kq7jqD5x1usDTDO9bJ6gbbwuvtt7t8xBwM714SlvWayENoLiYcJWiKlOek1fTRJ.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1040x780&from=bu&cs=1040x0",
  "https://sun9-26.userapi.com/s/v1/ig2/WU-KzmTchpu51AKxSZ0mi8oKxk7zXfwwrvBU5L1xvS9e-0h7q2J9L0ZjquTkmvwpviGcr6EnWfCk6_T0WuHPpnEa.jpg?quality=95&as=32x69,48x104,72x156,108x234,160x347,240x520,360x780,480x1040,540x1170,591x1280&from=bu&cs=591x0",
  "https://sun9-23.userapi.com/s/v1/ig2/W6ccIrH5UW-Gc_Cvm10MNBEizf8Gi62aDXhT6T1mnw0bn3GR47DzYGZGjO87z93TQtbRQW0R_AZeK4vJsKkx-eth.jpg?quality=95&as=32x69,48x104,72x156,108x234,160x347,240x520,360x780,480x1040,540x1170,591x1280&from=bu&cs=591x0",
  "https://sun9-71.userapi.com/s/v1/ig2/TVSfg0uK9wqIJVA1IN8BYy9jcbKbaEwXZrNvQohrvVYYjNZsNQOLLBgmj_pGM28ZJR8Y-IHgmwUIv69mWj_hE_sv.jpg?quality=95&as=32x69,48x104,72x156,108x234,160x347,240x520,360x780,480x1040,540x1170,591x1280&from=bu&cs=591x0",
  "https://sun9-24.userapi.com/s/v1/ig2/74K8Vjxkp-L1xpHqNIwEKq0R2baPO5mgTbUGYWXT-6BLzuJvNMr3Qr9OqBcGlrqNf74x6nUUUTbqWVTJwBpyGbHs.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1000x750&from=bu&cs=1000x0",
  "https://sun9-44.userapi.com/s/v1/ig2/yp3gcYCcZBDoJ0fxvG7PEIm9qBQwuMxhYxSWShr7nB9oJeE5vO0_upDZ3zxryTinkRC8ke3UZe19GISsq-jHQeu0.jpg?quality=95&as=32x69,48x104,72x156,108x234,160x347,240x520,360x780,480x1040,540x1170,591x1280&from=bu&cs=591x0",
];

export function BookClubSection({ events, announcements }: BookClubSectionProps) {
  return (
    <Section id="book-club" className="bg-panel/35">
      <div className="relative overflow-hidden rounded-shell border border-border/70 bg-panel/72 px-6 py-10 shadow-elevated sm:px-8 lg:px-12 lg:py-12">
        <Image
          src="https://i.pinimg.com/736x/68/43/2b/68432bc6c7258b4c03ca4bb23b574f77.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.34] mix-blend-multiply"
          aria-hidden="true"
        />
        <div className="paper-grid absolute inset-0 opacity-42" />
        <div className="absolute inset-0 bg-gradient-to-br from-paper/56 via-paper/34 to-panel/44" />

        <div className="relative">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              eyebrow="Книжный клуб"
              title="Книжный клуб и мероприятия"
              description="Встречи и события магазина — следите за ближайшими датами."
            />
            <Button href="/book-club" variant="secondary">
              Смотреть мероприятия
              <ArrowRight className="size-4" />
            </Button>
          </div>

          <Card className="mt-8 bg-panel/84">
            <p className="max-w-4xl text-base leading-8 text-muted-foreground">
              Книжный клуб в лавке — это уютные встречи для тех, кто любит читать не в одиночку. Мы собираемся, чтобы обсуждать книги, делиться
              впечатлениями, спорить о героях, находить новые смыслы и просто проводить время среди своих.
              <br />
              <br />
              Здесь можно следить за ближайшими встречами, смотреть фотографии прошедших событий и узнавать о новых темах, подборках и книжных
              поводах. Приходите — будем читать, говорить и влюбляться в книги заново.
            </p>
          </Card>

          <div className="mt-8">
            <ImageGalleryCarousel images={clubPhotos} altPrefix="Фотография книжного клуба" />
          </div>

          {events.length ? (
            <DraggableCarousel ariaLabel="Ближайшие мероприятия книжного клуба" className="mt-10">
              {events.slice(0, 4).map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </DraggableCarousel>
          ) : null}

          {announcements.length ? (
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {announcements.slice(0, 3).map((announcement) => (
                <AnnouncementCard key={announcement._id} announcement={announcement} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
