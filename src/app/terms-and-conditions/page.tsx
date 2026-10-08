import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/legal/LegalPage";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions for using the AMREN Fresh website and the AMREN Fresh wholesale ordering app in the UAE.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated="September 2026">
      <p>
        These Terms & Conditions govern your use of {siteConfig.domain} and the
        AMREN Fresh mobile app, and apply to business customers ordering
        wholesale produce and related products from AMREN Fresh.
      </p>

      <h2>Business Accounts</h2>
      <p>
        Access to ordering, pricing and invoicing features requires a business
        account issued by AMREN Fresh, accessed using a Shop ID and PIN. You are
        responsible for keeping your login details secure.
      </p>

      <h2>Products, Pricing and Availability</h2>
      <p>
        Product availability and wholesale pricing shown in the App reflect
        current conditions and may change. Placing an order does not guarantee
        availability until the order is confirmed.
      </p>

      <h2>Orders and Invoices</h2>
      <p>
        Orders placed through the App may be reviewed and edited prior to
        submission where the App allows. Invoices, including combined daily
        invoices, are made available in the App for download and sharing.
      </p>

      <h2>Website Content</h2>
      <p>
        Content on this Website is provided for general information about
        AMREN Fresh&apos;s business supply and app. It does not constitute a
        binding offer for specific products, prices or delivery terms.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        These Terms may be updated from time to time. Continued use of the
        Website or App after changes take effect constitutes acceptance of the
        updated Terms.
      </p>

      <p className="text-xs text-muted">
        These Terms have not yet been reviewed by a qualified legal professional
        and should be confirmed before relying on them for full legal compliance.
      </p>
    </LegalPage>
  );
}
