"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-ink/15 border-b border-ink/80">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
              >
                <span className="flex gap-4">
                  <span className="w-7 shrink-0 pt-0.5 font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-base font-semibold text-ink">{item.question}</span>
                </span>
                <span
                  className={cn(
                    "shrink-0 text-forest transition-transform duration-200",
                    open && "rotate-45",
                  )}
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              className={cn("grid transition-all duration-300", open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]")}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pl-11 text-sm leading-relaxed text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
