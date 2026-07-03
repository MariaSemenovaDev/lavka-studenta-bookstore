import { Gift, MessageSquareText, Phone, Truck } from "lucide-react";

import { PhotoPlaceholderCarousel } from "@/components/ui/PhotoPlaceholderCarousel";
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
          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <SectionTitle
                eyebrow="Буксюрприз"
                title="Подберём книги в формате буксюрприза или поможем собрать заказ."
                description="Если не хотите долго выбирать, можно обратиться за подборкой. Подскажем по наличию, доставке и тому, как удобнее получить заказ."
                className="max-w-xl"
              />

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={PRIMARY_TEL} size="lg" className="justify-center">
                  <Phone className="size-4" />
                  Позвонить
                </Button>
                <Button href="/recommendations" variant="secondary" size="lg" className="justify-center">
                  Смотреть рекомендации
                </Button>
              </div>

              <PhotoPlaceholderCarousel
                ariaLabel="Фотографии буксюрприза"
                labels={["Буксюрприз 1", "Буксюрприз 2", "Буксюрприз 3"]}
              />
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
                  <span className="inline-flex items-center gap-2 font-medium text-foreground">
                    <Gift className="size-4 text-brand" />
                    Подберём книги в формате буксюрприза под возраст, интерес или повод.
                  </span>
                </li>
                <li className="rounded-panel border border-border/70 bg-panel/80 px-4 py-3">
                  <span className="inline-flex items-center gap-2 font-medium text-foreground">
                    <Truck className="size-4 text-brand" />
                    Скажем, как лучше заказать и как удобнее получить заказ: самовывоз, доставка по городу, краю или по стране.
                  </span>
                </li>
                <li className="rounded-panel border border-border/70 bg-panel/80 px-4 py-3">
                  Подскажем по наличию, мероприятиям и срокам, если нужен конкретный набор книг или подарочная подборка.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
