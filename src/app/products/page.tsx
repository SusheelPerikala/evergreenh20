import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Icon } from "@/components/icon";
import { InteriorHero, ProductGrid } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Products | Evergreen H2O",
  description: "Explore Evergreen H2O whole-home, drinking-water, and add-on filtration systems.",
};

const categories = [
  { id: "whole-home", number: "01", title: "Whole Home Systems", text: "Treat hardness, chlorine, and sediment from the point water enters the home." },
  { id: "drinking-water", number: "02", title: "Drinking Water Systems", text: "Dedicated reverse-osmosis systems for clean, convenient water at the kitchen tap." },
  { id: "add-ons", number: "03", title: "Add Ons", text: "Pre-filtration and protection components that complete a durable treatment plan." },
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <InteriorHero
          eyebrow="Products"
          title={<>One home.<br />One complete water plan.</>}
          description="Browse by system type, then request a recommendation based on your home, water conditions, and priorities."
          image={2}
        >
          <Link className="button button-light" href="/contact">Quick Quote <Icon name="arrow" /></Link>
        </InteriorHero>

        <section className="category-gateway" aria-label="Product categories">
          {categories.map((category) => (
            <a href={"#" + category.id} key={category.id}>
              <span>{category.number}</span>
              <div><h2>{category.title}</h2><p>{category.text}</p></div>
              <Icon name="arrow" />
            </a>
          ))}
        </section>

        {categories.map((category) => (
          <section className="catalog-section" id={category.id} key={category.id}>
            <div className="catalog-heading">
              <span className="eyebrow">Category {category.number}</span>
              <h2>{category.title}</h2>
            </div>
            <ProductGrid category={category.id as "whole-home" | "drinking-water" | "add-ons"} />
          </section>
        ))}

        <section className="catalog-cta">
          <span className="eyebrow">Not sure where to start?</span>
          <h2>Start with the water,<br />not the equipment.</h2>
          <p>We will help translate your water concerns into a clear system recommendation.</p>
          <Link className="button" href="/contact">Get a Quick Quote <Icon name="arrow" /></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
