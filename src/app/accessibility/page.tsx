import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Accessibility" };

export default function AccessibilityPage() {
  return (
    <LegalPage eyebrow="Site information" title="Accessibility" intro="EvergreenH20 is designed to remain understandable and operable across input methods and screen sizes.">
      <section><h2>What this preview supports</h2><p>The site uses semantic landmarks, ordered headings, visible keyboard focus, a skip link, descriptive link text, reduced-motion preferences, responsive layouts, and text alternatives for meaningful visuals.</p></section>
      <section><h2>Ongoing verification</h2><p>Accessibility is tested with automated audits, keyboard navigation, mobile viewports, zoom-friendly layouts, and browser accessibility snapshots. Production content and third-party services require another review before launch.</p></section>
      <section><h2>Known boundaries</h2><p>The filtration illustrations are intentionally simplified. Product decisions should rely on approved written specifications, not the decorative equipment diagrams.</p></section>
    </LegalPage>
  );
}
