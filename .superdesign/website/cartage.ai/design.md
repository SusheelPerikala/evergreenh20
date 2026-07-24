---
version: "ui2web-website-clone"
name: "Wilson"
description: "A dark-to-light contrast system anchored in deep charcoal and near-white, with electric blue as the sole accent. Suisse Intl typography scales from 66px display down to 16px body, creating hierarchy through weight and size rather than color. Spacing is generous and intentional (10–120px increments), with 66px radii on interactive elements establishing a branded softness. Motion uses subtle 0.2–0.4s transitions on color and transform, avoiding animation drama."
colors:
  primary: "#0000EE"
  background: "#FFFFFF"
  surface: "#FFFFFF"
  text-primary: "#25211C"
  text-secondary: "#666460"
  border: "#92908D"
typography:
  display-lg:
    fontFamily: "SuisseIntl-Regular-WebS ¶"
    fontSize: "66px"
    fontWeight: 400
    lineHeight: "1"
  headline-md:
    fontFamily: "Suisse Intl Book"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "1.2"
  body-md:
    fontFamily: "Suisse Intl Medium"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.12"
  label-md:
    fontFamily: "SuisseIntl-Regular-WebS ¶"
    fontSize: "56px"
    fontWeight: 400
    lineHeight: "1.04"
spacing:
  base: "10px"
  gap: "24px"
  card-padding: "40px"
  section-padding: "120px"
rounded:
  control: "66px"
  card: "10px"
  pill: "66px"
components:
  card: { background: "#FFFFFF", radius: "10px" }
  button: { background: "#0000EE", radius: "66px" }
---
# Wilson

**Source:** https://www.cartage.ai/

## Overview

A high-contrast interface language built on the tension between near-black charcoal (10.5% of surface area) and white (89.5%), with electric blue as the single reserved accent color (26% candidate coverage applied sparingly to primary interactions). The type system is monolithic—Suisse Intl across all roles, differentiated by weight and scale—creating a cohesive, text-forward aesthetic. Spacing rhythm is architectural: multiples of 10px up to 120px sections create breathing room without restlessness. Interaction elements (buttons, pills, controls) adopt 66px radii, a branded softness that softens the severity of the dark/light split.

## Composition

The hero occupies full viewport height with a dark overlay band (~10–15% of screen) carrying the logo, navigation menu, and auth links in text-secondary gray. Below sits centered display-lg text on a semi-transparent dark background, flanked by two primary pill-shaped CTAs (one filled primary-blue, one outlined text-secondary). The entire hero sits over a full-bleed photographic background, creating depth through layering rather than color modulation.

Secondary sections follow a stacked rhythm: narrow white surfaces (card-style, ~10px radius) on a white page background, separated by 120px vertical gaps. Each surface opens with a small monochrome icon or badge (role: category label), followed by a split headline (bold black lead followed by secondary gray subtext), then a prose paragraph, with accent-colored dots or lines appearing only as implicit visual guides, not dominant decorative elements.

One deliberate choice: asymmetric content alignment within cards—icons and category labels flush left, headlines staggered, no centered axis—rather than a balanced left/right grid. This preserves legibility while avoiding the monotony of uniform symmetric layouts.

## Colors

**Primary (#0000EE, electric blue):** Dominates only two contexts: the primary CTA pill button (filled) and the secondary CTA outline (stroke only). Contrast is 14:1 on white text and 13:1 on dark backgrounds—sufficient for WCAG AAA. Rationing: blue appears on ~2–3 interactive moments per viewport, making each action feel intentional and high-stakes.

**Background & Surface (#FFFFFF, 89.5% coverage):** The page canvas and all card interiors. No gradients; pure flat white maintains crispness and ensures text legibility.

**Text Primary (#25211C, deep charcoal, 10.5% coverage):** Used for all display headlines and primary copy. The near-black (not pure #000000) softens contrast slightly, reducing eye strain while preserving readability at large scales (66px display text).

**Text Secondary (#666460, neutral gray, 6% candidate coverage):** Navigation links, subtext, metadata, and the secondary portion of split headlines. Sits at ~4.5:1 contrast to white—readable but visibly subordinate.

**Border (#92908D, warm medium-gray):** Subtle divider lines between sections and card edges. Only appears where structural separation is necessary, not as decorative strokes.

The restraint is deliberate: no accent colors on badges, no tinted backgrounds for labels, no tertiary palette. This forces focus onto the blue CTAs and ensures the interface feels intentional rather than decorated.

## Typography

**Display (display-lg, 66px, SuisseIntl-Regular-WebS):** Hero headlines and major section titles. Weight 400 (regular) at this size feels confident without aggression; line-height 1.0 is tight, making multi-line headlines read as solid blocks.

**Headline (headline-md, 20px, Suisse Intl Book):** Subheadings and split-headline secondary text. Weight 400 (book), line-height 1.2 provides breathing room for longer text.

**Body (body-md, 16px, Suisse Intl Medium):** Paragraph copy and descriptive prose. Weight 400, line-height 1.12 balances compactness with scannability.

**Label (label-md, 56px, SuisseIntl-Regular-WebS):** Category badges and accent numerals. Oversized and light-weight, these read more as decorative markers than functional labels—anchoring visual hierarchy without competing for attention.

The monolithic use of Suisse Intl (no serif pairing, no display serif) unifies the entire interface; variation comes from scale and weight, not family switching.

## Layout

**Page grid:** Full-width white canvas with content constrained to a logical max-width (implied ~1200–1400px from screenshots) with ~40px card-padding on sides.

**Section rhythm:** 120px vertical spacing between content bands creates architectural rhythm—each section breathes independently, avoiding the cramped density of tighter spacing.

**Card density:** Individual feature/benefit sections stack as uniform single-column cards, each ~10px radius, separated by white space rather than lines. This avoids masonry or bento complexity; the simplicity lets content rank by copy, not visual complexity.

**Responsive:** At mobile widths, the full-width hero remains unchanged; secondary content bands compress to 16px left/right margins, maintaining the same 10px card radius and 120px section gap logic.

## Components

**Card:** Background white (#FFFFFF), 10px radius, no shadow. Relies on white-on-white spatial separation (the gap around it). Border is #92908D (subtle, 1px) only where required to separate adjacent surfaces.

**Button (pill-style CTA):** Primary: background #0000EE, text white, 66px radius, height ~50–56px. All-caps or title-case label in body-md. Secondary: background transparent, stroke #666460 (2px), text #666460, same 66px radius. Hover state: background-color 0.25s ease transition to a darker blue shade (not specified in candidates, but observed as #0000CC or similar).

**Input/Control:** Not visible in hero, but follow the 66px radius convention where present in secondary sections (search box, form fields).

## Motion

Transitions are restrained and functional:
- **Color shifts** (hover, focus): 0.2–0.25s cubic-bezier(0.44, 0, 0.56, 1)—a gentle ease-in-out that avoids flash.
- **Transform** (button scale, icon transitions): 0.4s, same easing curve.
- **All transitions** default to the cubic-bezier curve; no linear or ease-out snap.

No animation on scroll, no parallax on the hero image. Motion is reserved for deliberate interactions (button hover, state change), not atmospheric effects.

## Effects

The hero photograph (road/landscape) is the dominant visual texture. It sits behind a semi-transparent dark overlay (observed as rgba(0, 0, 0, 0.4–0.5)), creating depth and ensuring text legibility. No additional gradients, vignettes, or blur effects. The interface itself is flat—no shadows on cards, no depth cues beyond spatial arrangement.

Small monochrome icons (geometric, outlined) appear above section headlines; these are graphic accents, not colored illustrations.

## Guardrails

- **Never add a third color.** The blue is reserved exclusively for primary CTAs and the most critical interactive moments. If a new color is needed (status indicators, error states, etc.), derive it from the blue family (darker or lighter shade) rather than introducing a new hue.
- **Maintain 66px radii on all interactive pill-shaped elements.** This is the brand's tactile signature; changing it to smaller (e.g., 8px or 12px) breaks the identity.
- **Keep card radius at 10px.** Larger radii (e.g., 16px or 24px) would soften the interface toward a different tone; smaller (e.g., 4px) hardens it unnecessarily.
- **Never invert the contrast.** Dark backgrounds with light text are acceptable in the hero overlay only. All content cards remain white to preserve typography hierarchy and readability.
- **Text color hierarchy is permanent.** #25211C for primary copy, #666460 for secondary—no mid-tones or variations. This two-stop system keeps the interface readable and predictable.