import { PortableText, type PortableTextComponents } from "@portabletext/react";

import type { PortableTextBlock } from "@portabletext/types";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-base leading-8 text-muted-foreground">{children}</p>,
    h2: ({ children }) => <h2 className="mt-8 font-display text-3xl text-foreground">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-6 font-display text-2xl text-foreground">{children}</h3>,
  },
  list: {
    bullet: ({ children }) => <ul className="ml-5 list-disc space-y-2 text-base leading-8 text-muted-foreground">{children}</ul>,
    number: ({ children }) => <ol className="ml-5 list-decimal space-y-2 text-base leading-8 text-muted-foreground">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noreferrer"
        className="underline decoration-brand/40 underline-offset-4 transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        {children}
      </a>
    ),
  },
};

type PortableTextContentProps = {
  value?: PortableTextBlock[];
};

export function PortableTextContent({ value }: PortableTextContentProps) {
  if (!value?.length) {
    return null;
  }

  return <PortableText value={value} components={components} />;
}
