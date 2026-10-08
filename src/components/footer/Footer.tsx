import Image from "next/image";
import Link from "next/link";
import { footerNav, legalNav } from "@/data/navigation";
import { siteConfig, isConfigured } from "@/data/siteConfig";
import { StoreBadges } from "@/components/app/StoreBadges";
import { Container } from "@/components/ui/Container";

const socialLinks = [
  { label: "Instagram", url: siteConfig.INSTAGRAM_URL },
  { label: "Facebook", url: siteConfig.FACEBOOK_URL },
  { label: "LinkedIn", url: siteConfig.LINKEDIN_URL },
  { label: "TikTok", url: siteConfig.TIKTOK_URL },
].filter((link) => isConfigured(link.url));

export function Footer() {
  return (
    <footer className="overflow-hidden bg-forest-darker pt-14 text-paper">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo/amren-fresh-logo-white.svg"
              alt="AMREN Fresh"
              width={160}
              height={35}
              unoptimized
            />
            <p className="mt-4 max-w-xs text-sm text-paper/65">{siteConfig.tagline}</p>

            {socialLinks.length > 0 && (
              <div className="mt-6 flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-paper/65 hover:text-paper"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-xs uppercase text-lime">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-paper/65 hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs uppercase text-lime">App</p>
            <StoreBadges className="mt-4 flex-col items-start" />
          </div>

          <nav aria-label="Legal">
            <p className="font-mono text-xs uppercase text-lime">Legal</p>
            <ul className="mt-4 space-y-2.5">
              {legalNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-paper/65 hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-2 border-t border-paper/10 pt-6 font-mono text-[11px] uppercase text-paper/45">
          <span>© {new Date().getFullYear()} AMREN Fresh. All rights reserved.</span>
          <span>{siteConfig.city}, {siteConfig.country}</span>
        </div>
      </Container>

      <p
        className="mt-6 select-none whitespace-nowrap text-center font-condensed text-[19.5vw] leading-[0.75] text-forest"
        aria-hidden="true"
      >
        AMREN Fresh
      </p>
    </footer>
  );
}
