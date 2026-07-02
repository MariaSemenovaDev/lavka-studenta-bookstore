import Image from "next/image";

import { getCategoryName } from "@/lib/books";
import { getProductVisual } from "@/lib/product-visuals";
import { cn } from "@/lib/utils";
import type { BookCategorySlug } from "@/types/book";

type ProductMockCoverProps = {
  category: BookCategorySlug;
  title?: string;
  subtitle?: string;
  compact?: boolean;
  centered?: boolean;
  showTitle?: boolean;
  className?: string;
};

export function ProductMockCover({
  category,
  title,
  subtitle,
  compact = false,
  centered = false,
  showTitle = true,
  className,
}: ProductMockCoverProps) {
  const visual = getProductVisual(category);
  const Icon = visual.icon;
  const backgroundCover = category === "textbooks" ? "/covers/textbooks-photo.jpg" : null;
  const hasPhotoCover = Boolean(backgroundCover);

  return (
    <div className={cn("relative h-full w-full overflow-hidden rounded-[1.35rem]", visual.coverClassName, className)}>
      {backgroundCover ? (
        <div className="absolute inset-0">
          <Image
            src={backgroundCover}
            alt=""
            fill
            sizes="(max-width: 768px) 60vw, 18rem"
            className="scale-[1.08] object-cover object-center opacity-44 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
      ) : null}
      <div className="paper-noise absolute inset-0 opacity-55" />
      <div className={cn("absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/12", hasPhotoCover && "from-black/16 via-black/4 to-white/10")} />
      <div className="absolute inset-3 rounded-[1.1rem] border border-white/28" />
      <div className="absolute inset-x-5 top-4 h-px bg-white/24" />
      <div className="absolute inset-x-5 bottom-4 h-px bg-black/10" />
      <div className="relative flex h-full flex-col justify-between p-5">
        <div className="flex items-start justify-between gap-3">
          <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em]", visual.accentClassName)}>
            {getCategoryName(category)}
          </span>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/12">
            <Icon className="size-4" />
          </span>
        </div>

        <div className={cn("space-y-3", compact && "space-y-2", centered && "mx-auto text-center")}>
          {showTitle ? (
            <div>
              <p className={cn("text-[0.68rem] font-semibold uppercase tracking-[0.22em] opacity-72", compact && "text-[0.62rem]")}>
                {visual.shortLabel}
              </p>
              <h3 className={cn("mt-2 font-display text-[1.45rem] leading-tight", compact && "text-xl")}>{title}</h3>
            </div>
          ) : null}
          {subtitle ? (
            <p className={cn("max-w-[18ch] text-sm leading-6 opacity-78", compact && "text-xs leading-5", centered && "mx-auto")}>
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
