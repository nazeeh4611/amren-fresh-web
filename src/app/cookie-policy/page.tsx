import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/legal/LegalPage";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How the AMREN Fresh website uses cookies and similar technologies.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updated="September 2026">
      <p>
        This Cookie Policy explains how {siteConfig.domain} uses cookies and
        similar technologies.
      </p>

      <h2>What Are Cookies</h2>
      <p>
        Cookies are small text files stored on your device that help websites
        function correctly and, where applicable, understand how visitors use
        a site.
      </p>

      <h2>How We Use Cookies</h2>
      <ul>
        <li>Essential cookies required for basic site functionality.</li>
        <li>Analytics cookies, where enabled, to understand site usage and improve the Website.</li>
      </ul>

      <h2>Managing Cookies</h2>
      <p>
        Most browsers allow you to control cookies through their settings.
        Disabling certain cookies may affect how parts of the Website function.
      </p>

      <p className="text-xs text-muted">
        This policy has not yet been reviewed by a qualified legal professional
        and should be confirmed before relying on it for full legal compliance.
      </p>
    </LegalPage>
  );
}
