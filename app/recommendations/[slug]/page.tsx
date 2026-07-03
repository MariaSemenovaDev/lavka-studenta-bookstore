import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone } from "lucide-react";

import { CmsImage } from "@/components/cms/CmsImage";
import { PortableTextContent } from "@/components/cms/PortableTextContent";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductMockCover } from "@/components/catalog/ProductMockCover";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PRIMARY_TEL, STORE_NAME } from "@/lib/constants";
import { getRecommendationBySlug } from "@/sanity/fetchers";
import type { BookCategorySlug } from "@/types/book";

type RecommendationDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const categoryMap: Record<string, BookCategorySlug> = {
  "Учебная книга": "textbooks",
  "Методическая литература": "methodology",
  "Наглядные пособия": "visual-aids",
  "Книги для детей": "children-books",
  "Внеклассное чтение": "extracurricular-reading",
  "Букинистические издания": "used-books",
  "Для книжного клуба": "events",
  "Выбор магазина": "textbooks",
};

export async function generateMetadata({ params }: RecommendationDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const recommendation = await getRecommendationBySlug(slug);

  if (!recommendation) {
    return {
      title: `Рекомендация не найдена — ${STORE_NAME}`,
    };
  }

  const title = recommendation.seoTitle || `${recommendation.title} — ${STORE_NAME}`;
  const description = recommendation.seoDescription || recommendation.shortDescription;

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

export default async function RecommendationDetailPage({ params }: RecommendationDetailPageProps) {
  const { slug } = await params;
  const recommendation = await getRecommendationBySlug(slug);

  if (!recommendation) {
    notFound();
  }

  const mappedCategory = categoryMap[recommendation.category ?? ""] ?? "textbooks";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="content" className="py-14 sm:py-16 lg:py-20">
        <Container>
          <a
            href="/recommendations"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            <ArrowLeft className="size-4" />
            Назад к рекомендациям
          </a>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <Card className="overflow-hidden bg-panel/90 p-0">
              <div className="relative aspect-[4/5] bg-secondary">
                {recommendation.coverImage?.asset?._ref ? (
                  <CmsImage
                    image={recommendation.coverImage}
                    alt={recommendation.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                ) : (
                  <ProductMockCover
                    category={mappedCategory}
                    title={recommendation.title}
                    subtitle={recommendation.author || recommendation.shortDescription}
                  />
                )}
              </div>
            </Card>

            <div>
              <h1 className="font-display text-5xl leading-none text-foreground">{recommendation.title}</h1>
              {recommendation.author ? <p className="mt-4 text-lg text-foreground/78">{recommendation.author}</p> : null}
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted-foreground">
                {recommendation.category ? <span className="rounded-full border border-border bg-panel px-4 py-2">{recommendation.category}</span> : null}
                {recommendation.ageGroup ? <span className="rounded-full border border-border bg-panel px-4 py-2">{recommendation.ageGroup}</span> : null}
              </div>
              <p className="mt-5 text-base leading-8 text-muted-foreground">{recommendation.shortDescription}</p>
              <div className="mt-6">
                <Button href={PRIMARY_TEL} size="lg">
                  <Phone className="size-4" />
                  Уточнить наличие
                </Button>
              </div>
            </div>
          </div>

          {recommendation.description?.length ? (
            <Card className="mt-10 space-y-5 bg-panel/82">
              <PortableTextContent value={recommendation.description} />
            </Card>
          ) : null}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
