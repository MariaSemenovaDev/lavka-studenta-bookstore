import type { Metadata } from "next";

import { CatalogClient } from "@/components/catalog/CatalogClient";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { categories } from "@/data/categories";
import { books } from "@/data/books";
import { CATALOG_METADATA } from "@/lib/constants";
import type { BookCategorySlug } from "@/types/book";

export const metadata: Metadata = {
  title: CATALOG_METADATA.title,
  description: CATALOG_METADATA.description,
  alternates: {
    canonical: "/catalog",
  },
  openGraph: {
    title: CATALOG_METADATA.title,
    description: CATALOG_METADATA.description,
    images: ["/opengraph-image"],
  },
};

type CatalogPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const params = searchParams ? await searchParams : undefined;
  const requestedCategory = params?.category;
  const initialCategory: BookCategorySlug | "all" =
    requestedCategory && categories.some((category) => category.slug === requestedCategory)
      ? (requestedCategory as BookCategorySlug)
      : "all";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="content" className="py-14 sm:py-16 lg:py-20">
        <Container>
          <SectionTitle
            eyebrow="Каталог"
            title="Товары для учебы, занятий и развития."
            description="Ищите по названию, категории и описанию. В каталоге собраны учебные материалы, развивающие игры, наглядные пособия, канцелярия и модели."
          />
          <CatalogClient books={books} initialCategory={initialCategory} />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
