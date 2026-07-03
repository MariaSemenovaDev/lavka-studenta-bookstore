import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MapPin, Phone } from "lucide-react";

import { CmsImage } from "@/components/cms/CmsImage";
import { PortableTextContent } from "@/components/cms/PortableTextContent";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FULL_ADDRESS, PRIMARY_TEL, STORE_NAME } from "@/lib/constants";
import { getEventBySlug } from "@/sanity/fetchers";

type EventDetailPageProps = {
  params: Promise<{ slug: string }>;
};

function formatEventDate(date: string) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

export async function generateMetadata({ params }: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    return {
      title: `Мероприятие не найдено — ${STORE_NAME}`,
    };
  }

  const title = event.seoTitle || `${event.title} — ${STORE_NAME}`;
  const description = event.seoDescription || event.shortDescription;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="content" className="py-14 sm:py-16 lg:py-20">
        <Container>
          <Link
            href="/book-club"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            <ArrowLeft className="size-4" />
            Назад к книжному клубу
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Card className="overflow-hidden bg-panel/90 p-0">
              <div className="relative aspect-[16/10] bg-secondary">
                <CmsImage
                  image={event.coverImage}
                  alt={event.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </Card>

            <div>
              <h1 className="font-display text-5xl leading-none text-foreground">{event.title}</h1>
              <p className="mt-4 inline-flex items-center gap-2 text-base text-muted-foreground">
                <CalendarDays className="size-4" />
                {formatEventDate(event.eventDate)}
              </p>
              <p className="mt-3 inline-flex items-center gap-2 text-base text-muted-foreground">
                <MapPin className="size-4" />
                {event.location || FULL_ADDRESS}
              </p>
              <p className="mt-5 text-base leading-8 text-muted-foreground">{event.shortDescription}</p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={event.registrationLink || PRIMARY_TEL} size="lg">
                  <Phone className="size-4" />
                  {event.registrationText || "Позвонить"}
                </Button>
                <Button href="/book-club" variant="secondary" size="lg">
                  К списку встреч
                </Button>
              </div>
            </div>
          </div>

          {event.description?.length ? (
            <Card className="mt-10 space-y-5 bg-panel/82">
              <PortableTextContent value={event.description} />
            </Card>
          ) : null}

          {event.gallery?.length ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {event.gallery.map((image, index) => (
                <Card key={`${event._id}-gallery-${index}`} className="overflow-hidden bg-panel/90 p-0">
                  <div className="relative aspect-[4/3] bg-secondary">
                    <CmsImage
                      image={image}
                      alt={`${event.title} — фото ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </Card>
              ))}
            </div>
          ) : null}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
