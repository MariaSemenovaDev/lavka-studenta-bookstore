"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { AudienceSection } from "@/components/sections/AudienceSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { cn } from "@/lib/utils";

const SWITCH_INTERVAL_MS = 12000;

const items = [
  { id: "categories", label: "Ассортимент" },
  { id: "audience", label: "Для кого" },
] as const;

export function HomeShowcaseSwitcher() {
  const [activeId, setActiveId] = useState<(typeof items)[number]["id"]>("categories");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveId((current) => (current === "categories" ? "audience" : "categories"));
    }, SWITCH_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div aria-live="polite">
      <div className="mx-auto mb-1 flex max-w-xl items-center justify-center gap-6 px-6 text-sm sm:mb-1.5">
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              aria-pressed={isActive}
              className={cn(
                "relative pb-2 text-muted-foreground transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
                isActive && "text-foreground",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 h-px origin-center bg-brand transition duration-300",
                  isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
                )}
              />
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          {activeId === "categories" ? <CategoriesSection /> : <AudienceSection />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
