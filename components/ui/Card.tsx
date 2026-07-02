import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-card border border-border/80 bg-panel p-5 shadow-card transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-soft active:scale-[0.995] sm:p-6",
        className,
      )}
      {...props}
    />
  );
}
