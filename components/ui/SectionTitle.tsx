import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type SectionTitleProps = PropsWithChildren<{
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  className?: string;
}>;

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
  children,
}: SectionTitleProps) {
  const palette =
    tone === "inverse"
      ? {
          eyebrow: "text-brand-foreground/72",
          title: "text-brand-foreground",
          description: "text-brand-foreground/82",
          accent: "bg-accent",
        }
      : {
          eyebrow: "text-muted-foreground",
          title: "text-foreground",
          description: "text-muted-foreground",
          accent: "bg-brand",
        };

  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className={cn("mb-4 inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em]", palette.eyebrow)}>
          <span className={cn("block h-5 w-2 rounded-b-full rounded-t-sm", palette.accent)} />
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("font-display text-[2.15rem] leading-[0.98] sm:text-4xl lg:text-5xl", palette.title)}>{title}</h2>
      {description ? (
        <p className={cn("mt-4 max-w-[58ch] text-base leading-7 sm:text-lg sm:leading-8", palette.description)}>{description}</p>
      ) : null}
      {children}
    </div>
  );
}
