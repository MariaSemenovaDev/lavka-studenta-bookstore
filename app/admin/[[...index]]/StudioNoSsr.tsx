"use client";

import dynamic from "next/dynamic";

const StudioClient = dynamic(() => import("./StudioClient"), {
  ssr: false,
  loading: () => (
    <main className="mx-auto flex min-h-screen max-w-3xl items-center px-6 py-16">
      <div className="rounded-[1.75rem] border border-border bg-panel p-8 shadow-card">
        <h1 className="font-display text-4xl text-foreground">Sanity Studio</h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">Загружаем админку…</p>
      </div>
    </main>
  ),
});

export default function StudioNoSsr() {
  return <StudioClient />;
}
