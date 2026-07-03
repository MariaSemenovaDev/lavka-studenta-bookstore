import { Search } from "lucide-react";

import { Input } from "@/components/ui/Input";

type CatalogSearchProps = {
  value: string;
  onChange: (value: string) => void;
  describedBy?: string;
};

export function CatalogSearch({ value, onChange, describedBy }: CatalogSearchProps) {
  return (
    <div className="relative">
      <label htmlFor="catalog-search" className="mb-2 block text-sm font-medium text-foreground">
        Поиск по названию, категории и описанию
      </label>
      <Search className="pointer-events-none absolute left-4 top-[3.15rem] size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        id="catalog-search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Например: математика, чтение, пособие"
        className="pl-10"
        aria-describedby={describedBy}
      />
    </div>
  );
}
