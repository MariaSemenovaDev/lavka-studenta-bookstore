import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { BookSurpriseSection } from "@/components/sections/BookSurpriseSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { ContactsSection } from "@/components/sections/ContactsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeaturedBooksSection } from "@/components/sections/FeaturedBooksSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main id="content">
        <HeroSection />
        <TrustSection />
        <CategoriesSection />
        <AudienceSection />
        <BookSurpriseSection />
        <FeaturedBooksSection />
        <AboutSection />
        <FaqSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
}
