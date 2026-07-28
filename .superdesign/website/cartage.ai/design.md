---
version: "ui2web-website-clone"
name: "Wilson"
description: "A high-contrast interface system pairing deep charcoal text with near-white backgrounds, anchored by a single accent blue used sparingly on interactive elements. Suisse Intl's measured weight hierarchy structures the layout across display, headline, and body roles. Spacing and rounded corners remain restrained—tight baselines, minimal padding, sharp or moderately rounded controls—creating density and intentionality."
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
  gap: "16px"
  card-padding: "24px"
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

Source: https://www.cartage.ai/

## Overview

The visual identity balances austere restraint with deliberate moments of color. A monochromatic foundation (white, charcoal, warm grays) is interrupted by electric blue—deployed only on primary CTAs and active states, forcing focus. Suisse Intl's consistent weight (400/medium) across all roles avoids hierarchy bloat; scale and color carry the emphasis. The layout is tight and economical: narrow line heights, compressed spacing, pill-shaped buttons with 66px radius that dominate as focal points.

## Composition

The hero features a full-bleed photograph background layered beneath transparent white text; two primary CTA pills sit side-by-side, one solid blue-filled, one bordered. Below, a three-column section with an illustrated icon (top-left), a headline in bold italic serif-like presentation, and three equal-width cards with category labels and body copy. This arrangement rejects the centered hero–image split; instead, it favors a left-aligned, stacked layout where the photograph bleeds as context, not content. Section category labels appear above hero copy in a label-md size, gray tone.

## Colors

**Primary (#0000EE):** Electric blue, occupying ~26% of the candidate distribution, reserved exclusively for the filled primary CTA pill and hover states on secondary pills (border blue on outline buttons). This restraint makes the blue read as urgent action, not ambient decor.

**Background & Surface (#FFFFFF):** Combined 89.5% coverage—the dominant neutral. All content surfaces, the body background, and card interiors are white, establishing maximum contrast for text legibility.

**Text-primary (#25211C):** Deep charcoal, 10.5% coverage. All headlines, body text, and UI labels use this tone. Its slight warmth (not pure black) softens the contrast just enough to avoid harshness while maintaining readability.

**Text-secondary (#666460):** Mid-gray, used for supporting text, subheadings, and disabled states. Approximately 29% of the gray candidates; it sits between primary text and borders.

**Border (#92908D):** Light taupe-gray, ~6% distribution. Appears on outline button strokes, card dividers, and section lines. Its subtlety ensures borders don't compete with content.

The color logic inverts typical hierarchy: spending the accent (blue) on one high-stakes button, then leaning on a vast neutral field and warm-gray accents, ensures every blue pixel commands attention. No secondary accent colors; no gradients.

## Typography

**Pairing:** Suisse Intl is the sole family, weight-modulated by role. All weights are 400 (regular) or medium (body-md); this uniformity prevents fussy variety. Display-lg (66px) anchors heroes; headline-md (20px) labels sections; body-md (16px) carries narrative; label-md (56px) emphasizes category or metric callouts.

**Hierarchy logic:** Size and weight do minimal work—almost all roles share weight 400. Contrast comes from scale (66px vs. 16px), color (bold charcoal vs. gray), and layout position. This restraint keeps the system calm and readable.

## Layout

**Spacing rhythm:** Base unit is 10px. Cards use 24px internal padding; sections bleed to 120px vertical separation. Gaps between inline elements are 16px. This tight grid avoids breathing room; density is intentional, reading as efficient.

**Grid type:** The three-column section below the hero is uniform—three equal-width cards, no nesting. The layout stacks vertically on mobile (single column). No masonry or bento; symmetry reinforces stability.

**Max-width:** Hero runs full-viewport; content sections constrain to a readable line length (inferred ~1100px) centered or left-aligned. Margins are large relative to the grid: the white space around the layout is the breathing room, not within cards.

**Card density:** Each card is a simple vertical stack (icon, label, headline, body). No layered information; every element has role clarity. Padding is consistent (24px).

## Components

**Card:** White background (#FFFFFF), 10px radius corners, no shadow (line or fill uses borders only). Internal padding 24px. Border above or below at #92908D for section separation.

**Button:** Solid fill uses #0000EE (primary CTA); outline uses transparent background with #0000EE 2px stroke. Radius 66px (full pill). Padding scales to ~16px horizontal on label-md text, taller than typical. Hover: outline button fills with #0000EE background, text inverts to white (0.25s background-color transition). Active/focus: slight scale or underline glow is omitted—no extra chrome.

**Input/textarea:** Inferred from button logic—border #92908D, 10px radius, white fill, focus state adds a 2px #0000EE border (0.25s transition).

## Motion

**Transitions:** All state changes use `all · transform 0.4s` for spatial moves, `background-color 0.25s` for fill changes, and `color 0.2s cubic-bezier(0.44, 0, 0.56, 1)` for text shifts. Easing favors a gentle ease-in-out curve (0.44, 0, 0.56, 1); no bounce or overshoot. Hover effects on buttons are subtle: outline → fill is a color shift, no scale.

**Scroll animations:** None visible; layout is static. Interaction is instantaneous (hover, focus, click).

## Effects

**Photography:** Hero background is a full-bleed photograph (logistics/industry scene) with a semi-transparent dark overlay (inferred ~40% opacity black or dark blue) to ensure text legibility. No filter or color-cast; the image is documentary.

**Illustration:** A minimal isometric icon (a cube, black and white line art) sits top-left of the feature section. No gradient or shadow; clean vector style.

**No gradients, no shadows** on cards or buttons—only clean strokes and fills. Surfaces sit on the baseline; depth comes from layout position, not z-order rendering.

## Guardrails

- **Do not introduce secondary colors.** Blue is the sole accent; grays and white are the frame. Any new color feels off-brand.
- **Maintain the 66px pill radius on all CTAs.** This is the signature button form; altering it diminishes recognizability.
- **Never set text lighter than #666460 (text-secondary).** Contrast must remain accessible; grays below this threshold sacrifice readability.
- **Keep spacing at defined intervals (10px, 16px, 24px, 120px only).** Arbitrary spacing breaks the grid logic.
- **Preserve line-height ratios exactly (1.0, 1.04, 1.12, 1.2).** They are measured for Suisse Intl's proportions; any change breaks rhythm.