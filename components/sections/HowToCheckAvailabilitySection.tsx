import { CheckCircle2, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PRIMARY_TEL } from "@/lib/constants";

const steps = [
  {
    title: "Выберите рекомендацию или интересующее направление",
    description: "Посмотрите подборки магазина, книжный клуб или нужный раздел на сайте.",
    icon: CheckCircle2,
  },
  {
    title: "Позвоните в магазин",
    description: "Подскажем по наличию, доставке и удобному способу получения.",
    icon: Phone,
  },
  {
    title: "Уточните удобный способ получения",
    description: "Если книга есть в магазине, останется только договориться о визите или получении.",
    icon: MapPin,
  },
];

export function HowToCheckAvailabilitySection() {
  return (
    <Section id="availability">
      <div className="rounded-shell border border-border/70 bg-panel/68 px-6 py-8 shadow-card sm:px-8 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              eyebrow="Перед визитом"
              title="Как уточнить наличие"
              description="Если нужна конкретная книга, пособие или букинистическое издание, лучше позвонить перед визитом — подскажем по наличию и удобному способу получения."
              className="max-w-2xl"
            />
            <Button href={PRIMARY_TEL} size="lg" className="justify-center">
              <Phone className="size-4" />
              Позвонить
            </Button>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {steps.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.05}>
              <Card className="h-full bg-background/88">
                <span className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-2xl text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
