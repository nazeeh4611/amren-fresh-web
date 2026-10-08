import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StoreBadges } from "@/components/app/StoreBadges";
import { appFeatureDetails } from "@/data/appFeatureDetails";
import { appLanguages, easeOfUseTraits, howItWorksSteps, invoiceFeatures } from "@/data/appFeatures";

const listFormat = new Intl.ListFormat("en", { type: "conjunction" });

export function AppSection() {
  return (
    <section id="app" className="scroll-mt-18 overflow-hidden bg-lime py-16 text-forest-darker lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <SectionHeading
              title={
                <>
                  Order from
                  <br />
                  your phone
                </>
              }
              description="The AMREN Fresh app lets account holders browse products, check current prices and availability, place wholesale orders and download invoices without calling or messaging for every order."
            />

            <StoreBadges className="mt-8" />
            <p className="mt-4 font-mono text-xs uppercase">
              {listFormat.format(appLanguages)}
            </p>
          </div>

          <div className="flex justify-center gap-2 lg:col-span-6 lg:justify-end">
            <Image
              src="/images/app/app-products.webp"
              alt="AMREN Fresh app product list with search, categories, quantities and order total"
              width={911}
              height={1726}
              sizes="(min-width: 1024px) 260px, 45vw"
              className="h-auto w-[45%] max-w-[260px] -rotate-3 drop-shadow-2xl"
            />
            <Image
              src="/images/app/app-order.webp"
              alt="AMREN Fresh app order review screen with item totals, delivery note and place order button"
              width={902}
              height={1743}
              sizes="(min-width: 1024px) 260px, 45vw"
              className="h-auto w-[45%] max-w-[260px] translate-y-10 rotate-2 drop-shadow-2xl"
            />
          </div>
        </div>

        <ol id="how-it-works" className="mt-20 grid scroll-mt-24 border-t-2 border-forest-darker sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((step, i) => (
            <li
              key={step.step}
              className="border-b border-forest-darker/25 py-6 sm:pr-6 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
            >
              <span className="font-condensed text-6xl">{i + 1}</span>
              <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-forest-darker/75">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h3 className="font-mono text-xs uppercase">What the app does</h3>
            <dl className="mt-5 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {appFeatureDetails.map((feature) => (
                <div key={feature.title} className="border-t border-forest-darker/25 pt-3">
                  <dt className="font-bold">{feature.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-forest-darker/75">{feature.description}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-forest-darker/75">
              Designed with {listFormat.format(easeOfUseTraits.map((t) => t.toLowerCase()))}, so it
              is comfortable to use even for shop owners who are less familiar with smartphones.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm rotate-1 bg-paper px-7 pb-8 pt-7 font-mono text-xs text-ink shadow-lifted">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-condensed text-3xl text-forest">Daily invoice</p>
                  <p className="mt-1 uppercase text-muted">AMREN Fresh · Dubai</p>
                </div>
                <InvoiceStamp />
              </div>

              <p className="mt-5 border-y border-dashed border-ink/40 py-3 leading-relaxed">
                Orders placed on the same day are combined into one invoice.
              </p>

              <ul className="mt-3 space-y-2.5">
                {invoiceFeatures.map((item) => (
                  <li key={item} className="flex items-baseline gap-2 uppercase">
                    <span>{item}</span>
                    <span className="flex-1 border-b border-dotted border-ink/40" aria-hidden="true" />
                    <span className="text-forest">Incl.</span>
                  </li>
                ))}
              </ul>

              <div
                className="absolute inset-x-0 -bottom-2 h-2 bg-[radial-gradient(circle_at_6px_0,transparent_6px,var(--color-paper)_6.5px)] bg-[length:12px_8px]"
                aria-hidden="true"
              />
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}

function InvoiceStamp() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-12 text-tomato" aria-hidden="true">
      <circle cx="32" cy="32" r="29" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="32" r="23" fill="none" stroke="currentColor" strokeWidth="1" />
      <text x="32" y="30" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor" fontFamily="var(--font-mono)">
        PDF
      </text>
      <text x="32" y="41" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="var(--font-mono)">
        SHARE
      </text>
    </svg>
  );
}
