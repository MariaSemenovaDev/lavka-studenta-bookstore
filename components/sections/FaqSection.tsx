import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ADDRESS } from "@/lib/constants";

const faqItems = [
  {
    question: "Что можно найти в магазине?",
    answer: "Книги, учебники, методическую литературу, канцелярию, развивающие игры, наглядные пособия, 3D-пазлы и модели.",
  },
  {
    question: "Где находится магазин?",
    answer: `Адрес магазина: ${ADDRESS}.`,
  },
  {
    question: "Можно ли уточнить наличие?",
    answer: "Да. Если нужен конкретный товар, лучше позвонить перед визитом и уточнить наличие.",
  },
  {
    question: "Есть ли товары для детей и педагогов?",
    answer: "Да. В ассортименте есть литература для детского сада, методические пособия, развивающие игры и материалы для занятий.",
  },
];

export function FaqSection() {
  return (
    <Section id="faq">
      <Reveal>
        <SectionTitle
          eyebrow="Вопросы"
          title="Коротко о том, что чаще всего спрашивают перед визитом."
          description="Собрали ответы о товарах, адресе и наличии."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {faqItems.map((item, index) => (
          <Reveal key={item.question} delay={index * 0.05}>
            <Card className="h-full bg-panel/82">
              <h3 className="font-display text-2xl text-foreground">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.answer}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
