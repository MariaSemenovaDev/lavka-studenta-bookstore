import { BookMarked, CalendarDays, MapPin, NotebookPen, ScrollText } from "lucide-react";

import { HeroShowcase } from "@/components/sections/HeroShowcase";
import { TypewriterTitle } from "@/components/sections/TypewriterTitle";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ADDRESS } from "@/lib/constants";

const quickTags = [
  { label: "Учебная книга", icon: NotebookPen },
  { label: "Внеклассное чтение", icon: BookMarked },
  { label: "Букинистика", icon: ScrollText },
  { label: "Книжный клуб", icon: CalendarDays },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-10 pt-8 sm:pb-12 sm:pt-10 lg:pb-16 lg:pt-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="ambient-orb absolute left-[-6rem] top-[-3rem] h-56 w-56 bg-[radial-gradient(circle,rgba(196,141,96,0.28),rgba(196,141,96,0)_72%)] lg:h-72 lg:w-72" />
        <div className="ambient-orb absolute right-[-5rem] top-10 h-52 w-52 bg-[radial-gradient(circle,rgba(122,88,70,0.18),rgba(122,88,70,0)_72%)] lg:h-64 lg:w-64" />
      </div>

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-12">
          <Reveal>
            <div className="max-w-2xl">
              <div className="hidden lg:block">
                <TypewriterTitle text="Книжная Лавка Студента" className="font-display text-[4.4rem] leading-[0.94] text-foreground xl:text-[5rem]" />
              </div>
              <h1 className="font-display text-[3rem] leading-[0.96] text-foreground sm:text-[3.5rem] lg:hidden">
                Книжная Лавка Студента
              </h1>

              <p className="mt-5 max-w-[34rem] text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                Книги, учебники, методическая литература, наглядные пособия и букинистические издания в Новороссийске.
              </p>
              <p className="mt-4 max-w-[36rem] text-base leading-8 text-muted-foreground sm:text-lg">
                Рецензии магазина, внеклассное чтение и события книжного клуба — в одном месте.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-panel/82 px-4 py-2 text-sm text-foreground">
                <MapPin className="size-4 text-muted-foreground" />
                <span>Новороссийск · {ADDRESS}</span>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:max-w-[34rem]">
                {quickTags.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-panel/82 px-4 py-3 text-center text-sm text-foreground shadow-soft"
                  >
                    <Icon className="size-4 shrink-0 text-muted-foreground" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <HeroShowcase />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
