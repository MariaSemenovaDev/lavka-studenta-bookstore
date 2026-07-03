import type { Metadata } from "next";

import { AnnouncementCard } from "@/components/cms/AnnouncementCard";
import { EventCard } from "@/components/cms/EventCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BOOK_CLUB_METADATA } from "@/lib/constants";
import { getFeaturedAnnouncements, getUpcomingEvents } from "@/sanity/fetchers";

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

export default async function BookClubPage() {
  const [events, announcements] = await Promise.all([getUpcomingEvents(), getFeaturedAnnouncements()]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="content" className="py-14 sm:py-16 lg:py-20">
        <Container>
          <SectionTitle
            eyebrow="Книжный клуб"
            title="Книжный клуб"
            description="Анонсы, встречи и события Книжной Лавки Студента."
          />

          {events.length ? (
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {events.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          ) : (
            <Card className="mt-10 bg-panel/82">
              <h2 className="font-display text-3xl text-foreground">Скоро здесь появятся новые встречи книжного клуба.</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Когда заказчик добавит первые мероприятия в Sanity Studio, они автоматически появятся на этой странице.
              </p>
            </Card>
          )}

          <div className="mt-12">
            <SectionTitle
              eyebrow="Анонсы"
              title="Новости и анонсы клуба"
              description="Короткие публикации о ближайших встречах, итогах и книжных поводах магазина."
            />
            {announcements.length ? (
              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {announcements.map((announcement) => (
                  <AnnouncementCard key={announcement._id} announcement={announcement} />
                ))}
              </div>
            ) : (
              <Card className="mt-8 bg-panel/82">
                <p className="text-sm leading-7 text-muted-foreground">Пока здесь нет опубликованных анонсов книжного клуба.</p>
              </Card>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
