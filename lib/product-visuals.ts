import {
  BookMarked,
  BookOpen,
  CalendarDays,
  GraduationCap,
  LibraryBig,
  NotebookPen,
  ScrollText,
  type LucideIcon,
} from "lucide-react";

import type { BookCategorySlug } from "@/types/book";

type ProductVisual = {
  icon: LucideIcon;
  coverClassName: string;
  accentClassName: string;
  shortLabel: string;
};

export const productVisuals: Record<BookCategorySlug, ProductVisual> = {
  textbooks: {
    icon: BookOpen,
    coverClassName: "book-cover-sand",
    accentClassName: "bg-accent text-accent-foreground",
    shortLabel: "Учебная книга",
  },
  methodology: {
    icon: LibraryBig,
    coverClassName: "book-cover-clay",
    accentClassName: "bg-brand text-brand-foreground",
    shortLabel: "Методика",
  },
  "visual-aids": {
    icon: NotebookPen,
    coverClassName: "book-cover-olive",
    accentClassName: "bg-sage text-sage-foreground",
    shortLabel: "Пособия",
  },
  "children-books": {
    icon: GraduationCap,
    coverClassName: "book-cover-olive",
    accentClassName: "bg-sage text-sage-foreground",
    shortLabel: "Детские книги",
  },
  "extracurricular-reading": {
    icon: BookMarked,
    coverClassName: "book-cover-sand",
    accentClassName: "bg-accent text-accent-foreground",
    shortLabel: "Чтение",
  },
  "used-books": {
    icon: ScrollText,
    coverClassName: "book-cover-ink",
    accentClassName: "bg-brand text-brand-foreground",
    shortLabel: "Букинистика",
  },
  events: {
    icon: CalendarDays,
    coverClassName: "book-cover-clay",
    accentClassName: "bg-accent text-accent-foreground",
    shortLabel: "Мероприятия",
  },
};

export function getProductVisual(category: BookCategorySlug) {
  return productVisuals[category];
}
