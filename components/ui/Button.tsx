import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variants = {
  primary:
    "bg-brand text-brand-foreground shadow-soft hover:-translate-y-0.5 hover:bg-brand-strong focus-visible:outline-brand disabled:bg-brand/60",
  secondary:
    "border border-border bg-panel text-foreground hover:-translate-y-0.5 hover:border-brand/40 hover:bg-accent focus-visible:outline-brand disabled:border-border/60 disabled:text-muted-foreground",
  ghost: "text-foreground hover:bg-accent focus-visible:outline-brand disabled:text-muted-foreground",
};

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm sm:text-base",
};

const baseClassName =
  "inline-flex min-w-0 items-center justify-center gap-2 rounded-full font-medium transition duration-200 ease-out active:scale-[0.985] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none";

export function Button(props: ButtonProps) {
  const { className, variant = "primary", size = "md", children } = props;
  const classes = cn(baseClassName, variants[variant], sizes[size], className);

  if (typeof props.href === "string") {
    const anchorProps = { ...props };
    delete anchorProps.className;
    delete anchorProps.variant;
    delete anchorProps.size;
    delete anchorProps.children;

    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = { ...props };
  delete buttonProps.className;
  delete buttonProps.variant;
  delete buttonProps.size;
  delete buttonProps.children;

  const type = buttonProps.type ?? "button";
  delete buttonProps.type;

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  );
}
