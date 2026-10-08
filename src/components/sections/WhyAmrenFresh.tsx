import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SwipeHint } from "@/components/ui/SwipeHint";
import { whyPrinciples } from "@/data/appFeatures";

export function WhyAmrenFresh() {
  return (
    <section id="why-amren-fresh" className="scroll-mt-18 lg:scroll-mt-20 bg-forest-darker py-16 text-paper lg:py-24">
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

        <SwipeHint tone="light" className="mt-8 lg:hidden" />

        <dl
          tabIndex={0}
          aria-label="Reasons to work with AMREN Fresh"
          className="no-scrollbar -mx-6 mt-4 flex snap-x snap-mandatory scroll-px-6 gap-3 overflow-x-auto px-6 pb-2 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:mt-12 lg:grid lg:grid-cols-4 lg:gap-0 lg:overflow-visible lg:border-l lg:border-t lg:border-paper/15 lg:px-0 lg:pb-0"
        >
          {whyPrinciples.map((principle, i) => (
            <div
              key={principle.title}
              className="w-[72%] shrink-0 snap-start border border-paper/15 p-6 transition-colors hover:bg-forest sm:w-[40%] lg:w-auto lg:border-l-0 lg:border-t-0"
            >
              <span className="font-mono text-xs text-lime">{String(i + 1).padStart(2, "0")}</span>
              <dt className="mt-6 text-lg font-bold lg:mt-8">{principle.title}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-paper/65">{principle.description}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
