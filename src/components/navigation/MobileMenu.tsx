"use client";

import Link from "next/link";
import { primaryNav } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      id="mobile-menu"
      className={cn(
        "fixed inset-0 top-18 z-40 bg-forest-darker transition-transform duration-300 lg:hidden",
        open ? "visible translate-x-0" : "invisible translate-x-full",
      )}
      aria-hidden={!open}
    >
      <nav aria-label="Mobile" className="flex h-full flex-col justify-between px-8 py-10">
        <ul className="flex flex-col gap-2">
          {primaryNav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block border-b border-paper/10 py-4 font-condensed text-4xl text-paper"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button href="#contact" variant="leaf" size="lg" className="w-full">
          Contact us
        </Button>
      </nav>
    </div>
  );
}
