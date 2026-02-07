import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about-section";
import { ProductsSection } from "@/components/home/products-section";
import { ProcessSection } from "@/components/home/process-section";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CtaSection } from "@/components/home/cta-section";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
