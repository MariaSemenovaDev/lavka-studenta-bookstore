import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type EmptyStateProps = {
  onReset: () => void;
};

export function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <Card className="flex flex-col items-start gap-4 rounded-shell border-dashed bg-panel/60 p-6 sm:p-8">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Ничего не найдено</p>
      <h3 className="font-display text-3xl text-foreground">Попробуйте другой запрос или сбросьте фильтры.</h3>
      <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
        Поиск работает по названию, категории и описанию товара. Можно начать заново или перейти к контактам и уточнить наличие.
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-brand-foreground transition hover:-translate-y-0.5 hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          Сбросить фильтры
        </button>
        <Button href="/" variant="secondary">
          На главную
        </Button>
      </div>
      <Link
        href="/#contacts"
        className="text-sm text-muted-foreground underline decoration-border underline-offset-4 transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        Не нашли нужное? Позвоните и уточните наличие
      </Link>
    </Card>
  );
}
