import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { ADDRESS, NAV_ITEMS, PRIMARY_PHONE, PRIMARY_TEL, STORE_NAME, TELEGRAM_LINK, VK_LINK } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-panel/64">
      <Container className="py-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <p className="font-display text-2xl text-foreground">{STORE_NAME}</p>
            <p className="mt-3 max-w-[34ch] text-sm leading-7 text-muted-foreground">
              Книжный магазин в Новороссийске с учебной литературой, букинистикой, рецензиями и событиями книжного клуба.
            </p>
          </div>

          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Навигация</p>
            <div className="mt-4 flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-foreground transition hover:text-brand">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Контакты</p>
            <div className="mt-4 space-y-3 text-sm text-foreground">
              <p>{ADDRESS}</p>
              <a href={PRIMARY_TEL} className="inline-block transition hover:text-brand">
                {PRIMARY_PHONE}
              </a>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer" className="transition hover:text-brand">
                  Telegram
                </a>
                <a href={VK_LINK} target="_blank" rel="noreferrer" className="transition hover:text-brand">
                  ВКонтакте
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
