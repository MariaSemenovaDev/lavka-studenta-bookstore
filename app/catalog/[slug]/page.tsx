import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BookGrid } from "@/components/catalog/BookGrid";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { books } from "@/data/books";
import { formatPrice, getBookBySlug, getCategoryName, getOrderLink, getRelatedBooks, getStatusText } from "@/lib/books";
import { PRIMARY_TEL, STORE_NAME } from "@/lib/constants";

type BookPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    return {
      title: `Товар не найден — ${STORE_NAME}`,
    };
  }

  return {
    title: `${book.title} — ${STORE_NAME}`,
    description: book.description,
    alternates: {
      canonical: `/catalog/${book.slug}`,
    },
    openGraph: {
      title: `${book.title} — ${STORE_NAME}`,
      description: book.description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  const relatedBooks = getRelatedBooks(book, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="content" className="py-14 sm:py-16 lg:py-20">
        <Container>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            ← Назад в каталог
          </Link>

          <div className="mt-6 grid gap-8 lg:mt-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div className="overflow-hidden rounded-shell border border-border/70 bg-panel shadow-card">
              <div className="relative aspect-[4/5]">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge>{getCategoryName(book.category)}</Badge>
                {book.isNew ? <Badge tone="accent">Новинка</Badge> : null}
                {!book.isAvailable ? <Badge tone="muted">Нет в наличии</Badge> : null}
              </div>

              <div>
                <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">{book.title}</h1>
                <p className="mt-3 text-lg text-muted-foreground">{book.author}</p>
              </div>

              <p className="text-base leading-8 text-muted-foreground">{book.description}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Цена</p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">{formatPrice(book.price)}</p>
                </Card>
                <Card>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Статус</p>
                  <p className="mt-2 text-foreground">{getStatusText(book.isAvailable)}</p>
                </Card>
                <Card>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Год</p>
                  <p className="mt-2 text-foreground">{book.year}</p>
                </Card>
                <Card>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Издатель / серия</p>
                  <p className="mt-2 text-foreground">{book.publisher}</p>
                </Card>
              </div>

              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Теги</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {book.tags.map((tag) => (
                    <Badge key={tag} tone="muted">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href={getOrderLink()} size="lg" className="justify-center">
                  Уточнить наличие
                </Button>
                <Button href={PRIMARY_TEL} variant="secondary" size="lg" className="justify-center">
                  Позвонить
                </Button>
              </div>
            </div>
          </div>

          {relatedBooks.length > 0 ? (
            <section className="mt-16 sm:mt-20">
              <div className="mb-8">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Похожие товары</p>
                <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">Еще в этой категории</h2>
              </div>
              <BookGrid books={relatedBooks} />
            </section>
          ) : null}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
