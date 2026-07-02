import { books } from "@/data/books";
import { categories } from "@/data/categories";
import { CONTACT_LINK } from "@/lib/constants";
import type { Book, BookCategorySlug } from "@/types/book";

const priceFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
});

export function getCategoryName(slug: BookCategorySlug) {
  return categories.find((category) => category.slug === slug)?.name ?? slug;
}

export function getBookBySlug(slug: string) {
  return books.find((book) => book.slug === slug);
}

export function getFeaturedBooks(limit?: number) {
  const featured = books.filter((book) => book.isFeatured);
  return typeof limit === "number" ? featured.slice(0, limit) : featured;
}

export function getRelatedBooks(book: Book, limit = 3) {
  return books.filter((item) => item.category === book.category && item.slug !== book.slug).slice(0, limit);
}

export function getOrderLink() {
  return CONTACT_LINK;
}

export function getStatusText(isAvailable: boolean) {
  return isAvailable ? "В наличии" : "Наличие лучше уточнить по телефону";
}

export function formatPrice(price: number) {
  return priceFormatter.format(price);
}
