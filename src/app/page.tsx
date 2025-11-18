import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import IntroSection from "@/components/sections/intro-section";
import ParallaxDivider01 from "@/components/sections/parallax-divider-01";
import ServicesSection from "@/components/sections/services-section";
import ParallaxDivider02 from "@/components/sections/parallax-divider-02";
import GroundUpSection from "@/components/sections/ground-up-section";
import ParallaxDivider03 from "@/components/sections/parallax-divider-03";
import RecentProjects from "@/components/sections/recent-projects";
import RentalEquipmentSection from "@/components/sections/rental-equipment-section";
import ClientsSection from "@/components/sections/clients-section";
import ConsultationSection from "@/components/sections/consultation-section";
import ParallaxDivider06 from "@/components/sections/parallax-divider-06";
import Footer from "@/components/sections/footer";
import BackToTopButton from "@/components/sections/back-to-top";

export default function HomePage() {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <IntroSection />
        <ParallaxDivider01 />
        <ServicesSection />
        <ParallaxDivider02 />
        <GroundUpSection />
        <ParallaxDivider03 />
        <RecentProjects />
        <RentalEquipmentSection />
        <ClientsSection />
        <ConsultationSection />
        <ParallaxDivider06 />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}