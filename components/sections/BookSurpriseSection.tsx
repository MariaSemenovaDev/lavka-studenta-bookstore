import { Gift, Phone, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CircularGallery } from "@/components/ui/CircularGallery";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PRIMARY_TEL } from "@/lib/constants";

const surprisePhotos = [
  "https://sun9-82.userapi.com/s/v1/ig2/KA70NunKOQ6BfgMKTLa6mqAkmUFCiJScAf-njSFnwm-cxHtjccf71scUboiV0zlxoQQvd5uO2ofHsl7hMqnpBoH6.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x719,540x809,640x959,720x1079,854x1280&from=bu&cs=854x0",
  "https://sun9-17.userapi.com/s/v1/ig2/tWmnwJa5TDDYm08JtwucEKGtD6_GqQNFBUjmwRJ0IhHCvwIDgacII91JvqQMzjMAZpdWJ7u2iGFvoIa13K5fPClZ.jpg?quality=95&as=32x69,48x104,72x156,108x234,160x346,240x520,360x779,480x1039,534x1156&from=bu&cs=534x0",
  "https://sun9-45.userapi.com/s/v1/ig2/Js71jHuAXgimS0qG1pS58ZtaHoGqQWrsf_MvQU-HGjZ1jxeVVAHyo8eVmvsPvk6DIbGKpoiYTzGsOEahA4ASWoK9.jpg?quality=95&as=32x50,48x75,72x113,108x169,160x250,240x376,360x563,478x748&from=bu&cs=478x0",
  "https://sun9-16.userapi.com/s/v1/ig2/hrH_bT_wEWv8idc0odmg9H6k5WmFmbSN4vdeIIqVJwgkrIzrht5yFELccs-KZfO7k8eELgSbz2whjJ4M_1EM0nWR.jpg?quality=95&as=32x47,48x70,72x106,108x158,160x234,240x352,360x528,421x617&from=bu&cs=421x0",
  "https://sun9-82.userapi.com/s/v1/ig2/nHqznJegJkDUY57Br0gDRwJJQRilYCUOXK56rKePVWENfxE26zf1CbUI8tgaa2qgdB-0rYMenNelWhkPTRfHMEs1.jpg?quality=95&as=32x50,48x75,72x112,108x169,160x250,240x375,358x559&from=bu&cs=358x0",
];

export function BookSurpriseSection() {
  return (
    <Section className="bg-panel/28">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <SectionTitle
            eyebrow="Подарок"
            title="Поможем подобрать буксюрприз близкому человеку или малознакомому. Упакуем в оригинальную упаковку."
            description="Если нужен подарок со смыслом, можно позвонить в лавку: подскажем по жанру, возрасту, настроению и удобному способу получения."
          />

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={PRIMARY_TEL} size="lg">
              <Phone className="size-4" />
              Позвонить
            </Button>
            <Button href="/recommendations" variant="secondary" size="lg">
              <Sparkles className="size-4" />
              Смотреть рецензии
            </Button>
          </div>


        </div>

        <Card className="mt-6 bg-panel/86 lg:mt-10">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Как это работает</p>
          <h3 className="mt-3 font-display text-3xl text-foreground">Три простых шага</h3>

          <div className="mt-6 space-y-4">
            {[
              "Расскажите, для кого нужна книга.",
              "Мы подберём несколько уместных вариантов.",
              "Вы уточните наличие и удобный способ получения.",
            ].map((step, index) => (
              <div key={step} className="flex items-start gap-3 rounded-panel border border-border/60 bg-background/72 px-4 py-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  {index === 0 ? <Gift className="size-4" /> : <span className="text-sm font-semibold">{index + 1}</span>}
                </span>
                <p className="text-sm leading-7 text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-8">
        <CircularGallery images={surprisePhotos} altPrefix="Фотография буксюрприза" />
      </div>


    </Section>
  );
}
