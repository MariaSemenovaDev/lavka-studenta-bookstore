export type BookCategorySlug =
  | "textbooks"
  | "methodology"
  | "preschool"
  | "games"
  | "stationery"
  | "visual-aids"
  | "business-books"
  | "puzzles-models";

export type Book = {
  id: string;
  slug: string;
  title: string;
  author: string;
  description: string;
  price: number;
  category: BookCategorySlug;
  coverImage: string;
  isFeatured: boolean;
  isNew: boolean;
  isAvailable: boolean;
  tags: string[];
  year: number;
  publisher: string;
};
