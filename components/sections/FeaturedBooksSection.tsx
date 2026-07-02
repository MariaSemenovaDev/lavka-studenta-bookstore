import { ArrowRight } from "lucide-react";

import { BookCard } from "@/components/catalog/BookCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { DraggableCarousel } from "@/components/ui/DraggableCarousel";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getFeaturedBooks } from "@/lib/books";

export function FeaturedBooksSection() {
  const featuredBooks = getFeaturedBooks(6);

  return (
    <Section id="featured" className="bg-panel/45">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="flex-1">
          <SectionTitle
            eyebrow="Подборка"
            title="Несколько позиций, с которых удобно начать знакомство с каталогом."
            description="Карточки можно листать мышкой или свайпом, чтобы быстро посмотреть подборку товаров на главной."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <Button href="/catalog" variant="secondary">
            Весь каталог
            <ArrowRight className="size-4" />
          </Button>
        </Reveal>
      </div>

      <Reveal delay={0.12} className="mt-10">
        <DraggableCarousel ariaLabel="Популярные товары" className="select-none">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </DraggableCarousel>
      </Reveal>
    </Section>
  );
}
