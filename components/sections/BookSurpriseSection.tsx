import { MessageSquareText, Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PRIMARY_TEL } from "@/lib/constants";

export function BookSurpriseSection() {
  return (
    <Section id="surprise">
      <Reveal>
        <div className="relative overflow-hidden rounded-shell border border-border/70 bg-panel px-6 pb-6 pt-10 shadow-elevated sm:px-8 lg:px-12 lg:pb-10 lg:pt-12">
          <div className="paper-grid absolute inset-0 opacity-65" />
          <div className="ambient-orb pointer-events-none absolute -right-10 top-6 size-44 rounded-full bg-accent/20" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.86fr] lg:items-start">
            <div>
              <SectionTitle
                eyebrow="Поможем подобрать нужное"
                title="Не знаете, какой учебник, пособие или игру выбрать?"
                description="Позвоните — подскажем по наличию и ассортименту. Это быстрый способ сориентироваться перед визитом в магазин."
                className="max-w-xl"
              />

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={PRIMARY_TEL} size="lg" className="justify-center">
                  <Phone className="size-4" />
                  Позвонить
                </Button>
                <Button href="/catalog" variant="secondary" size="lg" className="justify-center">
                  Смотреть каталог
                </Button>
              </div>
            </div>

            <div className="lined-note rounded-card border border-border/70 bg-paper/90 p-5 shadow-card sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-brand text-brand-foreground">
                  <MessageSquareText className="size-5" />
                </span>
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Подсказка</p>
                  <h3 className="mt-1 font-display text-2xl text-foreground">Что можем подсказать</h3>
                </div>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                <li className="rounded-panel border border-border/70 bg-panel/80 px-4 py-3">
                  Подскажем, какой учебник, пособие или игра подойдёт для вашей задачи.
                </li>
                <li className="rounded-panel border border-border/70 bg-panel/80 px-4 py-3">
                  Быстро сориентируем по категориям и наличию.
                </li>
                <li className="rounded-panel border border-border/70 bg-panel/80 px-4 py-3">
                  Скажем, стоит ли ехать за конкретной позицией прямо сейчас.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
