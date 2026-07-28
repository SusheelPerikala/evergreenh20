import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Icon } from "@/components/icon";
import { InstallationGallery, InteriorHero, ReviewGrid } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Reviews & Installations | Evergreen H2O",
  description: "Customer reviews and real Evergreen H2O installation photos.",
};

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <InteriorHero
          eyebrow="Reviews"
          title={<>Good water.<br />Better follow-through.</>}
          description="A few words from homeowners, followed by a full gallery of real system installations."
          image={5}
        >
          <Link className="button button-light" href="/contact">Plan my system <Icon name="arrow" /></Link>
        </InteriorHero>
        <section className="reviews-page-section" aria-labelledby="customer-notes-title">
          <div className="section-heading">
            <span className="eyebrow">Customer notes</span>
            <h2 id="customer-notes-title">Clean work earns<br />clear feedback.</h2>
          </div>
          <ReviewGrid />
        </section>
        <InstallationGallery />
      </main>
      <Footer />
    </>
  );
}
