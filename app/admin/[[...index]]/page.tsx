import type { Metadata } from "next";

import StudioNoSsr from "./StudioNoSsr";

import { hasSanityEnv } from "@/sanity/env";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  if (!hasSanityEnv) {
    return (
      <main className="mx-auto flex min-h-screen max-w-3xl items-center px-6 py-16">
        <div className="rounded-[1.75rem] border border-border bg-panel p-8 shadow-card">
          <h1 className="font-display text-4xl text-foreground">Sanity Studio</h1>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Чтобы открыть админку, заполните переменные <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code>,{" "}
            <code>NEXT_PUBLIC_SANITY_DATASET</code> и <code>NEXT_PUBLIC_SANITY_API_VERSION</code> в локальном окружении и
            на Vercel.
          </p>
        </div>
      </main>
    );
  }

  return <StudioNoSsr />;
}
