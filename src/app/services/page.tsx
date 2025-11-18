import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import BackToTopButton from "@/components/sections/back-to-top";
import ServicesHero from "@/components/sections/services-hero";
import ServicesDetail from "@/components/sections/services-detail";
import ServicesCTA from "@/components/sections/services-cta";
import ParallaxDivider02 from "@/components/sections/parallax-divider-02";

export default function ServicesPage() {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <ServicesHero />
        <ServicesDetail />
        <ParallaxDivider02 />
        <ServicesCTA />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
