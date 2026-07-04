import Image from "next/image";
import { BriefcaseBusiness, GraduationCap, School2, SmilePlus } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

const storeMoments = [

  {
    title: "Уютно",
    description: "Читаем с чашечкой кофе",
  },
  {
    title: "Четко",
    description: "Получаем оптовые заказы",
  },
  {
    title: "Душевно",
    description: "Проводим время с друзьями",
  },
  {
    title: "Вдумчиво",
    description: "Подбираем подарки",
  },
];

const audienceItems = [
  {
    title: "Для школьников",
    description: "Учебники, пособия и канцелярия для уроков, домашней работы и подготовки.",
    icon: School2,
  },
  {
    title: "Для родителей",
    description: "Книги для детей, внеклассное чтение и материалы для занятий дома.",
    icon: SmilePlus,
  },
  {
    title: "Для педагогов",
    description: "Методическая литература, наглядные пособия и материалы для занятий.",
    icon: GraduationCap,
  },
  {
    title: "Для студентов",
    description: "Книги, букинистические издания и учебные материалы для учёбы и саморазвития.",
    icon: BriefcaseBusiness,
  },
];

export function AudienceSection() {
  return (
    <Section id="audience">
      <div className="relative overflow-hidden rounded-shell border border-border/70 bg-panel/72 px-6 py-10 shadow-elevated sm:px-8 lg:px-12 lg:py-12">
        <Image
          src="https://i.pinimg.com/1200x/82/07/89/82078938067dcbdf0b2f62d9a6c01653.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.52] mix-blend-multiply"
          aria-hidden="true"
        />
        <div className="paper-grid absolute inset-0 opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-br from-paper/42 via-paper/24 to-panel/34" />

        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionTitle eyebrow="Для кого" title="Магазин, в котором" />

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {storeMoments.map((item) => (
                <div
                  key={item.title}
                  className="rounded-panel border border-border/55 bg-[radial-gradient(circle_at_center,rgba(250,247,240,0.56)_0%,rgba(250,247,240,0.36)_55%,rgba(250,247,240,0.18)_100%)] px-4 py-4 shadow-[0_12px_26px_rgba(74,52,43,0.07)]"
                >
                  <p className="font-display text-2xl text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {audienceItems.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.05}>
                <Card className="h-full border-border/50 bg-[radial-gradient(circle_at_center,rgba(250,247,240,0.42)_0%,rgba(250,247,240,0.28)_52%,rgba(250,247,240,0.1)_100%)] shadow-[0_10px_24px_rgba(74,52,43,0.05)]">
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
      </div>
    </Section>
  );
}
