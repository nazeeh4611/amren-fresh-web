import { Container } from "@/components/ui/Container";
import { StoreBadges } from "@/components/app/StoreBadges";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactLinks } from "@/components/contact/ContactLinks";
import { siteConfig } from "@/data/siteConfig";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-18 lg:scroll-mt-20 bg-forest py-16 text-paper lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col lg:col-span-5">
            <h2 className="font-condensed text-6xl sm:text-7xl lg:text-8xl">
              Open a
              <br />
              <span className="text-lime">trade account</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/75">
              Tell us about your business and what you need. Our team will get back to you
              to discuss supply and set up your account.
            </p>

            <ContactLinks className="mt-10" />
            <p className="mt-3 font-mono text-xs uppercase text-paper/55">
              {siteConfig.city}, {siteConfig.country}
            </p>

            <div className="mt-10 lg:mt-auto lg:pt-10">
              <p className="text-sm text-paper/75">
                Already a customer? Place orders and manage invoices in the app.
              </p>
              <StoreBadges className="mt-4" />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
