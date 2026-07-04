import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";

import { ProductMockCover } from "@/components/catalog/ProductMockCover";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PRIMARY_TEL } from "@/lib/constants";

export function HeroShowcase() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.18fr_0.82fr] lg:items-stretch">
      <Link
        href="/recommendations"
        aria-label="Открыть рецензии магазина"
        className="group min-w-0 transition duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        <div className="relative h-full min-h-[28rem] rounded-[2rem] shadow-[0_26px_58px_rgba(77,56,46,0.18)] transition duration-300 group-hover:shadow-[0_30px_64px_rgba(77,56,46,0.24)]">
          <ProductMockCover
            category="textbooks"
            badgeLabel="Рецензии"
            title="Наши рецензии"
            subtitle="Книги, о которых хочется рассказать подробнее."
            showShortLabel={false}
            className="h-full"
          />
        </div>
      </Link>

      <div className="grid gap-4">
        <Link
          href="/book-club"
          aria-label="Открыть страницу книжного клуба"
          className="group transition duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          <Card className="relative h-full min-h-[13rem] overflow-hidden bg-panel/94 p-4 sm:p-5">
            <Image
              src="https://i.pinimg.com/1200x/ac/45/31/ac4531d206339a28fb92887675160fbb.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 24vw"
              className="object-cover object-center opacity-60"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,29,24,0.12),rgba(44,29,24,0.18)_42%,rgba(44,29,24,0.26)_100%)]" />

            <div className="relative mb-4 flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <CalendarDays className="size-4" />
              </span>
            </div>

            <div className="relative rounded-[1.15rem] border border-white/22 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.16)_50%,rgba(255,255,255,0.04)_100%)] px-4 py-3 backdrop-blur-[3px]">
              <h3 className="font-display text-[2rem] leading-none text-foreground">Книжный клуб</h3>
              <p className="mt-3 text-sm leading-6 text-foreground/78">Встречи и мероприятия</p>
            </div>
          </Card>
        </Link>

        <Card className="min-h-[13rem] bg-[radial-gradient(circle_at_top,rgba(134,84,66,0.96)_0%,rgba(99,60,47,0.94)_52%,rgba(67,40,32,0.92)_100%)] p-4 text-brand-foreground shadow-[0_22px_42px_rgba(74,43,34,0.24)] sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="flex size-10 items-center justify-center rounded-full bg-white/16 text-brand-foreground">
              <Phone className="size-4" />
            </span>
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-foreground/72">Наличие</span>
          </div>
          <div className="rounded-[1.15rem] border border-white/14 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0.03)_100%)] px-4 py-3 text-brand-foreground backdrop-blur-[3px]">
            <h3 className="font-display text-[1.8rem] leading-tight text-brand-foreground">Уточнить по телефону</h3>
            <p className="mt-3 text-sm leading-6 text-brand-foreground/82">Перед визитом можно уточнить наличие нужного товара</p>
            <Button href={PRIMARY_TEL} size="lg" className="mt-4 w-full justify-center">
              Позвонить
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
