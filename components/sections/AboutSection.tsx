import { BookOpen, GraduationCap, MapPin, ScrollText } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ADDRESS } from "@/lib/constants";

const features = [
  {
    title: "Учебный ассортимент без лишнего шума",
    description: "Учебники, книги, методическая литература и материалы, которые действительно нужны для занятий и подготовки.",
    icon: GraduationCap,
  },
  {
    title: "Для школы, детского сада и дома",
    description: "В каталоге есть книги для детей, внеклассное чтение, пособия и материалы для школьных и домашних занятий.",
    icon: BookOpen,
  },
  {
    title: "Один магазин, один адрес",
    description: `Магазин находится по адресу: ${ADDRESS}. Перед визитом можно позвонить и уточнить наличие нужной позиции.`,
    icon: MapPin,
  },
  {
    title: "Букинистика и книжные направления",
    description: "Помимо учебной литературы, в магазине есть книги для детей, букинистические издания и книжные мероприятия.",
    icon: ScrollText,
  },
];

export function AboutSection() {
  return (
    <Section id="about" className="bg-panel/45">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal>
          <SectionTitle
            eyebrow="О магазине"
            title="Небольшой книжный магазин с понятным ассортиментом для учёбы и чтения."
            description="Книжная Лавка Студента — магазин в Новороссийске, где можно спокойно подобрать учебники, методическую литературу, книги для детей, внеклассное чтение, букинистические издания и наглядные материалы без перегруженной витрины."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {features.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.05}>
              <Card className="flex items-start gap-4 bg-panel/82">
                <span className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-2xl text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{description}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
