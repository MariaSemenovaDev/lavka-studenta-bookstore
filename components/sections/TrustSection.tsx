import { BookOpen, MapPin, NotebookPen, PackageCheck } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const trustItems = [
  {
    title: "Книжный магазин в Новороссийске",
    description: "Один понятный адрес и быстрый контакт по телефону.",
    icon: MapPin,
  },
  {
    title: "Учебники, пособия и товары для занятий",
    description: "Книги, канцелярия и материалы для учебы в одном месте.",
    icon: BookOpen,
  },
  {
    title: "Книги для детей и наглядные материалы",
    description: "Чтение для дома, школы и материалы для занятий с детьми.",
    icon: NotebookPen,
  },
  {
    title: "Наличие можно уточнить по телефону",
    description: "Перед визитом удобно позвонить и проверить нужную позицию.",
    icon: PackageCheck,
  },
];

export function TrustSection() {
  return (
    <Section className="py-8 sm:py-10">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {trustItems.map(({ title, description, icon: Icon }, index) => (
          <Reveal key={title} delay={index * 0.05}>
            <div className="rounded-card border border-border/70 bg-panel/86 px-5 pb-5 pt-8 shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-soft">
              <span className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Icon className="size-5" />
              </span>
              <h2 className="mt-4 text-base font-semibold text-foreground">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
