import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { productGroups } from "@/data/products";

export function ProductsSection() {
  return (
    <section id="products" className="grain scroll-mt-18 bg-warm-white py-16 lg:py-24">
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

        <ol className="mt-12 border-b border-ink/80">
          {productGroups.map((group, i) => (
            <li
              key={group.id}
              id={group.id}
              className="grid scroll-mt-24 gap-6 border-t border-ink/80 py-8 lg:grid-cols-12 lg:gap-8"
            >
              <span className="font-mono text-sm text-muted lg:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="font-condensed text-5xl text-forest sm:text-6xl lg:col-span-3">
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

              <div className="grid gap-3 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
                {group.images.map((image) => (
                  <div
                    key={image.src}
                    className={
                      group.images.length > 1
                        ? "relative aspect-[16/9] overflow-hidden rounded-card bg-ivory"
                        : "relative aspect-[16/9] overflow-hidden rounded-card bg-ivory sm:col-span-2 lg:col-span-1"
                    }
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 400px, 90vw"
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
