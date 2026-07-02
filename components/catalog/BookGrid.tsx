import { BookCard } from "@/components/catalog/BookCard";
import type { Book } from "@/types/book";

type BookGridProps = {
  books: Book[];
};

export function BookGrid({ books }: BookGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
