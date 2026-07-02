import Link from "next/link";
import Image from "next/image";
import { NotebookPen, Phone, Puzzle, StickyNote } from "lucide-react";

import { ProductMockCover } from "@/components/catalog/ProductMockCover";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PRIMARY_TEL } from "@/lib/constants";

export function HeroShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <div className="paper-grid absolute inset-4 rounded-[2rem] border border-border-subtle opacity-80" />
      <div className="ambient-orb pointer-events-none absolute -left-4 top-10 size-28 rounded-full bg-accent/20" />
      <div className="ambient-orb pointer-events-none absolute right-0 top-6 size-32 rounded-full bg-sage/18" />

      <div className="relative grid gap-4 rounded-[2rem] border border-border/60 bg-panel/60 p-4 shadow-card sm:grid-cols-[minmax(0,1.08fr)_minmax(12rem,0.92fr)] sm:p-5">
        <Link
            href="/catalog"
            aria-label="Открыть каталог учебников"
            className="group transition duration-300 hover:-translate-y-1 hover:shadow-elevated focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          <Card className="relative h-full min-h-[28rem] overflow-hidden rounded-shell bg-panel/94 p-0 shadow-elevated">
            <ProductMockCover
              category="textbooks"
              centered
              showTitle={false}
              className="absolute inset-0 h-full w-full rounded-none shadow-none transition duration-300 group-hover:scale-[1.03]"
            />
          </Card>
        </Link>

        <div className="grid gap-4 sm:grid-rows-[auto_auto_1fr]">
          <Link
            href="/catalog"
            aria-label="Открыть каталог развивающих игр"
            className="transition duration-300 hover:-translate-y-1 hover:shadow-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            <Card className="relative overflow-hidden bg-panel/94 p-3 sm:p-4">
              <Image
                src="/covers/games-photo.jpg"
                alt=""
                fill
                sizes="(max-width: 640px) 45vw, 12rem"
                className="object-cover opacity-38 mix-blend-multiply"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-black/6 to-white/12" />
              <div className="relative mb-3 flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Puzzle className="size-4" />
                </span>
              </div>
              <h3 className="relative font-display text-2xl leading-none text-foreground">Игры</h3>
              <p className="relative mt-2 text-sm leading-5 text-foreground/82">Счёт, логика, чтение</p>
            </Card>
          </Link>

          <Link
            href="/catalog"
            aria-label="Открыть каталог пособий"
            className="transition duration-300 hover:-translate-y-1 hover:shadow-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            <Card className="relative overflow-hidden bg-panel/94 p-3 sm:p-4">
              <Image
                src="/covers/visual-aids-photo.jpg"
                alt=""
                fill
                sizes="(max-width: 640px) 45vw, 12rem"
                className="object-cover opacity-34 mix-blend-multiply"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-black/6 to-white/14" />
              <div className="relative mb-3 flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-full bg-sage text-sage-foreground">
                  <NotebookPen className="size-4" />
                </span>
              </div>
              <h3 className="relative font-display text-2xl leading-none text-foreground">Пособия</h3>
              <p className="relative mt-2 text-sm leading-5 text-foreground/82">Для педагогов и родителей</p>
            </Card>
          </Link>

          <Card className="overflow-hidden border-brand/15 bg-brand px-4 pb-4 pt-7 text-brand-foreground shadow-soft">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-foreground/12 text-brand-foreground">
                <StickyNote className="size-4" />
              </span>
              <div>
                <h3 className="font-display text-2xl leading-none">Уточнить по телефону</h3>
              </div>
            </div>
            <p className="text-sm leading-6 text-brand-foreground/88">Перед визитом можно уточнить наличие нужного товара.</p>
            <Button href={PRIMARY_TEL} variant="secondary" className="mt-4 w-full justify-center border-white/20 bg-brand-foreground/10 text-brand-foreground hover:bg-brand-foreground/18">
              <Phone className="size-4" />
              Позвонить
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
