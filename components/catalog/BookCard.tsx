import Link from "next/link";
import { ArrowRight, CircleCheck, Clock3 } from "lucide-react";

import { ProductMockCover } from "@/components/catalog/ProductMockCover";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { formatPrice, getCategoryName, getStatusText } from "@/lib/books";
import { cn } from "@/lib/utils";
import type { Book } from "@/types/book";

type BookCardProps = {
  book: Book;
};

export function BookCard({ book }: BookCardProps) {
  return (
    <Card className={cn("group flex h-full flex-col gap-5 bg-panel/82", !book.isAvailable && "bg-panel/72")}>
      <Link
        href={`/catalog/${book.slug}`}
        className="group block overflow-hidden rounded-panel border border-border/60 bg-secondary/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <ProductMockCover
            category={book.category}
            title={book.title}
            subtitle={book.author}
            className={cn("transition duration-300 group-hover:scale-[1.03]", !book.isAvailable && "opacity-80 saturate-75")}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-foreground/8 to-transparent" />
        </div>
      </Link>

      <div className="flex flex-wrap items-center gap-2">
        <Badge>{getCategoryName(book.category)}</Badge>
        {book.isNew ? <Badge tone="accent">Новинка</Badge> : null}
      </div>

      <div className="flex flex-1 flex-col">
        <Link
          href={`/catalog/${book.slug}`}
          className="font-display text-2xl leading-tight text-foreground transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          {book.title}
        </Link>
        <p className="mt-2 text-sm text-muted-foreground">{book.author}</p>
        <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{book.description}</p>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        {book.isAvailable ? <CircleCheck className="size-4 text-brand" /> : <Clock3 className="size-4 text-muted-foreground" />}
        <span>{getStatusText(book.isAvailable)}</span>
      </div>

      <div className="flex items-center justify-between gap-3">
        <span className="text-base font-semibold text-foreground">{formatPrice(book.price)}</span>
        <Button href={`/catalog/${book.slug}`} variant="secondary">
          {book.isAvailable ? "Подробнее" : "Уточнить наличие"}
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </Card>
  );
}
