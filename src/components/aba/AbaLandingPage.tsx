import { AboutSection } from "@/components/aba/AboutSection";
import { ContactSection } from "@/components/aba/ContactSection";
import { DifferentiatorsSection } from "@/components/aba/DifferentiatorsSection";
import { FinalCtaSection } from "@/components/aba/FinalCtaSection";
import { Footer } from "@/components/aba/Footer";
import { HeroSection } from "@/components/aba/HeroSection";
import { PartnersSection } from "@/components/aba/PartnersSection";
import { StatsSection } from "@/components/aba/StatsSection";
import { StorySection } from "@/components/aba/StorySection";

export function LandingPage() {
  return (
    <>
      <main className="relative z-0">
        <HeroSection />
        <StorySection />
        <AboutSection />
        <DifferentiatorsSection />
        <PartnersSection />
        <StatsSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
