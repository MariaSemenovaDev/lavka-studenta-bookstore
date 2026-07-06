"use client";

import { Children, useCallback, useEffect, useMemo, useState, type KeyboardEvent, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type DraggableCarouselProps = {
  children: ReactNode;
  className?: string;
  viewportClassName?: string;
  slideClassName?: string;
  hint?: string;
  ariaLabel?: string;
};

export function DraggableCarousel({
  children,
  className,
  viewportClassName,
  slideClassName,
  hint = "",
  ariaLabel = "Прокручиваемая карусель",
}: DraggableCarouselProps) {
  const slides = useMemo(() => Children.toArray(children), [children]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const frame = requestAnimationFrame(updateButtons);
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      cancelAnimationFrame(frame);
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi, updateButtons]);

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

  const handlePrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const handleNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className={cn("relative", className)}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">{hint}</p>
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            disabled={!canScrollPrev}
            aria-label="Предыдущие карточки"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-panel text-foreground transition duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-45"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!canScrollNext}
            aria-label="Следующие карточки"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-panel text-foreground transition duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-45"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-10 bg-gradient-to-l from-background to-transparent md:hidden" />
        <div
          ref={emblaRef}
          tabIndex={0}
          aria-label={ariaLabel}
          onKeyDown={handleKeyDown}
          className={cn("cursor-grab overflow-hidden rounded-shell active:cursor-grabbing", viewportClassName)}
        >
          <div className="-ml-4 flex touch-pan-y">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={cn("min-w-0 shrink-0 grow-0 basis-[86%] pl-4 sm:basis-[48%] lg:basis-[34%] xl:basis-[28%]", slideClassName)}
              >
                {slide}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
