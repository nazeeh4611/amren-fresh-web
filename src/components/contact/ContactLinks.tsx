import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons/ContactIcons";
import { siteConfig, toTelHref, toWhatsAppHref } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

const iconButton =
  "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px] border transition-colors";

/** Phone numbers (call + WhatsApp) and email, for use on dark green backgrounds. */
export function ContactLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("divide-y divide-paper/15 border-y border-paper/15", className)}>
      {siteConfig.CONTACT_PHONES.map((phone) => (
        <li key={phone} className="flex items-center justify-between gap-4 py-3">
          <a href={toTelHref(phone)} className="flex min-w-0 items-center gap-3 hover:text-lime">
            <PhoneIcon className="h-4 w-4 shrink-0 text-lime" />
            <span className="whitespace-nowrap text-base font-semibold tracking-tight">{phone}</span>
          </a>
          <div className="flex gap-2">
            <a
              href={toTelHref(phone)}
              aria-label={`Call ${phone}`}
              className={cn(iconButton, "border-paper/25 text-paper hover:border-paper")}
            >
              <PhoneIcon className="h-4 w-4" />
            </a>
            <a
              href={toWhatsAppHref(phone)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${phone}`}
              className={cn(iconButton, "border-[#25D366] bg-[#25D366] text-white hover:bg-[#1ebe5a]")}
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </li>
      ))}
      <li className="py-3">
        <a
          href={`mailto:${siteConfig.CONTACT_EMAIL}`}
          className="flex items-center gap-3 text-base font-semibold tracking-tight hover:text-lime"
        >
          <MailIcon className="h-4 w-4 shrink-0 text-lime" />
          {siteConfig.CONTACT_EMAIL}
        </a>
      </li>
    </ul>
  );
}
