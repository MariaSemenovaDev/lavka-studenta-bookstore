import type { BookCategorySlug } from "@/types/book";

export type Category = {
  slug: BookCategorySlug;
  name: string;
  description: string;
  note: string;
};
