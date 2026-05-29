# Rockautozparts.com — Lead Generation Landing Page

Premium static landing page for a US automotive auto-parts supplier. Built with **Next.js 14 (App Router)**, **JavaScript** (no TypeScript), **SCSS Modules**, and **Framer Motion**.

> This is a **lead generation** landing page — not an ecommerce store. There is no cart, checkout, auth, backend, database, or CMS. The enquiry form is fully client-side and simulates submission with local state.

## Stack

- Next.js 14 (App Router)
- React 18
- JavaScript (no TS)
- SCSS Modules (with shared design tokens + mixins)
- Framer Motion for premium animations
- Inline SVG icons (zero icon-pack dependency)
- Google Fonts: **Oswald** (display) + **Inter** (body)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm run start
```

## Pages

- `/` — Home (full lead-gen landing page)
- `/privacy-policy` — Privacy Policy
- `/terms-conditions` — Terms & Conditions

## Folder Structure

```
src/
  app/
    layout.js                # Root layout + SEO metadata
    page.js                  # Home page
    globals.scss             # Global styles + reusable button classes
    privacy-policy/page.js
    terms-conditions/page.js
  components/
    AnnouncementBar/         # Top strip
    Header/                  # Sticky header + mobile menu
    Hero/                    # Hero section with form
    EnquiryForm/             # Client-side validated form
    WhyChooseUs/             # 4 feature cards
    Categories/              # 6 category cards
    HowItWorks/              # 3-step timeline
    Testimonials/            # Reviews grid
    FinalCTA/                # Bottom conversion banner
    Footer/                  # Footer with contact + links
    MobileCallButton/        # Sticky bottom call CTA (mobile)
    LegalPage/               # Shared legal page layout
    SectionHeading/          # Reusable section heading
    Icon/                    # Inline SVG icon set
  data/
    site.js                  # Business info (phone, email, hours)
    navigation.js            # Primary nav
    features.js              # Why Choose Us cards
    categories.js            # Featured categories
    steps.js                 # How It Works steps
    testimonials.js          # Customer reviews
  styles/
    variables.scss           # Design tokens (colors, type, radii)
    mixins.scss              # Container, breakpoints, glass

public/
  favicon.svg
  robots.txt
```

## Design System

| Token        | Value                                  |
| ------------ | -------------------------------------- |
| Background   | `#0a0a0a` (dark charcoal)              |
| Surfaces     | `#111`, `#161616`, `#1c1c1c`           |
| Accent       | `#ff6b00` → `#ff2e2e` gradient         |
| Text         | `#ffffff` / `#b5b5b5` / `#8a8a8a`      |
| Headings     | Oswald, uppercase, condensed           |
| Body         | Inter                                  |
| Corner radii | 6 / 12 / 18 / 24 / pill                |

Centralized in [src/styles/variables.scss](src/styles/variables.scss).

## Customizing Content

All copy and contact info lives in the [src/data/](src/data/) folder. To rebrand:

1. Update business info in [src/data/site.js](src/data/site.js) — phone, email, address, hours.
2. Update navigation in [src/data/navigation.js](src/data/navigation.js).
3. Update categories, features, steps, testimonials in their respective files in [src/data/](src/data/).
4. Background images use Unsplash URLs in [src/data/categories.js](src/data/categories.js) and [src/components/Hero/Hero.module.scss](src/components/Hero/Hero.module.scss) — swap with your own.

## SEO

- Per-page `metadata` with title templates, OpenGraph, and Twitter cards (see [src/app/layout.js](src/app/layout.js))
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- Single `<h1>` per page, proper H2/H3 hierarchy
- `robots.txt` in `public/`

## Notes

- The form is client-side only — submissions stay in component state and show a success view. Wire to a real endpoint (e.g. a serverless function) when you ship.
- Background images are loaded from Unsplash for demo purposes; for production you should self-host optimized assets in `public/`.
