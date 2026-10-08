import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/legal/LegalPage";
import { siteConfig, isConfigured } from "@/data/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How AMREN Fresh collects, uses and protects information from the website, contact enquiries and the AMREN Fresh ordering app.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="September 2026">
      <p>
        This Privacy Policy explains how AMREN Fresh (&quot;AMREN Fresh&quot;, &quot;we&quot;, &quot;us&quot;)
        handles information collected through {siteConfig.domain} (the &quot;Website&quot;) and the
        AMREN Fresh mobile app (the &quot;App&quot;).
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Business enquiry details you send us by email, phone or WhatsApp, including enquiries prepared with the contact form on the Website, such as name, business name, phone, email, city, business type and message.</li>
        <li>Account details used to access the App, such as Shop ID and PIN, provided when a business account is set up.</li>
        <li>Order, quantity, unit and invoice information generated when you place orders through the App.</li>
        <li>Standard technical information such as browser type and device information, collected automatically when you use the Website.</li>
      </ul>

      <h2>How We Use Information</h2>
      <ul>
        <li>To respond to business enquiries.</li>
        <li>To provide access to the App and process orders and invoices.</li>
        <li>To maintain order history and invoice records for your business account.</li>
        <li>To operate, maintain and improve the Website and App.</li>
      </ul>

      <h2>Sharing of Information</h2>
      <p>
        We do not sell personal information. Information may be shared with service
        providers that help us operate the Website and App, or where required by law.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain business account, order and invoice information for as long as
        needed to provide the App and to meet legal and accounting requirements.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about this Privacy Policy,
        {isConfigured(siteConfig.CONTACT_EMAIL)
          ? <> contact us at <a className="text-forest underline" href={`mailto:${siteConfig.CONTACT_EMAIL}`}>{siteConfig.CONTACT_EMAIL}</a>.</>
          : <> use the contact form on the Website.</>}
      </p>

      <p className="text-xs text-muted">
        This policy has not yet been reviewed by a qualified legal professional and
        should be confirmed before relying on it for full legal compliance.
      </p>
    </LegalPage>
  );
}
