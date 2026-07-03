import { ImageIcon } from "lucide-react";

import { DraggableCarousel } from "@/components/ui/DraggableCarousel";

type PhotoPlaceholderCarouselProps = {
  labels: string[];
  ariaLabel: string;
  hint?: string;
};

export function PhotoPlaceholderCarousel({ labels, ariaLabel, hint = "Листайте фото" }: PhotoPlaceholderCarouselProps) {
  return (
    <DraggableCarousel
      ariaLabel={ariaLabel}
      hint={hint}
      className="mt-6"
      slideClassName="basis-[82%] sm:basis-[46%] lg:basis-[34%]"
    >
      {labels.map((label) => (
        <div
          key={label}
          className="relative overflow-hidden rounded-card border border-border/70 bg-panel/92 p-3 shadow-card"
        >
          <div className="paper-grid absolute inset-0 opacity-55" />
          <div className="relative flex aspect-[4/3] items-center justify-center rounded-panel border border-dashed border-border/70 bg-paper/90">
            <div className="flex flex-col items-center gap-3 text-center text-muted-foreground">
              <span className="flex size-12 items-center justify-center rounded-full bg-accent/80 text-accent-foreground">
                <ImageIcon className="size-5" />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">{label}</p>
                <p className="mt-1 text-xs">Окно под фото</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </DraggableCarousel>
  );
}
