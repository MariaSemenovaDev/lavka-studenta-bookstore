import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";
import type { BookCategorySlug } from "@/types/book";

type CatalogFiltersProps = {
  value: BookCategorySlug | "all";
  onChange: (value: BookCategorySlug | "all") => void;
  onReset: () => void;
  hasActiveFilters: boolean;
};

export function CatalogFilters({ value, onChange, onReset, hasActiveFilters }: CatalogFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const currentLabel = value === "all" ? "Все товары" : categories.find((category) => category.slug === value)?.name ?? "Все товары";

  const handleSelect = (nextValue: BookCategorySlug | "all") => {
    onChange(nextValue);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-foreground">Категории</p>
        <button
          type="button"
          onClick={onReset}
          disabled={!hasActiveFilters}
          className="text-sm text-muted-foreground transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-50"
        >
          Сбросить
        </button>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          className={cn(
            "flex w-full items-center justify-between gap-3 rounded-[1.4rem] border border-border bg-background px-4 py-3 text-left text-sm text-foreground shadow-card transition hover:border-brand/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
          )}
        >
          <span className="truncate">{currentLabel}</span>
          <ChevronDown className={cn("size-4 shrink-0 text-muted-foreground transition", isOpen && "rotate-180")} />
        </button>

        {isOpen ? (
          <div
            role="listbox"
            className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-20 overflow-hidden rounded-[1.4rem] border border-border/80 bg-panel shadow-soft"
          >
            <button
              type="button"
              onClick={() => handleSelect("all")}
              aria-pressed={value === "all"}
              className={cn(
                "flex w-full items-center justify-between px-4 py-3 text-left text-sm transition focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand",
                value === "all" ? "bg-accent text-foreground" : "text-foreground hover:bg-accent/75",
              )}
            >
              Все товары
            </button>

            {categories.map((category) => (
              <button
                key={category.slug}
                type="button"
                onClick={() => handleSelect(category.slug)}
                aria-pressed={value === category.slug}
                className={cn(
                  "flex w-full items-center justify-between border-t border-border/60 px-4 py-3 text-left text-sm transition focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand",
                  value === category.slug ? "bg-accent text-foreground" : "text-foreground hover:bg-accent/75",
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
