import Navigation from "@/components/sections/navigation";
import ContactHero from "@/components/sections/contact-hero";
import ContactForm from "@/components/sections/contact-form";
import ContactInfo from "@/components/sections/contact-info";
import Footer from "@/components/sections/footer";
import BackToTopButton from "@/components/sections/back-to-top";

export default function ContactPage() {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
