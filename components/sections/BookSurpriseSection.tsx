import { CheckCircle2, MessageSquareText, Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PRIMARY_TEL } from "@/lib/constants";

const steps = [
  "Расскажите, для кого нужна книга.",
  "Мы подберём несколько уместных вариантов.",
  "Вы уточните наличие и удобный способ получения.",
];

export function BookSurpriseSection() {
  return (
    <Section id="help">
      <Reveal>
        <div className="relative overflow-hidden rounded-shell border border-border/70 bg-panel px-6 py-8 shadow-elevated sm:px-8 lg:px-10">
          <div className="paper-grid absolute inset-0 opacity-60" />
          <div className="ambient-orb pointer-events-none absolute -right-10 top-6 size-40 rounded-full bg-accent/16" />

          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <SectionTitle
                eyebrow="Помощь с выбором"
                title="Поможем подобрать книгу"
                description="Если не хочется долго искать самостоятельно, можно позвонить в магазин. Подскажем по книгам, внеклассному чтению, букинистике и тому, как удобнее получить заказ."
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
            </div>

            <Card className="lined-note bg-paper/92">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-brand text-brand-foreground">
                  <MessageSquareText className="size-5" />
                </span>
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Как это работает</p>
                  <h3 className="mt-1 font-display text-2xl text-foreground">Три простых шага</h3>
                </div>
              </div>

              <ol className="mt-5 space-y-3">
                {steps.map((step) => (
                  <li key={step} className="rounded-panel border border-border/70 bg-panel/82 px-4 py-3 text-sm leading-7 text-muted-foreground">
                    <span className="inline-flex items-start gap-2">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-brand" />
                      <span>{step}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Card>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
