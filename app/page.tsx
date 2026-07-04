import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { BookSurpriseSection } from "@/components/sections/BookSurpriseSection";
import { BookClubSection } from "@/components/sections/BookClubSection";
import { ContactsSection } from "@/components/sections/ContactsSection";
import { CmsRecommendationsSection } from "@/components/sections/CmsRecommendationsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { DotField } from "@/components/ui/DotField";
import { getRecommendations } from "@/sanity/fetchers";

export const revalidate = 300;

export default async function HomePage() {
  const recommendations = await getRecommendations("cached");

  return (
    <div id="top" className="relative isolate min-h-screen bg-background">
      <div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 -z-10 hidden h-screen w-screen overflow-hidden lg:block">
        <DotField
          className="opacity-100"
          dotColor="#b76e49"
          glowColor="#f0c98d"
          backgroundColor="#f6efe6"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,239,230,0.04),rgba(246,239,230,0.16)_44%,rgba(246,239,230,0.28)_100%)]" />
      </div>
      <Header />
      <main id="content">
        <HeroSection />
        <AboutSection />
        <BookClubSection />
        <CmsRecommendationsSection recommendations={recommendations} />
        <BookSurpriseSection />
        <AudienceSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
}
