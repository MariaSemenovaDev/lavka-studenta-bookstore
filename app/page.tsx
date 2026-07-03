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
import { getFeaturedAnnouncements, getFeaturedEvents, getFeaturedRecommendations } from "@/sanity/fetchers";

export default async function HomePage() {
  const [featuredEvents, featuredAnnouncements, featuredRecommendations] = await Promise.all([
    getFeaturedEvents(),
    getFeaturedAnnouncements(),
    getFeaturedRecommendations(),
  ]);

  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main id="content">
        <HeroSection />
        <TrustSection />
        <CmsRecommendationsSection recommendations={featuredRecommendations} />
        <BookClubSection events={featuredEvents} announcements={featuredAnnouncements} />
        <BookSurpriseSection />
        <AudienceSection />
        <AboutSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
}
