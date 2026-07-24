# Page Dependency Trees

## / (Home Page)

Entry: `src/app/page.tsx`

Dependencies:
- `src/app/page.tsx`
  - `src/components/icon.tsx`
  - `src/components/product-visuals.tsx`
    - `src/components/icon.tsx`
- `src/app/layout.tsx`
  - `src/app/globals.css`

The home page has a single render branch. Responsive behavior is implemented entirely in `src/app/globals.css` at 1100px, 760px, and 430px breakpoints.

