import { connection } from "next/server";
import Image from "next/image";
import type { Metadata } from "next";

import { EventCard } from "@/components/cms/EventCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { DraggableCarousel } from "@/components/ui/DraggableCarousel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BOOK_CLUB_METADATA } from "@/lib/constants";
import { getUpcomingEvents } from "@/sanity/fetchers";

export const metadata: Metadata = {
  title: BOOK_CLUB_METADATA.title,
  description: BOOK_CLUB_METADATA.description,
  alternates: {
    canonical: "/book-club",
  },
  openGraph: {
    title: BOOK_CLUB_METADATA.title,
    description: BOOK_CLUB_METADATA.description,
    images: ["/opengraph-image"],
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

const clubPhotos = [
  "https://sun9-86.userapi.com/s/v1/ig2/FlGeZgSwYEnOqHK0Z6LnkHHj9kq7jqD5x1usDTDO9bJ6gbbwuvtt7t8xBwM714SlvWayENoLiYcJWiKlOek1fTRJ.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1040x780&from=bu&cs=1040x0",
  "https://sun9-26.userapi.com/s/v1/ig2/WU-KzmTchpu51AKxSZ0mi8oKxk7zXfwwrvBU5L1xvS9e-0h7q2J9L0ZjquTkmvwpviGcr6EnWfCk6_T0WuHPpnEa.jpg?quality=95&as=32x69,48x104,72x156,108x234,160x347,240x520,360x780,480x1040,540x1170,591x1280&from=bu&cs=591x0",
  "https://sun9-23.userapi.com/s/v1/ig2/W6ccIrH5UW-Gc_Cvm10MNBEizf8Gi62aDXhT6T1mnw0bn3GR47DzYGZGjO87z93TQtbRQW0R_AZeK4vJsKkx-eth.jpg?quality=95&as=32x69,48x104,72x156,108x234,160x347,240x520,360x780,480x1040,540x1170,591x1280&from=bu&cs=591x0",
  "https://sun9-71.userapi.com/s/v1/ig2/TVSfg0uK9wqIJVA1IN8BYy9jcbKbaEwXZrNvQohrvVYYjNZsNQOLLBgmj_pGM28ZJR8Y-IHgmwUIv69mWj_hE_sv.jpg?quality=95&as=32x69,48x104,72x156,108x234,160x347,240x520,360x780,480x1040,540x1170,591x1280&from=bu&cs=591x0",
  "https://sun9-24.userapi.com/s/v1/ig2/74K8Vjxkp-L1xpHqNIwEKq0R2baPO5mgTbUGYWXT-6BLzuJvNMr3Qr9OqBcGlrqNf74x6nUUUTbqWVTJwBpyGbHs.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1000x750&from=bu&cs=1000x0",
  "https://sun9-44.userapi.com/s/v1/ig2/yp3gcYCcZBDoJ0fxvG7PEIm9qBQwuMxhYxSWShr7nB9oJeE5vO0_upDZ3zxryTinkRC8ke3UZe19GISsq-jHQeu0.jpg?quality=95&as=32x69,48x104,72x156,108x234,160x347,240x520,360x780,480x1040,540x1170,591x1280&from=bu&cs=591x0",
  "https://sun9-32.userapi.com/s/v1/ig2/0_mhPXchmJyaMKapZa2-DIowxQE6euOUlh2taGh0Fvs7ehu-xpNtI9485-t-FHfqxX7ySdLra024Js-ozcgAxIDJ.jpg?quality=95&as=32x26,48x39,72x58,108x88,160x130,240x195,360x292,480x390,540x438,640x520,720x584,797x647&from=bu&cs=797x0",
  "https://sun9-79.userapi.com/s/v1/ig2/YLCoXtzZRa_jjR6hLkNZmnLpOH4ioB1QvL9-4Kb4LdXuurpO7cE3f6xIia8ro0j6qqfXxcFNOvoeaBvPG44H2i7f.jpg?quality=95&as=32x36,48x54,72x80,108x121,160x179,240x268,360x402,480x536,540x603,640x715,720x804,776x867&from=bu&cs=776x0",
];

export default async function BookClubPage() {
  await connection();

  const events = await getUpcomingEvents();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="content" className="py-14 sm:py-16 lg:py-20">
        <Container>
          <SectionTitle
            eyebrow="Книжный клуб"
            title="Мероприятия книжного клуба"
            description="Встречи, события и публикации Книжной Лавки Студента."
          />

          <Card className="mt-8 bg-panel/84">
            <p className="max-w-4xl text-base leading-8 text-muted-foreground">
              Книжный клуб в лавке — это спокойные встречи для тех, кто любит читать, обсуждать книги и делиться впечатлениями. Здесь можно следить
              за ближайшими событиями, смотреть фотографии прошедших встреч и узнавать о новых темах, подборках и книжных поводах.
            </p>
          </Card>

          <div className="mt-8">
            <DraggableCarousel ariaLabel="Фотографии книжного клуба">
              {clubPhotos.map((photo, index) => (
                <Card key={photo} className="overflow-hidden bg-panel/88 p-0">
                  <div className="relative aspect-[4/5] bg-secondary">
                    <Image
                      src={photo}
                      alt={`Фотография книжного клуба ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 48vw, 28vw"
                      className="object-cover"
                    />
                  </div>
                </Card>
              ))}
            </DraggableCarousel>
          </div>

          {events.length ? (
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {events.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          ) : null}

          {!events.length ? (
            <Card className="mt-10 bg-panel/82">
              <h2 className="font-display text-3xl text-foreground">Скоро здесь появятся ближайшие мероприятия клуба.</h2>
            </Card>
          ) : null}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
