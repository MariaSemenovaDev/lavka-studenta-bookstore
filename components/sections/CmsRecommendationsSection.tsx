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
  const items = recommendations.slice(0, 4);

  return (
    <Section id="recommendations" className="bg-panel/35">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          eyebrow="Рецензии"
          title="Рецензии магазина"
          description="Заметки о книгах, на которые стоит обратить внимание."
        />
        <Button href="/recommendations" variant="secondary" className="transition duration-300 hover:-translate-y-0.5 hover:shadow-card">
          Все рецензии
          <ArrowRight className="size-4" />
        </Button>
      </div>

      {items.length ? (
        <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {items.map((recommendation) => (
            <RecommendationCard key={recommendation._id} recommendation={recommendation} />
          ))}
        </div>
      ) : (
        <Card className="mt-8 bg-panel/82">
          <h3 className="font-display text-3xl text-foreground">Скоро здесь появятся рецензии магазина.</h3>
        </Card>
      )}
    </Section>
  );
}
