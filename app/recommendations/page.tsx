import { connection } from "next/server";
import type { Metadata } from "next";

import { RecommendationCard } from "@/components/cms/RecommendationCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RECOMMENDATIONS_METADATA } from "@/lib/constants";
import { getRecommendations } from "@/sanity/fetchers";

export const metadata: Metadata = {
  title: RECOMMENDATIONS_METADATA.title,
  description: RECOMMENDATIONS_METADATA.description,
  alternates: {
    canonical: "/recommendations",
  },
  openGraph: {
    title: RECOMMENDATIONS_METADATA.title,
    description: RECOMMENDATIONS_METADATA.description,
    images: ["/opengraph-image"],
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function RecommendationsPage() {
  await connection();

  const recommendations = await getRecommendations();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="content" className="py-14 sm:py-16 lg:py-20">
        <Container>
          <SectionTitle
            eyebrow="Рекомендации"
            title="Рекомендации магазина"
            description="Книги и подборки, которые советует Книжная Лавка Студента."
          />

          {recommendations.length ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {recommendations.map((recommendation) => (
                <RecommendationCard key={recommendation._id} recommendation={recommendation} />
              ))}
            </div>
          ) : (
            <Card className="mt-10 bg-panel/82">
              <h2 className="font-display text-3xl text-foreground">Скоро здесь появятся рекомендации магазина.</h2>
            </Card>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
