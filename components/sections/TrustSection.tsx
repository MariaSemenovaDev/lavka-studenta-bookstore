import Image from "next/image";
import { BookOpen, MapPin, NotebookPen } from "lucide-react";

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
];

const marqueeItems = [...trustItems, ...trustItems];

export function TrustSection() {
  return (
    <Section className="py-8 sm:py-10">
      <div className="relative overflow-hidden rounded-shell border border-border/70 bg-panel/72 px-3 py-3 shadow-elevated sm:px-4 sm:py-4">
        <Image
          src="https://i.pinimg.com/1200x/0f/4b/2e/0f4b2e987e42a411f0acefecfc93b9e5.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.34] mix-blend-multiply"
          aria-hidden="true"
        />
        <div className="paper-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-paper/56 via-paper/34 to-panel/42" />

        <div className="relative overflow-hidden">
          <div className="trust-marquee flex w-max items-stretch gap-3 md:gap-4">
            {marqueeItems.map(({ title, description, icon: Icon }, index) => (
              <article
                key={`${title}-${index}`}
                className="w-[18rem] shrink-0 rounded-[1.75rem] border border-border/70 bg-panel/78 px-5 pb-5 pt-8 shadow-[0_18px_38px_rgba(60,43,37,0.12)] backdrop-blur-[2px] sm:w-[20rem] sm:px-6 lg:w-[24rem]"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Icon className="size-5" />
                </span>
                <h2 className="mt-4 text-base font-semibold text-foreground sm:text-lg">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
