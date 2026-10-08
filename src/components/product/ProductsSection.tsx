import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SwipeHint } from "@/components/ui/SwipeHint";
import { productGroups } from "@/data/products";

export function ProductsSection() {
  return (
    <section id="products" className="grain scroll-mt-18 lg:scroll-mt-20 bg-warm-white py-16 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="The range"
            description="Fresh produce and business supplies for shops, supermarkets, restaurants and other commercial buyers across the UAE."
          />
          <p className="font-mono text-xs uppercase text-muted lg:text-right">
            {String(productGroups.length).padStart(2, "0")} categories
            <br />
            Prices &amp; stock live in the app
          </p>
        </div>

        <SwipeHint className="mt-8 lg:hidden" />

        <ol
          tabIndex={0}
          aria-label="Product categories"
          className="no-scrollbar -mx-6 mt-4 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:mt-12 lg:block lg:overflow-visible lg:border-b lg:border-ink/80 lg:px-0 lg:pb-0"
        >
          {productGroups.map((group, i) => (
            <li
              key={group.id}
              id={group.id}
              className="flex w-[85%] shrink-0 snap-start scroll-mt-24 flex-col gap-4 rounded-card-lg border border-ink/15 bg-paper/70 p-5 sm:w-[60%] lg:grid lg:w-auto lg:grid-cols-12 lg:gap-8 lg:rounded-none lg:border-0 lg:border-t lg:border-ink/80 lg:bg-transparent lg:p-0 lg:py-8"
            >
              <span className="font-mono text-sm text-muted lg:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="font-condensed text-4xl text-forest sm:text-5xl lg:col-span-3 lg:text-6xl">
                {group.name}
              </h3>

              <div className="lg:col-span-4">
                <p className="text-base leading-relaxed text-ink">{group.summary}</p>

                {group.items && (
                  <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-1.5 font-mono text-xs uppercase text-muted sm:grid-cols-3">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {group.details && (
                  <dl className="mt-5 space-y-3">
                    {group.details.map((detail) => (
                      <div key={detail.name}>
                        <dt className="font-mono text-xs uppercase text-forest">{detail.name}</dt>
                        <dd className="mt-0.5 text-sm text-muted">{detail.description}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {group.note && <p className="mt-4 text-xs text-muted">{group.note}</p>}
              </div>

              <div className="order-first grid grid-cols-2 gap-2 lg:order-none lg:col-span-4 lg:grid-cols-1 lg:gap-3">
                {group.images.map((image) => (
                  <div
                    key={image.src}
                    className={
                      group.images.length > 1
                        ? "relative aspect-[16/9] overflow-hidden rounded-card bg-ivory"
                        : "relative col-span-2 aspect-[16/9] overflow-hidden rounded-card bg-ivory lg:col-span-1"
                    }
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 60vw, 85vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-5 text-sm text-muted">
          Availability and pricing vary with market conditions. Account holders can check
          current stock and prices in the AMREN Fresh app.
        </p>
      </Container>
    </section>
  );
}
