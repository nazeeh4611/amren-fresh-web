"use client";

import { useState, type FormEvent } from "react";
import { MailIcon, WhatsAppIcon } from "@/components/icons/ContactIcons";
import { siteConfig, toWhatsAppHref } from "@/data/siteConfig";

const businessTypes = [
  "Shop",
  "Supermarket",
  "Restaurant",
  "Cafeteria",
  "Hotel",
  "Catering",
  "Retailer",
  "Other",
];

const fieldClasses =
  "w-full rounded-[3px] border border-ink/15 bg-paper px-3.5 py-3 text-sm text-ink placeholder:text-muted/70 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest";

const fieldLabels: Record<string, string> = {
  name: "Name",
  business: "Business",
  phone: "Phone",
  email: "Email",
  city: "City",
  businessType: "Business type",
  message: "Message",
};

/**
 * There is no form backend: the enquiry is handed to the visitor's email app
 * (addressed to CONTACT_EMAIL) or to WhatsApp, prefilled with every field.
 */
export function ContactForm() {
  const [sentVia, setSentVia] = useState<"email" | "whatsapp" | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const channel = submitter?.value === "whatsapp" ? "whatsapp" : "email";
    const data = new FormData(event.currentTarget);

    const lines = Object.entries(fieldLabels)
      .map(([key, label]) => [label, String(data.get(key) ?? "").trim()] as const)
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`);
    const body = `New trade account enquiry\n\n${lines.join("\n")}`;

    if (channel === "whatsapp") {
      window.open(toWhatsAppHref(siteConfig.CONTACT_PHONES[0], body), "_blank", "noopener,noreferrer");
    } else {
      const subject = `Trade account enquiry: ${String(data.get("business") ?? "").trim()}`;
      window.location.href = `mailto:${siteConfig.CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    setSentVia(channel);
  }

  if (sentVia) {
    return (
      <div className="rounded-card-lg bg-paper px-8 py-14 text-center text-ink shadow-lifted">
        <h3 className="font-condensed text-5xl text-forest">Almost done</h3>
        <p className="mx-auto mt-3 max-w-sm text-muted">
          {sentVia === "whatsapp"
            ? "WhatsApp has opened with your enquiry. Press send there and our team will reply."
            : "Your email app has opened with your enquiry. Press send there and our team will reply."}
        </p>
        <p className="mt-4 text-sm text-muted">
          Nothing opened? Email{" "}
          <a className="font-semibold text-forest underline" href={`mailto:${siteConfig.CONTACT_EMAIL}`}>
            {siteConfig.CONTACT_EMAIL}
          </a>
        </p>
        <button
          type="button"
          onClick={() => setSentVia(null)}
          className="mt-6 text-sm font-semibold text-forest underline"
        >
          Back to the form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-card-lg bg-paper p-6 text-ink shadow-lifted sm:p-9">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-mono text-[11px] uppercase text-muted">
            Name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required className={fieldClasses} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="business" className="mb-1.5 block font-mono text-[11px] uppercase text-muted">
            Business name
          </label>
          <input id="business" name="business" type="text" autoComplete="organization" required className={fieldClasses} placeholder="Business name" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block font-mono text-[11px] uppercase text-muted">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required className={fieldClasses} placeholder="+971" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block font-mono text-[11px] uppercase text-muted">
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={fieldClasses} placeholder="you@business.com" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="city" className="mb-1.5 block font-mono text-[11px] uppercase text-muted">
            City
          </label>
          <input id="city" name="city" type="text" autoComplete="address-level2" required className={fieldClasses} placeholder="e.g. Dubai" />
        </div>
        <div>
          <label htmlFor="businessType" className="mb-1.5 block font-mono text-[11px] uppercase text-muted">
            Business type
          </label>
          <select id="businessType" name="businessType" required className={fieldClasses} defaultValue="">
            <option value="" disabled>
              Select business type
            </option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] uppercase text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className={fieldClasses}
          placeholder="Tell us what you're looking to order"
        />
      </div>

      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          name="channel"
          value="email"
          className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-forest px-6 py-3.5 text-[15px] font-semibold text-paper transition-colors hover:bg-forest-darker"
        >
          <MailIcon className="h-4 w-4" />
          Send by email
        </button>
        <button
          type="submit"
          name="channel"
          value="whatsapp"
          className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-[#25D366] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#1ebe5a]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Send on WhatsApp
        </button>
      </div>
    </form>
  );
}
