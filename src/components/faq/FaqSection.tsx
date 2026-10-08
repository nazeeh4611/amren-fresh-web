import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { faqItems } from "@/data/faq";

export function FaqSection() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="grain scroll-mt-18 lg:scroll-mt-20 bg-warm-white py-16 lg:py-24">
      <Container>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              title="Questions"
              description="Common questions from shop owners and business customers about AMREN Fresh and the app."
            />
          </div>

          <div className="border-t border-ink/80">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </Container>
    </section>
  );
}
