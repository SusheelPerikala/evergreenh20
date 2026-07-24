import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal information" title="Privacy" intro="A plain-language overview of how this informational site currently handles data.">
      <section><h2>Current site behavior</h2><p>This preview does not include accounts, checkout, analytics, advertising trackers, or a contact-submission form. It does not intentionally collect personal information.</p></section>
      <section><h2>Technical data</h2><p>The hosting provider may process routine request information—such as IP address, browser type, and timestamps—to deliver and protect the site. Provider terms govern that infrastructure data.</p></section>
      <section><h2>Before launch</h2><p>Update this notice when analytics, ecommerce, customer accounts, or contact tools are connected. Each service should be documented before it begins collecting information.</p></section>
    </LegalPage>
  );
}
