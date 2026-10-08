import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyPrinciples } from "@/data/appFeatures";

export function WhyAmrenFresh() {
  return (
    <section id="why-amren-fresh" className="scroll-mt-18 bg-forest-darker py-16 text-paper lg:py-24">
      <Container>
        <SectionHeading
          title={
            <>
              Why work
              <br />
              <span className="text-lime">with us</span>
            </>
          }
          tone="light"
        />

        <dl className="mt-12 grid border-l border-t border-paper/15 sm:grid-cols-2 lg:grid-cols-4">
          {whyPrinciples.map((principle, i) => (
            <div
              key={principle.title}
              className="group border-b border-r border-paper/15 p-6 transition-colors hover:bg-forest"
            >
              <span className="font-mono text-xs text-lime">{String(i + 1).padStart(2, "0")}</span>
              <dt className="mt-8 text-lg font-bold">{principle.title}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-paper/65">{principle.description}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
