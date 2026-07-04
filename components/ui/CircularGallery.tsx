"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState, type KeyboardEvent } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type CircularGalleryProps = {
  images: string[];
  altPrefix: string;
  className?: string;
};

function getCircularDistance(index: number, selectedIndex: number, total: number) {
  let distance = index - selectedIndex;

  if (distance > total / 2) distance -= total;
  if (distance < -total / 2) distance += total;

  return distance;
}

export function CircularGallery({ images, altPrefix, className }: CircularGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: false,
    loop: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const canScroll = images.length > 1;

  const updateState = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", updateState);
    emblaApi.on("reInit", updateState);

    return () => {
      emblaApi.off("select", updateState);
      emblaApi.off("reInit", updateState);
    };
  }, [emblaApi, updateState]);

  const transforms = useMemo(
    () =>
      images.map((_, index) => {
        const distance = getCircularDistance(index, selectedIndex, images.length);
        const absDistance = Math.abs(distance);

        if (absDistance === 0) {
          return "translateY(0px) scale(1) rotateY(0deg)";
        }

        if (absDistance === 1) {
          return `translateY(30px) scale(0.84) rotateY(${distance > 0 ? "-24deg" : "24deg"})`;
        }

        return `translateY(46px) scale(0.68) rotateY(${distance > 0 ? "-36deg" : "36deg"})`;
      }),
    [images, selectedIndex],
  );

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
    <div className={cn("relative", className)}>
      <div className="mb-5 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScroll}
          aria-label="Предыдущее фото"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-panel/92 text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-accent hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-45"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScroll}
          aria-label="Следующее фото"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-panel/92 text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-accent hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-45"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      <div
        ref={emblaRef}
        tabIndex={0}
        aria-label="Галерея фотографий"
        onKeyDown={handleKeyDown}
        className="overflow-hidden"
      >
        <div className="-ml-3 flex touch-pan-y items-start [perspective:1400px] md:-ml-4">
          {images.map((image, index) => {
            const distance = getCircularDistance(index, selectedIndex, images.length);
            const absDistance = Math.abs(distance);
            const isActive = absDistance === 0;

            return (
              <div
                key={`${image}-${index}`}
                className="min-w-0 shrink-0 grow-0 basis-[76%] pl-3 transition duration-500 ease-out md:basis-[42%] md:pl-4 lg:basis-[34%]"
              >
                <div
                  className={cn(
                    "group relative origin-center overflow-hidden rounded-[1.9rem] border border-white/28 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),rgba(255,255,255,0.04))] shadow-[0_18px_38px_rgba(60,43,37,0.14)] transition duration-500 ease-out",
                    isActive ? "opacity-100 shadow-[0_30px_55px_rgba(60,43,37,0.22)]" : "opacity-65",
                    absDistance > 1 && "opacity-35",
                  )}
                  style={{
                    transform: transforms[index],
                    filter: isActive ? "none" : absDistance === 1 ? "saturate(0.92)" : "blur(1px) saturate(0.8)",
                  }}
                >
                  <div className="relative aspect-[4/5] bg-secondary/28">
                    <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_46%)]" />
                    <Image
                      src={image}
                      alt={`${altPrefix} ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 76vw, (max-width: 1200px) 42vw, 34vw"
                      className={cn(
                        "object-cover transition duration-500 ease-out",
                        isActive ? "scale-100" : absDistance === 1 ? "scale-[0.96]" : "scale-[0.92]",
                      )}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
