import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { businessAudiences } from "@/data/products";

export function SupplySection() {
  return (
    <section id="b2b-supply" className="scroll-mt-18 lg:scroll-mt-20 bg-forest py-16 text-paper lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 className="font-mono text-xs uppercase text-lime">Who we supply</h2>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-paper/80">
              AMREN Fresh works with trade customers only. Whether you run a neighbourhood
              shop, a supermarket or a commercial kitchen, we supply for everyday business
              requirements.
            </p>
          </div>

          <ul className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1 font-condensed text-[clamp(2.25rem,12vw,3rem)] sm:gap-x-4 sm:text-6xl lg:col-span-8 lg:text-7xl">
            {businessAudiences.map((audience, i) => (
              <li key={audience} className="flex items-baseline gap-3 sm:gap-4">
                <span className={i % 2 === 0 ? "text-paper" : "text-paper/45"}>{audience}</span>
                {i < businessAudiences.length - 1 && (
                  <span className="text-lime" aria-hidden="true">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div
          id="uae-supply"
          className="mt-16 grid scroll-mt-24 items-center gap-10 border-t border-paper/15 pt-12 lg:grid-cols-12 lg:gap-8"
        >
          <div className="relative aspect-[1706/922] w-full lg:col-span-7">
            <Image
              src="/images/uae/amren-fresh-uae-wide-business-supply-map.webp"
              alt="Map of the United Arab Emirates showing AMREN Fresh supply coverage"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 720px, 100vw"
              className="object-contain"
            />
          </div>

          <div className="lg:col-span-5 lg:pl-6">
            <p className="font-mono text-xs uppercase text-lime">Based in Dubai</p>
            <h3 className="mt-4 font-condensed text-5xl sm:text-6xl">
              Coverage
              <br />
              <span className="text-lime">across the UAE</span>
            </h3>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/75">
              We serve business customers across the United Arab Emirates with fresh
              produce and related products.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/60">
              Coverage and delivery arrangements are confirmed with each account directly.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
