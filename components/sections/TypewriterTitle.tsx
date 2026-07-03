"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type TypewriterTitleProps = {
  text: string;
  className?: string;
  speedMs?: number;
  startDelayMs?: number;
  deleteSpeedMs?: number;
  holdMs?: number;
};

export function TypewriterTitle({
  text,
  className,
  speedMs = 85,
  startDelayMs = 180,
  deleteSpeedMs = 45,
  holdMs = 1500,
}: TypewriterTitleProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let startTimer: number | null = null;
    let loopTimer: number | null = null;
    let isCancelled = false;

    if (prefersReducedMotion) {
      startTimer = window.setTimeout(() => {
        setDisplayedText(text);
      }, 0);

      return () => {
        if (startTimer !== null) {
          window.clearTimeout(startTimer);
        }
      };
    }

    startTimer = window.setTimeout(() => {
      setDisplayedText("");
    }, 0);

    const runCycle = () => {
      if (isCancelled) return;

      let charIndex = 0;

      const typeForward = () => {
        if (isCancelled) return;

        charIndex += 1;
        setDisplayedText(text.slice(0, charIndex));

        if (charIndex < text.length) {
          loopTimer = window.setTimeout(typeForward, speedMs);
          return;
        }

        loopTimer = window.setTimeout(typeBackward, holdMs);
      };

      const typeBackward = () => {
        if (isCancelled) return;

        charIndex -= 1;
        setDisplayedText(text.slice(0, Math.max(0, charIndex)));

        if (charIndex > 0) {
          loopTimer = window.setTimeout(typeBackward, deleteSpeedMs);
          return;
        }

        loopTimer = window.setTimeout(runCycle, startDelayMs);
      };

      loopTimer = window.setTimeout(typeForward, speedMs);
    };

    const typingStartTimer = window.setTimeout(() => {
      runCycle();
    }, startDelayMs);

    return () => {
      isCancelled = true;
      if (startTimer !== null) {
        window.clearTimeout(startTimer);
      }
      window.clearTimeout(typingStartTimer);
      if (loopTimer !== null) {
        window.clearTimeout(loopTimer);
      }
    };
  }, [deleteSpeedMs, holdMs, speedMs, startDelayMs, text]);

  return (
    <span aria-label={text} className={cn("relative inline-grid", className)}>
      <span aria-hidden="true" className="invisible">
        {text}
      </span>
      <span aria-hidden="true" className="absolute inset-0">
        {displayedText}
        <span
          className={cn(
            "typewriter-caret ml-1 inline-block h-[0.9em] w-[0.08em] translate-y-[0.08em] rounded-full bg-brand align-baseline",
          )}
        />
      </span>
    </span>
  );
}
