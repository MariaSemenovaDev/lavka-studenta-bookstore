import { connection } from "next/server";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { BookSurpriseSection } from "@/components/sections/BookSurpriseSection";
import { BookClubSection } from "@/components/sections/BookClubSection";
import { ContactsSection } from "@/components/sections/ContactsSection";
import { CmsRecommendationsSection } from "@/components/sections/CmsRecommendationsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { getRecommendations } from "@/sanity/fetchers";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function HomePage() {
  await connection();

  const recommendations = await getRecommendations();

  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main id="content">
        <HeroSection />
        <TrustSection />
        <CmsRecommendationsSection recommendations={recommendations} />
        <BookClubSection />
        <BookSurpriseSection />
        <AudienceSection />
        <AboutSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
}
