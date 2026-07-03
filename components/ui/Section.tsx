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
    <Component id={id} className={cn("py-10 sm:py-12 lg:py-16", className)}>
      <div className={cn("mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </Component>
  );
}
