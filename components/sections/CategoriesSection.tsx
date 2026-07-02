import Link from "next/link";
import { ArrowRight, Blocks, BookOpen, BriefcaseBusiness, GraduationCap, LibraryBig, NotebookPen, PencilRuler, Phone, Shapes } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { categories } from "@/data/categories";
import { PRIMARY_TEL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const categoryVisuals = {
  textbooks: {
    icon: BookOpen,
    accent: "bg-accent text-accent-foreground",
    ribbon: "bg-accent/25",
    label: "Базовый раздел",
  },
  methodology: {
    icon: LibraryBig,
    accent: "bg-brand text-brand-foreground",
    ribbon: "bg-brand/18",
    label: "Для педагогов",
  },
  preschool: {
    icon: GraduationCap,
    accent: "bg-sage text-sage-foreground",
    ribbon: "bg-sage/20",
    label: "Раннее развитие",
  },
  games: {
    icon: Shapes,
    accent: "bg-accent text-accent-foreground",
    ribbon: "bg-accent/22",
    label: "Для практики",
  },
  stationery: {
    icon: PencilRuler,
    accent: "bg-secondary text-secondary-foreground",
    ribbon: "bg-secondary/80",
    label: "На каждый день",
  },
  "visual-aids": {
    icon: NotebookPen,
    accent: "bg-sage text-sage-foreground",
    ribbon: "bg-sage/18",
    label: "Для объяснений",
  },
  "business-books": {
    icon: BriefcaseBusiness,
    accent: "bg-brand text-brand-foreground",
    ribbon: "bg-brand/18",
    label: "Саморазвитие",
  },
  "puzzles-models": {
    icon: Blocks,
    accent: "bg-accent text-accent-foreground",
    ribbon: "bg-accent/22",
    label: "Сборные наборы",
  },
} as const;

export function CategoriesSection() {
  return (
    <Section id="categories">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="flex-1">
          <SectionTitle
            eyebrow="Ассортимент"
            title="Всё для учёбы, занятий и развития"
            description="Учебники, методическая литература, развивающие игры, канцелярия и наглядные пособия — в одном магазине в Новороссийске."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/catalog">
              Смотреть каталог
              <ArrowRight className="size-4" />
            </Button>
            <Button href={PRIMARY_TEL} variant="secondary">
              <Phone className="size-4" />
              Уточнить наличие
            </Button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.12} className="mt-8">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => {
            const visual = categoryVisuals[category.slug];
            const Icon = visual.icon;

            return (
              <Link
                key={category.slug}
                href={`/catalog?category=${category.slug}`}
                className="block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                <Card className="group relative flex h-full min-h-[248px] flex-col justify-between overflow-hidden bg-panel/84 px-5 pb-5 pt-8">
                  <div className={cn("absolute inset-x-0 top-0 h-2", visual.ribbon)} />

                  <div>
                    <span className={cn("flex size-11 items-center justify-center rounded-full transition duration-200 group-hover:scale-[1.04]", visual.accent)}>
                      <Icon className="size-5" />
                    </span>
                    <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{visual.label}</p>
                    <h3 className="mt-3 font-display text-[1.7rem] leading-tight text-foreground">{category.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{category.description}</p>
                  </div>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition group-hover:text-brand">
                    Открыть раздел
                    <ArrowRight className="size-4" />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
