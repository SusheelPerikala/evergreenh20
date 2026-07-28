import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactSection, InteriorHero } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Quick Quote | Evergreen H2O",
  description: "Request an Evergreen H2O whole-home or drinking-water system quote.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <InteriorHero
          eyebrow="Quick Quote"
          title={<>Start with a<br />better water plan.</>}
          description="Tell us what you are noticing. We will help identify the right next step without forcing a one-size-fits-all package."
          image={6}
        />
        <ContactSection compact />
      </main>
      <Footer />
    </>
  );
}
