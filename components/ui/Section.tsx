import { cn } from "@/lib/utils";
import type { ElementType, PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  containerClassName?: string;
  as?: ElementType;
}>;

export function Section({
  id,
  className,
  containerClassName,
  as: Component = "section",
  children,
}: SectionProps) {
  return (
    <Component id={id} className={cn("py-14 sm:py-18 lg:py-22", className)}>
      <div className={cn("mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </Component>
  );
}
