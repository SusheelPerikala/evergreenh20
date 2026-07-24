# EvergreenH20 Design System

## Intent

A premium residential water-filtration storefront modeled on Cartage's editorial confidence: cinematic scale, generous white space, restrained typography, and large product stories. EvergreenH20 should feel established, technically trustworthy, and personal—not like a generic ecommerce template or a wellness startup.

## Brand

- Name: **EvergreenH20** (preserve the user's exact spelling).
- Positioning: professional water-filtration expertise for healthier homes.
- Voice: plainspoken, assured, informed, locally accountable.
- Logo direction: a custom CSS/inline-SVG water droplet containing a simple evergreen sprig; no external logo asset.
- Core navigation: Products, In Stock, Reviews, Our Story.
- Primary actions: Browse systems, Find my filter, Talk to an expert.

## Palette

- Evergreen: `#15372F` — primary dark surface, headings, navigation.
- Evergreen deep: `#0B211C` — footer and high-contrast panels.
- Mineral: `#F3F0E7` — warm page canvas.
- Porcelain: `#FCFCF7` — cards and product surfaces.
- Mist: `#DCE8E3` — borders, muted backgrounds, water diagrams.
- Aqua: `#B8E8E4` — hero atmosphere and water demonstrations.
- Spring: `#C8F178` — sparing action and in-stock accent.
- Moss: `#4D6C61` — secondary text.
- Clay: `#D7B69C` — one warm product-story surface.

Spring is reserved for CTAs and in-stock indicators. Aqua supports water imagery but never replaces readable neutral surfaces.

## Typography

- Sans: Arial / Helvetica Neue / Helvetica / system sans-serif.
- Display: 64–118px desktop; weight 400; line-height .88–.94; tracking -0.06em.
- Section statement: 48–88px; weight 400; line-height .92–.98.
- Product title: 28–42px; weight 500; tracking -0.035em.
- Body: 16–20px; line-height 1.5; moss or softened evergreen.
- Eyebrow: 10–12px; weight 800; uppercase; tracking .14em.
- Inventory labels: 10–12px; compact, plain language ("In stock · ships tomorrow", "Low stock · 3 left").

Use scale and spacing for hierarchy. Avoid decorative serif fonts, ultra-light text, or excessive bold weights.

## Page Structure

1. Floating evergreen navigation with logo, product anchors, stock link, reviews, story, and "Shop systems" pill.
2. Cinematic hero: "Better water. Built for your whole home." with two actions and a large CSS-built filtration unit / water-quality diagnostic scene.
3. Trust strip: NSF-style quality language, installation support, shipping, and customer rating (avoid claiming certifications the business has not supplied).
4. Oversized statement introducing expert guidance and cleaner water at every tap.
5. Product collection with four real categories and visible stock levels:
   - Whole Home Carbon System
   - Under-Sink Reverse Osmosis
   - Countertop Mineral Filter
   - Shower & Bath Filter
6. Three alternating education stories: whole-home protection, drinking-water precision, and easy ownership/replacement filters.
7. Customer testimonials with names, locations, purchase type, and star ratings.
8. Founder-led Our Story split section, written in first-person plural and grounded in service.
9. Water guide/editorial band.
10. Dark final consultation CTA and multi-column footer.

## Layout

- Max content width: 1480px.
- Gutters: 16px mobile, 24px tablet, 32–40px desktop.
- Major section padding: 104–168px desktop, 72–96px mobile.
- Use asymmetric 4/8 and 5/7 grids plus occasional full-width statements.
- Product grid: four cards desktop, two tablet, one mobile.
- Product cards surface inventory status and price/starting price at a glance.
- Maintain the existing alternating story structure and dark split section.
- All decorative product units are CSS and inline SVG; no external photos required.

## Components

### Navigation
Floating rounded evergreen shell. Brand is prominent but compact. A spring CTA anchors the right edge. Native-details menu on mobile.

### Product card
Large visual stage, category, product name, short use case, price, inventory state, and arrow link. Product visuals should look like plausible equipment silhouettes, not placeholder rectangles.

### Stock indicator
Green dot + "In stock" for available items. Amber/outlined treatment for low stock. Never rely on color alone.

### Filtration visual
Use transparent-looking canisters, pipe lines, labeled filtration stages, water-quality values, and subtle animated droplets. Keep technical details plausible but avoid unsupported purification claims.

### Testimonial
Editorial quote card with five-star text alternative, customer name, location, verified-purchase label, and owned product.

### Buttons
Pill radius. Primary spring background with evergreen text; secondary porcelain/translucent with evergreen border. Minimum 44px target.

## Motion

- Water flow / droplet loops: 5–9 seconds, subtle and atmospheric.
- Hover: 180–250ms, small translate or background shift.
- Section content visible by default; no scroll-timeline dependency.
- Honor `prefers-reduced-motion`.

## Accessibility and Content Guardrails

- WCAG AA contrast, visible focus rings, semantic landmarks, ordered headings.
- Real links/buttons; no non-interactive controls pretending to work.
- Keep all product stock data in one source array.
- Do not claim health outcomes, contaminant removal percentages, certifications, warranties, or lab results without user-provided evidence.
- Use "designed to," "helps reduce," or category-level descriptions where needed.
- Decorative visuals are aria-hidden; meaningful stock, product, and testimonial content stays readable text.
