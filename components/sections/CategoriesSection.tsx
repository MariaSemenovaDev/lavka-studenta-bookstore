import Image from "next/image";
import { ArrowRight, BookMarked, BookOpen, CalendarDays, GraduationCap, LibraryBig, NotebookPen, Phone, ScrollText } from "lucide-react";

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
    panel: "bg-[radial-gradient(circle_at_center,rgba(250,247,240,0.42)_0%,rgba(250,247,240,0.28)_52%,rgba(250,247,240,0.1)_100%)]",
    tab: "bg-accent/16 text-foreground",
    border: "border-accent/18",
    label: "Базовый раздел",
  },
  methodology: {
    icon: LibraryBig,
    accent: "bg-brand text-brand-foreground",
    panel: "bg-[radial-gradient(circle_at_center,rgba(244,238,229,0.42)_0%,rgba(244,238,229,0.28)_52%,rgba(244,238,229,0.1)_100%)]",
    tab: "bg-brand/12 text-foreground",
    border: "border-brand/14",
    label: "Для педагогов",
  },
  "visual-aids": {
    icon: NotebookPen,
    accent: "bg-sage text-sage-foreground",
    panel: "bg-[radial-gradient(circle_at_center,rgba(250,247,240,0.4)_0%,rgba(250,247,240,0.26)_52%,rgba(250,247,240,0.1)_100%)]",
    tab: "bg-sage/18 text-foreground",
    border: "border-sage/18",
    label: "Для объяснений",
  },
  "children-books": {
    icon: GraduationCap,
    accent: "bg-sage text-sage-foreground",
    panel: "bg-[radial-gradient(circle_at_center,rgba(244,238,229,0.42)_0%,rgba(244,238,229,0.28)_52%,rgba(244,238,229,0.1)_100%)]",
    tab: "bg-sage/16 text-foreground",
    border: "border-sage/14",
    label: "Для детей",
  },
  "extracurricular-reading": {
    icon: BookMarked,
    accent: "bg-accent text-accent-foreground",
    panel: "bg-[radial-gradient(circle_at_center,rgba(250,247,240,0.42)_0%,rgba(250,247,240,0.28)_52%,rgba(250,247,240,0.1)_100%)]",
    tab: "bg-accent/16 text-foreground",
    border: "border-accent/16",
    label: "Школьные списки",
  },
  "used-books": {
    icon: ScrollText,
    accent: "bg-brand text-brand-foreground",
    panel: "bg-[radial-gradient(circle_at_center,rgba(244,238,229,0.42)_0%,rgba(244,238,229,0.28)_52%,rgba(244,238,229,0.1)_100%)]",
    tab: "bg-brand/12 text-foreground",
    border: "border-brand/14",
    label: "С историей",
  },
  events: {
    icon: CalendarDays,
    accent: "bg-accent text-accent-foreground",
    panel: "bg-brand/95 text-brand-foreground",
    tab: "bg-brand-foreground/14 text-brand-foreground",
    border: "border-brand/30",
    label: "Книжный клуб",
  },
} as const;

export function CategoriesSection() {
  const showcaseCategories = categories.filter((category) => category.slug !== "extracurricular-reading");

  return (
    <Section id="categories">
      <div className="relative overflow-hidden rounded-shell border border-border/70 bg-panel/72 px-6 pb-6 pt-10 shadow-elevated sm:px-8 lg:px-12 lg:pb-10 lg:pt-12">
        <Image
          src="https://i.pinimg.com/736x/bc/b4/bd/bcb4bd267d25cf387d7bb54a900a80ee.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.52] mix-blend-multiply"
          aria-hidden="true"
        />
        <div className="paper-grid absolute inset-0 opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-br from-paper/44 via-paper/24 to-panel/34" />
        <div className="ambient-orb pointer-events-none absolute -right-10 top-10 size-44 rounded-full bg-accent/16" />

        <div className="relative">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <Reveal className="flex-1">
              <SectionTitle
                eyebrow="Ассортимент"
                title="Всё для учёбы, занятий и чтения"
                description="Учебная книга, методическая литература, наглядные пособия, книги для детей, внеклассное чтение и букинистические издания — в одном магазине в Новороссийске."
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/recommendations">
                  Наши рекомендации
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
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {showcaseCategories.map((category) => {
                const visual = categoryVisuals[category.slug];
                const Icon = visual.icon;
                const isEvents = category.slug === "events";

                return (
                  <Card
                    key={category.slug}
                    className={cn(
                      "group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-[1.5rem] border p-0 shadow-[0_10px_24px_rgba(74,52,43,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(74,52,43,0.1)]",
                      visual.panel,
                      visual.border,
                    )}
                  >
                    <div className="absolute inset-x-5 top-3 h-px bg-black/5" />
                    <div className="absolute inset-x-5 bottom-3 h-px bg-black/4" />

                    <div className="relative flex h-full flex-col justify-between p-5">
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em]", visual.tab)}>
                            {visual.label}
                          </span>
                          <span className={cn("flex size-11 items-center justify-center rounded-2xl transition duration-200 group-hover:scale-[1.05]", visual.accent)}>
                            <Icon className="size-5" />
                          </span>
                        </div>

                        <h3 className={cn("mt-5 max-w-[14ch] font-display text-[1.75rem] leading-[1.02] text-foreground", isEvents && "text-brand-foreground")}>
                          {category.name}
                        </h3>
                        <p className={cn("mt-3 max-w-[28ch] text-sm leading-6 text-muted-foreground", isEvents && "text-brand-foreground/82")}>
                          {category.description}
                        </p>
                      </div>

                      {isEvents ? (
                        <div className="mt-6">
                          <Button
                            href="/book-club"
                            variant="secondary"
                            className="justify-center border-white/18 bg-brand-foreground/10 text-brand-foreground hover:bg-brand-foreground/18"
                          >
                            Смотреть встречи
                            <ArrowRight className="size-4" />
                          </Button>
                        </div>
                      ) : null}
                    </div>
                  </Card>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
