import { ArrowRight } from "lucide-react";

import { RecommendationCard } from "@/components/cms/RecommendationCard";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { SanityRecommendation } from "@/types/sanity";

type CmsRecommendationsSectionProps = {
  recommendations: SanityRecommendation[];
};

export function CmsRecommendationsSection({ recommendations }: CmsRecommendationsSectionProps) {
  return (
    <Section id="cms-recommendations">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          eyebrow="Рекомендации"
          title="Рекомендации магазина"
          description="Подборки и книги, на которые стоит обратить внимание."
        />
        <Button href="/recommendations" variant="secondary">
          Все рекомендации
          <ArrowRight className="size-4" />
        </Button>
      </div>

      {recommendations.length ? (
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {recommendations.slice(0, 4).map((recommendation) => (
            <RecommendationCard key={recommendation._id} recommendation={recommendation} />
          ))}
        </div>
      ) : (
        <Card className="mt-10 bg-panel/82">
          <h3 className="font-display text-3xl text-foreground">Скоро здесь появятся рекомендации магазина.</h3>
        </Card>
      )}
    </Section>
  );
}
