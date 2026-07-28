import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Icon } from "@/components/icon";
import { InteriorHero, ProductGrid } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "In Stock | Evergreen H2O",
  description: "See current Evergreen H2O equipment availability.",
};

export default function InStockPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <InteriorHero
          eyebrow="Current availability"
          title={<>Ready when<br />your home is.</>}
          description="Current equipment availability for whole-home, drinking-water, and pre-filtration systems."
          image={7}
        >
          <Link className="button button-light" href="/contact">Reserve a system <Icon name="arrow" /></Link>
        </InteriorHero>
        <section className="stock-page">
          <div className="stock-heading">
            <span className="eyebrow">Inventory</span>
            <h2>Available systems</h2>
            <p>Availability changes as systems are configured and scheduled. A quote confirms the current equipment and installation window.</p>
          </div>
          <ProductGrid />
        </section>
      </main>
      <Footer />
    </>
  );
}
