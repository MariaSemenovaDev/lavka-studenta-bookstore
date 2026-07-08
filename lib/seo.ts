import type { PortableTextBlock } from "@portabletext/types";

export function getSeoDescription(...values: Array<string | PortableTextBlock[] | null | undefined>) {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }

    if (Array.isArray(value)) {
      const text = value
        .flatMap((block) => ("children" in block && Array.isArray(block.children) ? block.children : []))
        .map((child) => ("text" in child && typeof child.text === "string" ? child.text.trim() : ""))
        .filter(Boolean)
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();

      if (text) {
        return text;
      }
    }
  }

  return undefined;
}
