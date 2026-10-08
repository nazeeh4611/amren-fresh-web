import { Container } from "@/components/ui/Container";
import { StoreBadges } from "@/components/app/StoreBadges";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig, isConfigured } from "@/data/siteConfig";

export function ContactSection() {
  const details = [
    { label: "Location", value: `${siteConfig.city}, ${siteConfig.country}` },
    isConfigured(siteConfig.CONTACT_EMAIL) && {
      label: "Email",
      value: siteConfig.CONTACT_EMAIL,
      href: `mailto:${siteConfig.CONTACT_EMAIL}`,
    },
    isConfigured(siteConfig.CONTACT_PHONE) && {
      label: "Phone",
      value: siteConfig.CONTACT_PHONE,
      href: `tel:${siteConfig.CONTACT_PHONE}`,
    },
  ].filter(Boolean) as { label: string; value: string; href?: string }[];

  return (
    <section id="contact" className="scroll-mt-18 bg-forest py-16 text-paper lg:py-24">
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

            <dl className="mt-10 border-t border-paper/15">
              {details.map((detail) => (
                <div key={detail.label} className="flex justify-between gap-6 border-b border-paper/15 py-3">
                  <dt className="font-mono text-xs uppercase text-paper/55">{detail.label}</dt>
                  <dd className="text-sm">
                    {detail.href ? (
                      <a href={detail.href} className="hover:text-lime">
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

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
