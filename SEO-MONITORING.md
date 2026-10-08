# SEO Monitoring — AMREN Fresh

Ongoing tracking plan for `https://fresh.amren.ae/`. Pair this with Google
Search Console (see `SEO-SEARCH-CONSOLE-CHECKLIST.md`) and off-page activity
(see `SEO-OFF-PAGE-PLAN.md`).

## Metrics to Track

### Search Performance (Google Search Console)

- Organic clicks (total, and by query segment below)
- Impressions
- Click-through rate (CTR)
- Average position
- Indexed pages count vs. submitted sitemap count

### Core Web Vitals

- Largest Contentful Paint (LCP) — target under 2.5s
- Interaction to Next Paint (INP)
- Cumulative Layout Shift (CLS)
- Track both mobile and desktop, since most shop owners visit on mobile

### Query Segments to Track Separately

| Segment | Example queries |
|---|---|
| Branded | "AMREN Fresh", "AMREN Fresh UAE", "AMREN Fresh app" |
| Fruit keywords | "fresh fruits supplier UAE", "fruit wholesale UAE", "fruit supplier Dubai" |
| Vegetable keywords | "fresh vegetables supplier UAE", "vegetable wholesale UAE", "vegetable supplier Dubai" |
| Wholesale / B2B keywords | "B2B fruit supplier UAE", "B2B vegetable supplier UAE", "wholesale produce supplier UAE" |
| Plastic product keywords | "plastic products supplier UAE", "plastic products wholesale UAE" |
| App-related keywords | "fresh produce ordering app UAE", "wholesale ordering app UAE", "shop ordering app UAE" |
| Local / city keywords | queries containing "Dubai", "UAE", or other emirates once relevant landing pages exist |

### Local SEO Signals

- Google Business Profile: views, searches, calls/clicks, direction requests
  (once a profile exists — see `SEO-OFF-PAGE-PLAN.md`)
- Citation consistency across listed directories
- Reviews volume and rating trend (organic only — never incentivized)

### App-Related Search Visibility

- Branded app query impressions/clicks ("AMREN Fresh app", "AMREN Fresh
  ordering app")
- Referral traffic from the website to the App Store listing (once
  `APP_STORE_URL` is live) — track via UTM parameters or App Store Connect if
  available

## Reporting Cadence

- **Weekly** (first 3 months post-launch): clicks, impressions, indexing
  status, Core Web Vitals
- **Monthly** (ongoing): full query segment review, Core Web Vitals trend,
  local search signals, backlink growth from off-page activity
- **Quarterly**: full content review — confirm no claims have drifted from
  what is factually accurate (pricing, coverage, features), review keyword
  segment performance against the off-page plan's priorities

## Tooling

- Google Search Console — primary source for query and indexing data
- Bing Webmaster Tools — secondary search engine coverage
- Lighthouse / PageSpeed Insights — performance, accessibility, SEO, best
  practices audits (target: Performance 90+, SEO 95+, Accessibility 95+, Best
  Practices 95+)
- Google Business Profile Insights — once the profile is live

## Notes on Data Integrity

- Do not report vanity metrics (e.g. raw pageviews) as SEO success on their
  own — always pair with query-level and conversion-relevant data (inquiry
  form submissions, app CTA clicks)
- Do not publish or act on any statistic externally until it is confirmed
  from the actual data source — this document defines *what* to track, not
  placeholder numbers to reuse
