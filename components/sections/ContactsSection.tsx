import { Compass, ExternalLink, MapPinned, Phone, Truck } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FULL_ADDRESS, MAP_EMBED_URL, MAP_LINK, PRIMARY_PHONE, PRIMARY_TEL, STORE_NAME } from "@/lib/constants";

export function ContactsSection() {
  return (
    <Section id="contacts">
      <div className="overflow-hidden rounded-shell border border-border/70 bg-panel shadow-elevated">
        <div className="grid gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-10">
          <Reveal>
            <SectionTitle
              eyebrow="Контакты"
              title="Позвоните перед визитом, чтобы уточнить наличие нужного товара."
              description="Финальный блок с адресом, телефоном, картой и короткой подсказкой по доставке."
              className="max-w-xl"
            />

            <Card className="mt-6 bg-background/92 px-5 pb-5 pt-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{STORE_NAME}</p>

              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <MapPinned className="size-4" />
                  </span>
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Адрес</p>
                    <p className="mt-1 text-sm leading-7 text-foreground">{FULL_ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Phone className="size-4" />
                  </span>
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Телефон</p>
                    <a
                      href={PRIMARY_TEL}
                      className="mt-1 inline-block text-sm font-medium leading-7 text-foreground transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    >
                      {PRIMARY_PHONE}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-panel border border-dashed border-border/80 bg-panel/90 p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <Compass className="size-4" />
                  </span>
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Перед визитом</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      Позвоните перед визитом, чтобы уточнить наличие нужного товара.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-panel border border-dashed border-border/80 bg-panel/90 p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <Truck className="size-4" />
                  </span>
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Доставка</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      Можно уточнить доставку по городу, по краю и по стране, а также удобный способ получения заказа.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={PRIMARY_TEL} size="lg" className="justify-center">
                  <Phone className="size-4" />
                  Позвонить
                </Button>
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-panel px-6 text-sm font-medium text-foreground transition duration-200 ease-out hover:-translate-y-0.5 hover:border-brand/40 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  Открыть в Яндекс.Картах
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-card border border-border/70 bg-background/92 px-3 pb-3 pt-7 shadow-card sm:px-4 sm:pb-4 sm:pt-8">
              <div className="paper-grid overflow-hidden rounded-[1.35rem] border border-border/60 bg-panel">
                <iframe
                  title="Карта: Книжная Лавка Студента"
                  src={MAP_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[320px] w-full md:h-[360px] xl:h-[400px]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
