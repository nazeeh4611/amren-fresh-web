"use client";

import { useEffect, useRef, useState } from "react";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons/ContactIcons";
import { siteConfig, toTelHref, toWhatsAppHref } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

type Action = "whatsapp" | "call";

const actions: Record<Action, { label: string; href: (phone: string) => string; external: boolean }> = {
  whatsapp: { label: "Chat on WhatsApp", href: (phone) => toWhatsAppHref(phone), external: true },
  call: { label: "Call us", href: toTelHref, external: false },
};

/** Floating WhatsApp and call buttons; each opens a picker for the two numbers. */
export function FloatingContact() {
  const [open, setOpen] = useState<Action | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const toggle = (action: Action) => setOpen((current) => (current === action ? null : action));

  return (
    <div ref={rootRef} className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div
          id="floating-contact-panel"
          className="w-64 overflow-hidden rounded-[6px] bg-paper text-ink shadow-lifted"
        >
          <p className="bg-forest-darker px-4 py-2.5 font-mono text-[11px] uppercase text-lime">
            {actions[open].label}
          </p>
          <ul className="divide-y divide-ink/10">
            {siteConfig.CONTACT_PHONES.map((phone) => (
              <li key={phone}>
                <a
                  href={actions[open].href(phone)}
                  {...(actions[open].external && { target: "_blank", rel: "noopener noreferrer" })}
                  onClick={() => setOpen(null)}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold hover:bg-ivory"
                >
                  {open === "whatsapp" ? (
                    <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  ) : (
                    <PhoneIcon className="h-4 w-4 text-forest" />
                  )}
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={() => toggle("call")}
        aria-label="Call AMREN Fresh"
        aria-expanded={open === "call"}
        aria-controls="floating-contact-panel"
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full bg-lime text-forest-darker shadow-lifted transition-transform hover:scale-105",
          open === "call" && "ring-2 ring-paper",
        )}
      >
        <PhoneIcon className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={() => toggle("whatsapp")}
        aria-label="Chat with AMREN Fresh on WhatsApp"
        aria-expanded={open === "whatsapp"}
        aria-controls="floating-contact-panel"
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lifted transition-transform hover:scale-105",
          open === "whatsapp" && "ring-2 ring-paper",
        )}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </button>
    </div>
  );
}
