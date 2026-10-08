import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main-content" className="bg-[#0a2c18] py-24 text-paper lg:py-32">
      <Container>
        <p className="font-mono text-xs uppercase text-lime">Error 404</p>
        <h1 className="mt-4 font-condensed text-[clamp(4rem,12vw,9rem)]">
          Out of
          <br />
          <span className="text-lime">stock.</span>
        </h1>
        <p className="mt-8 max-w-md text-lg text-paper/75">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/" variant="leaf" size="lg">
            Back to home
          </Button>
          <Button href="/#contact" variant="ghost" size="lg">
            Contact us
          </Button>
        </div>
      </Container>
    </main>
  );
}
