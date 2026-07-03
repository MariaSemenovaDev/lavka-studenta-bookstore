"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type KeyboardEvent } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ImageGalleryCarouselProps = {
  images: string[];
  altPrefix: string;
  className?: string;
};

export function ImageGalleryCarousel({ images, altPrefix, className }: ImageGalleryCarouselProps) {
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
      <div className="mb-4 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScroll}
          aria-label="Предыдущее фото"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-panel/90 text-foreground transition hover:border-brand/40 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-45"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScroll}
          aria-label="Следующее фото"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-panel/90 text-foreground transition hover:border-brand/40 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-45"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      <div
        ref={emblaRef}
        tabIndex={0}
        aria-label="Галерея фотографий книжного клуба"
        onKeyDown={handleKeyDown}
        className="overflow-hidden"
      >
        <div className="-ml-3 flex touch-pan-y items-center md:-ml-4">
          {images.map((image, index) => {
            const isActive = index === selectedIndex;

            return (
              <div
                key={image}
                className={cn(
                  "min-w-0 shrink-0 grow-0 basis-[74%] pl-3 transition duration-300 ease-out md:basis-[40%] md:pl-4 lg:basis-[32%]",
                  !isActive && "opacity-70",
                )}
              >
                <div
                  className={cn(
                    "relative overflow-hidden rounded-[1.75rem] shadow-[0_18px_38px_rgba(60,43,37,0.14)] transition duration-300 ease-out",
                    isActive ? "scale-100 opacity-100" : "scale-[0.88] opacity-82",
                  )}
                >
                  <div className={cn("relative bg-secondary", isActive ? "aspect-[4/5]" : "aspect-[4/5]")}>
                    <Image
                      src={image}
                      alt={`${altPrefix} ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 74vw, (max-width: 1200px) 40vw, 32vw"
                      className="object-cover"
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
