import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import BackToTopButton from "@/components/sections/back-to-top";
import AboutHero from "@/components/sections/about-hero";
import AboutStory from "@/components/sections/about-story";
import AboutValues from "@/components/sections/about-values";
import ParallaxDivider01 from "@/components/sections/parallax-divider-01";
import ParallaxDivider05 from "@/components/sections/parallax-divider-05";

export default function AboutPage() {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <AboutHero />
        <AboutStory />
        <ParallaxDivider01 />
        <AboutValues />
        <ParallaxDivider05 />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
