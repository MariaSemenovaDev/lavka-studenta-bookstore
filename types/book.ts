export type BookCategorySlug =
  | "textbooks"
  | "methodology"
  | "visual-aids"
  | "children-books"
  | "extracurricular-reading"
  | "used-books"
  | "events";

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
