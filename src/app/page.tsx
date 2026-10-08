import { Hero } from "@/components/hero/Hero";
import { ProductsSection } from "@/components/product/ProductsSection";
import { SupplySection } from "@/components/sections/SupplySection";
import { AppSection } from "@/components/app/AppSection";
import { WhyAmrenFresh } from "@/components/sections/WhyAmrenFresh";
import { FaqSection } from "@/components/faq/FaqSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <ProductsSection />
      <SupplySection />
      <AppSection />
      <WhyAmrenFresh />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
