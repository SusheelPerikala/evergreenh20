# Extractable Components

## Header
- Source: `src/app/page.tsx`
- Category: layout
- Description: Floating pill navigation with brand, anchors, CTA, and native-details mobile menu.
- Extractable props: none in current implementation
- Hardcoded: menu labels, anchor URLs, logo mark, CSS classes

## Footer
- Source: `src/app/page.tsx`
- Category: layout
- Description: Brand statement, three link groups, and legal bottom bar.
- Extractable props: none in current implementation
- Hardcoded: link labels and URLs, logo mark, legal text

## BrandMark
- Source: `src/components/icon.tsx`
- Category: basic
- Description: Three-bar geometric brand glyph used throughout the page.
- Extractable props: none
- Hardcoded: SVG-like CSS structure and styling

## Icon
- Source: `src/components/icon.tsx`
- Category: basic
- Description: Shared line-icon primitive selected by icon name.
- Extractable props: none appropriate for DraftComponent extraction
- Hardcoded: icon path data and visual styling

## FeatureSection
- Source: `src/app/page.tsx`
- Category: basic
- Description: Repeating capability story with indexed copy, benefits, text link, and visual panel.
- Extractable props: none appropriate for static design extraction
- Hardcoded: section structure, icons, typography, CSS classes

## ProductVisuals
- Source: `src/components/product-visuals.tsx`
- Category: basic
- Description: CSS and inline-SVG interface mockups used for product storytelling.
- Extractable props: none
- Hardcoded: all interface labels, shapes, icon names, and CSS classes

## StoryCard
- Source: `src/app/page.tsx`
- Category: basic
- Description: Editorial proof card with abstract visual, metric, category, statement, and link.
- Extractable props: none appropriate for static design extraction
- Hardcoded: art variants, labels, content, CSS classes

