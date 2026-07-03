import { BriefcaseBusiness, GraduationCap, School2, SmilePlus } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

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
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionTitle
            eyebrow="Для кого"
            title="Магазин, в котором легко понять, что искать именно вам."
            description="Секция помогает быстро сориентироваться по задачам: школа, занятия дома, работа педагога или учеба в вузе."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {audienceItems.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.05}>
              <Card className="h-full bg-panel/80">
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
