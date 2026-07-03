import Link from "next/link";

import { CmsImage } from "@/components/cms/CmsImage";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ProductMockCover } from "@/components/catalog/ProductMockCover";
import type { BookCategorySlug } from "@/types/book";
import type { SanityRecommendation } from "@/types/sanity";

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

type RecommendationCardProps = {
  recommendation: SanityRecommendation;
};

export function RecommendationCard({ recommendation }: RecommendationCardProps) {
  const mappedCategory = categoryMap[recommendation.category ?? ""] ?? "textbooks";

  return (
    <Link
      href={`/recommendations/${recommendation.slug}`}
      className="group block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
    >
      <Card className="flex h-full flex-col overflow-hidden bg-panel/90 p-0">
        <div className="relative aspect-[4/5] overflow-hidden border-b border-border/70 bg-secondary">
          {recommendation.coverImage?.asset?._ref ? (
            <CmsImage
              image={recommendation.coverImage}
              alt={recommendation.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition duration-300 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <ProductMockCover
              category={mappedCategory}
              title={recommendation.title}
              subtitle={recommendation.author || recommendation.shortDescription}
              compact
            />
          )}
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          {recommendation.category ? <Badge tone="muted">{recommendation.category}</Badge> : null}
          <h3 className="mt-3 font-display text-3xl leading-tight text-foreground">{recommendation.title}</h3>
          {recommendation.author ? <p className="mt-2 text-sm font-medium text-foreground/78">{recommendation.author}</p> : null}
          <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{recommendation.shortDescription}</p>
          {recommendation.ageGroup ? <p className="mt-4 text-sm text-muted-foreground">{recommendation.ageGroup}</p> : null}
        </div>
      </Card>
    </Link>
  );
}
