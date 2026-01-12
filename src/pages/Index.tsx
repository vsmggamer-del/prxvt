import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CodeSection } from "@/components/CodeSection";
import { ProductsSection } from "@/components/ProductsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CodeSection />
      <ProductsSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
