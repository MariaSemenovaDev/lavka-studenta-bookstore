import Link from "next/link";
import { MapPinned, Phone } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { categories } from "@/data/categories";
import { ADDRESS, NAV_ITEMS, PRIMARY_PHONE, PRIMARY_TEL, STORE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-panel">
      <Container className="grid gap-10 py-10 lg:grid-cols-[1.15fr_0.85fr_1fr_1fr]">
        <div className="max-w-md">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">{STORE_NAME}</p>
          <h2 className="mt-3 font-display text-3xl text-foreground">Аккуратный каталог книг и товаров для учебы в одном месте.</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            На сайте можно спокойно посмотреть ассортимент, а перед визитом в магазин уточнить наличие по телефону.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Контакты</h3>
          <ul className="mt-4 space-y-3 text-sm text-foreground">
            <li>
              <a
                href={PRIMARY_TEL}
                className="inline-flex items-center gap-3 transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                <Phone className="size-4 text-muted-foreground" />
                {PRIMARY_PHONE}
              </a>
            </li>
            <li className="inline-flex items-start gap-3 text-sm text-foreground">
              <MapPinned className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              <span>{ADDRESS}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Навигация</h3>
          <ul className="mt-4 space-y-3 text-sm text-foreground">
            {NAV_ITEMS.map((link) => (
              <li key={link.href}>
                <Link className="transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Категории</h3>
          <ul className="mt-4 space-y-3 text-sm text-foreground">
            {categories.slice(0, 6).map((category) => (
              <li key={category.slug}>{category.name}</li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
