import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpenText, PenSquare, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import { connection } from "next/server";

import { CmsImage } from "@/components/cms/CmsImage";
import { PortableTextContent } from "@/components/cms/PortableTextContent";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PRIMARY_TEL, STORE_NAME } from "@/lib/constants";
import { getRecommendationBySlug } from "@/sanity/fetchers";

type RecommendationDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: RecommendationDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const recommendation = await getRecommendationBySlug(slug);

  if (!recommendation) {
    return {
      title: `Рецензия не найдена — ${STORE_NAME}`,
    };
  }

  const title = recommendation.seoTitle || `${recommendation.title} — ${STORE_NAME}`;
  const description = recommendation.seoDescription || recommendation.shortDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `/recommendations/${recommendation.slug}`,
    },
    openGraph: {
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function RecommendationDetailPage({ params }: RecommendationDetailPageProps) {
  await connection();

  const { slug } = await params;
  const recommendation = await getRecommendationBySlug(slug);

  if (!recommendation) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="content" className="py-14 sm:py-16 lg:py-20">
        <Container>
          <Link
            href="/recommendations"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            <ArrowLeft className="size-4" />
            Назад к рецензиям
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <Card className="overflow-hidden bg-panel/90 p-0">
              <div className="relative aspect-[4/5] bg-secondary">
                {recommendation.coverImage?.asset?._ref ? (
                  <CmsImage
                    image={recommendation.coverImage}
                    alt={recommendation.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(245,226,199,0.8),rgba(218,192,167,0.52)_45%,rgba(122,88,70,0.32)_100%)]">
                    <span className="flex size-16 items-center justify-center rounded-full border border-white/30 bg-white/18 text-foreground">
                      <BookOpenText className="size-7" />
                    </span>
                  </div>
                )}
              </div>
            </Card>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                {recommendation.category ? <Badge tone="accent">{recommendation.category}</Badge> : null}
                {recommendation.ageGroup ? <Badge tone="muted">{recommendation.ageGroup}</Badge> : null}
              </div>

              <h1 className="mt-5 font-display text-[2.8rem] leading-[0.96] text-foreground sm:text-[3.4rem]">
                {recommendation.title}
              </h1>

              {recommendation.author ? (
                <p className="mt-4 inline-flex items-center gap-2 text-base text-muted-foreground">
                  <PenSquare className="size-4" />
                  {recommendation.author}
                </p>
              ) : null}

              <p className="mt-5 text-base leading-8 text-muted-foreground">{recommendation.shortDescription}</p>

              <div className="mt-6">
                <Button href={PRIMARY_TEL} size="lg">
                  <Phone className="size-4" />
                  Уточнить наличие
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <PortableTextContent value={recommendation.description} />
          </div>

          {recommendation.gallery?.length ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {recommendation.gallery.map((image, index) => {
                const imageKey = image.asset?._ref ?? `gallery-${index}`;

                return (
                  <Card key={imageKey} className="overflow-hidden bg-panel/86 p-0">
                    <div className="relative aspect-[4/3] bg-secondary">
                      {image.asset?._ref ? (
                        <CmsImage
                          image={image}
                          alt={`${recommendation.title} — изображение ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      ) : (
                        <Image
                          src="/opengraph-image"
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover opacity-0"
                        />
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          ) : null}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
