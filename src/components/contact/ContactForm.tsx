"use client";

import { useState, type FormEvent } from "react";

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

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  // NOTE: wire this handler to a real submission endpoint (API route + email
  // service, or CRM webhook) once one is available. It currently only
  // confirms the inquiry locally.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-card-lg bg-paper px-8 py-14 text-center text-ink shadow-lifted">
        <h3 className="font-condensed text-5xl text-forest">Thank you</h3>
        <p className="mt-2 text-muted">
          Your inquiry has been received. The AMREN Fresh team will get back to you.
        </p>
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
          <input id="name" name="name" type="text" required className={fieldClasses} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="business" className="mb-1.5 block font-mono text-[11px] uppercase text-muted">
            Business name
          </label>
          <input id="business" name="business" type="text" required className={fieldClasses} placeholder="Business name" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block font-mono text-[11px] uppercase text-muted">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className={fieldClasses} placeholder="+971" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block font-mono text-[11px] uppercase text-muted">
            Email
          </label>
          <input id="email" name="email" type="email" required className={fieldClasses} placeholder="you@business.com" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="city" className="mb-1.5 block font-mono text-[11px] uppercase text-muted">
            City
          </label>
          <input id="city" name="city" type="text" required className={fieldClasses} placeholder="e.g. Dubai" />
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

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-[3px] bg-forest px-6 py-3.5 text-[15px] font-semibold text-paper transition-colors hover:bg-forest-darker sm:justify-self-start"
      >
        Send enquiry
      </button>
    </form>
  );
}
