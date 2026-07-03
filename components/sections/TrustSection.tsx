"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type KeyboardEvent } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { BookOpen, MapPin, NotebookPen, PackageCheck } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

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

const AUTO_ROTATE_MS = 9000;

export function TrustSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: false,
    loop: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateState = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateState();
    emblaApi.on("select", updateState);
    emblaApi.on("reInit", updateState);

    return () => {
      emblaApi.off("select", updateState);
      emblaApi.off("reInit", updateState);
    };
  }, [emblaApi, updateState]);

  useEffect(() => {
    if (!emblaApi) return;

    const timer = window.setInterval(() => {
      emblaApi.scrollNext();
    }, AUTO_ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [emblaApi]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!emblaApi) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      emblaApi.scrollPrev();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      emblaApi.scrollNext();
    }
  };

  return (
    <Section className="py-8 sm:py-10">
      <div className="relative overflow-hidden rounded-shell border border-border/70 bg-panel/72 px-3 py-3 shadow-elevated sm:px-4 sm:py-4">
        <Image
          src="https://i.pinimg.com/1200x/0b/cc/16/0bcc16869e8303bb1334fd6173a208bc.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.34] mix-blend-multiply"
          aria-hidden="true"
        />
        <div className="paper-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-paper/56 via-paper/34 to-panel/42" />

        <div
          ref={emblaRef}
          tabIndex={0}
          aria-label="Карусель преимуществ магазина"
          onKeyDown={handleKeyDown}
          className="relative overflow-hidden"
        >
          <div className="-ml-3 flex touch-pan-y items-center md:-ml-4">
            {trustItems.map(({ title, description, icon: Icon }, index) => {
              const isActive = index === selectedIndex;

              return (
                <div
                  key={title}
                  className={cn(
                    "min-w-0 shrink-0 grow-0 basis-[78%] pl-3 transition duration-300 ease-out sm:basis-[58%] md:basis-[44%] md:pl-4 lg:basis-[34%]",
                    !isActive && "opacity-72",
                  )}
                >
                  <div
                    className={cn(
                      "rounded-[1.75rem] border border-border/70 bg-panel/80 px-5 pb-5 pt-8 shadow-[0_18px_38px_rgba(60,43,37,0.12)] transition duration-300 ease-out backdrop-blur-[2px] sm:px-6",
                      isActive ? "scale-100 opacity-100" : "scale-[0.9] opacity-85",
                    )}
                  >
                    <span className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Icon className="size-5" />
                    </span>
                    <h2 className="mt-4 text-base font-semibold text-foreground sm:text-lg">{title}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
