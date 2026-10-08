import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProduceTicker } from "@/components/hero/ProduceTicker";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a2c18] text-paper">
      <div className="relative">
        <Container className="relative z-10">
          <div className="py-12 lg:flex lg:min-h-[min(calc(100svh-8.75rem),860px)] lg:items-center lg:py-20">
            <div className="lg:w-[44%]">
              <p className="font-condensed text-[clamp(4.5rem,11vw,10.5rem)]">
                Fresh
                <br />
                by the
                <br />
                <span className="text-lime">box.</span>
              </p>

              <h1 className="mt-10 max-w-md text-lg font-normal leading-relaxed text-paper/80">
                Wholesale fruits, vegetables, prepared produce and plastic products for
                shops, supermarkets, restaurants and kitchens across the UAE.
              </h1>

              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                <Button href="/#contact" variant="leaf" size="lg">
                  Open a trade account
                </Button>
                <Button href="/#products" variant="ghost" size="lg">
                  See the range
                </Button>
              </div>
            </div>
          </div>
        </Container>

        {/* Full-bleed artwork pinned to the right and bottom edges on desktop. */}
        <div className="relative aspect-[1006/834] w-full lg:absolute lg:inset-y-0 lg:left-auto lg:right-0 lg:aspect-auto lg:w-[58%]">
          <Image
            src="/images/hero/fresh-produce-wholesale-supply-uae-hero.webp"
            alt="Box of fresh fruit and vegetables representing AMREN Fresh wholesale supply"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-left-bottom"
          />
          <div
            className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-[#0a2c18] to-transparent lg:block"
            aria-hidden="true"
          />
        </div>
      </div>

      <ProduceTicker />
    </section>
  );
}
