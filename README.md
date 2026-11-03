# Business Website Demos — One-Page Sites That Load Instantly

A complete one-page business website demo (café example) in hand-coded
HTML/CSS/JS — no framework, no build step, no web-font downloads.
Open `index.html` in a browser and it just works.

## What's inside

- **Semantic, accessible structure** — landmarks (`header/nav/main/footer`),
  skip-to-content link, labelled form fields, visible focus states,
  `aria-live` estimate output, WCAG-AA contrast, `prefers-reduced-motion`
  support
- **Built for Core Web Vitals** — system font stack (zero font downloads),
  one small CSS file, one deferred JS file, lazy-loaded image with fixed
  dimensions (no layout shift)
- **SEO basics done right** — meta description, Open Graph tags, and
  `CafeOrCoffeeShop` JSON-LD structured data
- **Live group-order estimate calculator** — menu rates, per-cup kulhad
  add-on, automatic 5% group discount at 10+ cups, totals formatted in
  Indian numbering (`en-IN`)
- **Enquiry form with real validation** (name, 10-digit phone, message)
  that composes a ready-to-send WhatsApp enquiry link — no backend needed

## Files

```
index.html   page structure + structured data
styles.css   mobile-first styles, focus + reduced-motion rules
script.js    estimate calculator + form validation (no dependencies)
```

## Verify

```bash
node --check script.js   # JS syntax
```

The page markup passes checks for semantic landmarks, skip link,
JSON-LD, labelled fields, lazy image dimensions and live-region output.

## Honest scope

Names, rates and the phone number on the demo page are labelled samples —
on a real client build they are replaced with the client's own details,
photos and menu. "The Chai Corner" is a fictional example business.

## Want one for your business?

Send me your business details or homepage content and I'll build a first
working version of your homepage as a demo — free, before any payment.
— Abhishek
