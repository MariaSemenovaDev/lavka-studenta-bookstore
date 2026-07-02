import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "muted" | "accent";
};

export function Badge({ className, tone = "default", ...props }: BadgeProps) {
  const tones = {
    default: "bg-accent text-accent-foreground",
    muted: "bg-secondary text-secondary-foreground",
    accent: "bg-brand text-brand-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-transparent px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em]",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
