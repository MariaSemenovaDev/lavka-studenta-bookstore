import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { NAV_ITEMS, STORE_NAME } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/88 backdrop-blur-xl">
      <Container className="py-3 sm:py-4">
        <div className="flex items-start justify-between gap-3 sm:items-center sm:gap-4">
          <Link
            href="/"
            className="min-w-0 flex-1 text-foreground transition hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            <span className="flex items-center gap-3">
              <span className="relative block size-10 shrink-0 overflow-hidden rounded-full border border-border/70 bg-panel shadow-soft sm:size-11">
                <Image src="/brand-mark.jpg" alt="" fill sizes="44px" className="object-cover" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-display text-lg leading-none sm:text-xl">{STORE_NAME}</span>
                <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-muted-foreground sm:tracking-[0.22em]">
                  книжный магазин в Новороссийске
                </span>
              </span>
            </span>
          </Link>

          <nav aria-label="Основная навигация" className="hidden items-center gap-6 lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative pb-2 text-sm text-muted-foreground transition-[color,letter-spacing] duration-300 ease-out hover:text-foreground hover:tracking-[0.12em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                {item.label}
                <span className="absolute inset-x-[-0.35rem] bottom-0 h-px origin-center scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100" aria-hidden="true" />
              </Link>
            ))}
          </nav>
        </div>

        <nav aria-label="Навигация по разделам" className="mt-4 flex flex-wrap gap-2 border-t border-border/60 pt-4 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-full border border-border bg-panel px-4 py-2 text-sm text-foreground transition-[color,letter-spacing,border-color,background-color] duration-300 ease-out hover:border-brand/40 hover:bg-accent hover:tracking-[0.08em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {item.label}
              <span className="absolute inset-x-4 bottom-1.5 h-px origin-center scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100" aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
