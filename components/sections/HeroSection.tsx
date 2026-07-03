import { ArrowRight, BookMarked, CalendarDays, MapPin, NotebookPen, Phone, ScrollText } from "lucide-react";

import { HeroShowcase } from "@/components/sections/HeroShowcase";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ADDRESS, PRIMARY_TEL, STORE_NAME } from "@/lib/constants";

const highlightItems = [
  { label: "Учебная книга", icon: BookMarked },
  { label: "Внеклассное чтение", icon: NotebookPen },
  { label: "Букинистическая книга", icon: ScrollText },
  { label: "Книжный клуб", icon: CalendarDays },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-hero-gradient py-7 sm:py-10 lg:py-16">
      <div className="hero-sheen pointer-events-none absolute inset-x-0 top-0 h-56" />
      <div className="ambient-orb pointer-events-none absolute -left-10 top-20 size-44 rounded-full bg-accent/40" />
      <div className="ambient-orb pointer-events-none absolute right-8 top-10 size-56 rounded-full bg-sage/34" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <Reveal className="max-w-2xl">
          <h1 className="mt-3 max-w-[9ch] font-display text-5xl leading-[0.9] text-foreground sm:text-6xl lg:text-[5.2rem]">
            {STORE_NAME}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            Книги, учебники, методическая литература, наглядные пособия и букинистические издания в Новороссийске.
            <br />
            Аккуратный каталог для школы, дома, детского сада и занятий с педагогом.
          </p>
          <div className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-border/70 bg-background/90 px-3 py-2 text-sm text-foreground shadow-card">
            <MapPin className="size-4 text-brand" />
            Новороссийск · {ADDRESS}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/recommendations" size="lg" className="justify-center shadow-elevated">
              Смотреть рекомендации
              <ArrowRight className="size-4" />
            </Button>
            <Button href={PRIMARY_TEL} variant="secondary" size="lg" className="justify-center">
              <Phone className="size-4" />
              Позвонить
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-2 sm:max-w-xl">
            {highlightItems.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex min-w-0 items-center justify-center gap-2 rounded-full border border-border/70 bg-paper/90 px-3 py-2 text-center text-sm text-foreground shadow-card"
              >
                <Icon className="size-4 text-brand" />
                <span className="leading-5">{label}</span>
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <HeroShowcase />
        </Reveal>
      </Container>
    </section>
  );
}
