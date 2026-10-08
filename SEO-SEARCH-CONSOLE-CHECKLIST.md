# Google Search Console Checklist — AMREN Fresh

Property: `https://fresh.amren.ae/`

## Initial Setup

- [ ] Verify the domain property `fresh.amren.ae` (DNS verification preferred
  so both `https://fresh.amren.ae/` and any future subpaths are covered)
- [ ] Confirm the canonical, HTTPS version of the URL is what gets indexed
  (`https://fresh.amren.ae/`, not the `http://` or `www.` variant)
- [ ] Submit the sitemap: `https://fresh.amren.ae/sitemap.xml`
- [ ] Inspect the homepage URL with the URL Inspection tool
- [ ] Request indexing for the homepage after the first deploy
- [ ] Request indexing again after any major content/structure change

## Indexing Monitoring

- [ ] Check the **Pages** report weekly during the first month post-launch
- [ ] Confirm the homepage and legal pages (`/privacy-policy`,
  `/terms-and-conditions`, `/cookie-policy`) are indexed
- [ ] Watch for "Discovered — currently not indexed" or "Crawled — currently
  not indexed" and investigate if the homepage is affected
- [ ] Re-check indexing after future SEO landing pages (`/fruits`,
  `/vegetables`, `/dubai`, etc.) are added

## Core Web Vitals & Experience

- [ ] Monitor the **Core Web Vitals** report (mobile and desktop) for LCP,
  INP and CLS
- [ ] Monitor **Mobile Usability** report — this site is mobile-first for shop
  owners, so treat any mobile usability issue as high priority
- [ ] Cross-check field data here against local Lighthouse runs

## Structured Data & Enhancements

- [ ] Confirm the **FAQ** rich result is eligible under the **Enhancements**
  report (Google may restrict FAQ rich results to certain site types over
  time — verify current eligibility before assuming display)
- [ ] Confirm **Organization** / **WebSite** structured data has no errors
  under Enhancements or the Rich Results Test
- [ ] Re-validate structured data any time FAQ content or Organization details
  change

## Search Performance

- [ ] Monitor **Search Results** (clicks, impressions, CTR, average position)
  weekly
- [ ] Segment by query to separate:
  - Branded queries ("AMREN Fresh", "AMREN Fresh app")
  - Non-branded product queries ("fresh fruits supplier UAE", "vegetable
    wholesale Dubai", etc.)
  - App-intent queries ("wholesale ordering app UAE")
- [ ] Segment by page once additional SEO landing pages exist

## Manual Actions & Security

- [ ] Check **Manual Actions** report monthly — should remain "No issues
  detected"
- [ ] Check **Security Issues** report monthly — should remain "No issues
  detected"

## Links

- [ ] Monitor the **Links** report for new referring domains as off-page work
  (see `SEO-OFF-PAGE-PLAN.md`) goes live
- [ ] Watch for any unnatural/spammy inbound links and disavow only if a real
  pattern of harmful links is confirmed

## Ongoing Cadence

- Weekly (first 3 months): indexing, performance, mobile usability
- Monthly (ongoing): manual actions, security issues, Core Web Vitals, links
- After every content change: re-inspect and request re-indexing of affected
  URLs

---

# Bing Webmaster Tools Checklist

- [ ] Verify the domain `fresh.amren.ae` (import from Google Search Console
  is available and is the fastest path)
- [ ] Submit the sitemap: `https://fresh.amren.ae/sitemap.xml`
- [ ] Use URL Inspection to check the homepage is crawlable and indexed
- [ ] Review the **SEO Reports** tool for on-page issues (titles, meta
  descriptions, alt text) and address any flagged items
- [ ] Monitor the **Site Scan** and **Backlinks** reports periodically
- [ ] Re-submit the sitemap after major structural changes (e.g. new SEO
  landing pages)
