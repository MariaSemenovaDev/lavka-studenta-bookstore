import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-full border border-border bg-background px-4 text-sm text-foreground outline-none transition duration-200 placeholder:text-muted-foreground focus:border-brand/70 focus:ring-4 focus:ring-brand/10 disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    />
  );
}
