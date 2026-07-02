"use client";

import { useId, useState } from "react";

import { BookGrid } from "@/components/catalog/BookGrid";
import { CatalogFilters } from "@/components/catalog/CatalogFilters";
import { CatalogSearch } from "@/components/catalog/CatalogSearch";
import { EmptyState } from "@/components/catalog/EmptyState";
import { getCategoryName } from "@/lib/books";
import type { Book, BookCategorySlug } from "@/types/book";

type CatalogClientProps = {
  books: Book[];
  initialCategory?: BookCategorySlug | "all";
};

export function CatalogClient({ books, initialCategory = "all" }: CatalogClientProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<BookCategorySlug | "all">(initialCategory);
  const resultsId = useId();

  const normalizedQuery = query.trim().toLowerCase();
  const filteredBooks = books.filter((book) => {
    const matchesCategory = selectedCategory === "all" || book.category === selectedCategory;
    const matchesSearch =
      normalizedQuery.length === 0 ||
      book.title.toLowerCase().includes(normalizedQuery) ||
      book.author.toLowerCase().includes(normalizedQuery) ||
      book.description.toLowerCase().includes(normalizedQuery) ||
      getCategoryName(book.category).toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesSearch;
  });

  const resetFilters = () => {
    setQuery("");
    setSelectedCategory("all");
  };

  return (
    <div className="mt-10 space-y-8">
      <div className="rounded-shell border border-border/70 bg-panel p-5 shadow-card sm:p-6">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <CatalogSearch value={query} onChange={setQuery} describedBy={resultsId} />
          <CatalogFilters
            value={selectedCategory}
            onChange={setSelectedCategory}
            onReset={resetFilters}
            hasActiveFilters={query.length > 0 || selectedCategory !== "all"}
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p id={resultsId} className="text-sm text-muted-foreground" aria-live="polite">
          Найдено товаров: <span className="font-semibold text-foreground">{filteredBooks.length}</span>
        </p>
      </div>

      {filteredBooks.length > 0 ? <BookGrid books={filteredBooks} /> : <EmptyState onReset={resetFilters} />}
    </div>
  );
}
