import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { SITE_URL, STORE_NAME } from "@/lib/constants";

import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Книжная Лавка Студента — книжный магазин в Новороссийске",
    template: "%s | Книжная Лавка Студента",
  },
  description:
    "Книжный магазин в Новороссийске: учебная книга, внеклассное чтение, методическая литература, наглядные пособия, букинистика, рекомендации магазина и книжный клуб.",
  applicationName: STORE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Книжная Лавка Студента",
    description: "Книги, учебники, рекомендации магазина и книжный клуб в Новороссийске.",
    url: SITE_URL,
    locale: "ru_RU",
    type: "website",
    siteName: "Книжная Лавка Студента",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: STORE_NAME,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Книжная Лавка Студента",
    description: "Книги, учебники, рекомендации магазина и книжный клуб в Новороссийске.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${bodyFont.variable} ${displayFont.variable} bg-background font-sans text-foreground antialiased`}>
        <a
          href="#content"
          className="sr-only left-4 top-4 z-50 rounded-full bg-brand px-4 py-2 text-sm font-medium text-brand-foreground focus:not-sr-only focus:absolute"
        >
          Перейти к содержимому
        </a>
        {children}
      </body>
    </html>
  );
}
