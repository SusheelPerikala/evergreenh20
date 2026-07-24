import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal information" title="Terms" intro="The practical boundaries for this preview storefront and its product information.">
      <section><h2>Informational preview</h2><p>Product names, prices, inventory states, testimonials, and timing shown here are demonstration content until EvergreenH20 supplies and approves production data.</p></section>
      <section><h2>No professional assessment</h2><p>This site helps organize filtration categories. It does not replace water testing, installation review, code compliance, or advice from a qualified professional.</p></section>
      <section><h2>Purchases and warranties</h2><p>No checkout is currently offered. Final product terms, returns, service coverage, and warranties must be published alongside any future purchasing flow.</p></section>
    </LegalPage>
  );
}
