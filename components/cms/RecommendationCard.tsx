import { BookOpenText, PenSquare } from "lucide-react";

import { CmsImage } from "@/components/cms/CmsImage";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { SanityRecommendation } from "@/types/sanity";

type RecommendationCardProps = {
  recommendation: SanityRecommendation;
};

export function RecommendationCard({ recommendation }: RecommendationCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden bg-panel/90 p-0">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-border/70 bg-secondary">
        {recommendation.coverImage?.asset?._ref ? (
          <CmsImage
            image={recommendation.coverImage}
            alt={recommendation.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-300 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(245,226,199,0.8),rgba(218,192,167,0.52)_45%,rgba(122,88,70,0.32)_100%)]">
            <span className="flex size-14 items-center justify-center rounded-full border border-white/30 bg-white/18 text-foreground">
              <BookOpenText className="size-6" />
            </span>
          </div>
        )}
        {recommendation.category ? (
          <div className="absolute left-4 top-4">
            <Badge tone="accent">{recommendation.category}</Badge>
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {recommendation.author ? (
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <PenSquare className="size-4" />
            {recommendation.author}
          </p>
        ) : null}

        <h3 className="mt-3 font-display text-3xl leading-tight text-foreground">{recommendation.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{recommendation.shortDescription}</p>

        <div className="mt-5 flex items-center justify-between gap-3">
          {recommendation.ageGroup ? <span className="text-sm text-muted-foreground">{recommendation.ageGroup}</span> : <span />}
          <Button href={`/recommendations/${recommendation.slug}`} variant="secondary">
            Читать рецензию
          </Button>
        </div>
      </div>
    </Card>
  );
}
