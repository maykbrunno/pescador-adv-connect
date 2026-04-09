import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <LocationSection />
      <ContactFooter />
    </main>
  );
};

export default Index;
