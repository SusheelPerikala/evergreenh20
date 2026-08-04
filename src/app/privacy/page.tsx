import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal information" title="Privacy" intro="A plain-language overview of how this website handles data.">
      <section><h2>Quote requests</h2><p>When you submit the quote form, we collect the contact and project details you provide so Evergreen H2O can respond to your request. The form is delivered through our email service provider and is not used to create an account.</p></section>
      <section><h2>Analytics</h2><p>We use privacy-focused website analytics to understand aggregate visits and page usage. We do not use advertising trackers on this site.</p></section>
      <section><h2>Technical data</h2><p>The hosting provider may process routine request information—such as IP address, browser type, and timestamps—to deliver and protect the site. Provider terms govern that infrastructure data.</p></section>
      <section><h2>Questions</h2><p>Contact info@evergreenh20.com with privacy questions or requests related to information you submitted.</p></section>
    </LegalPage>
  );
}
