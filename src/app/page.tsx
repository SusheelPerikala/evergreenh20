import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Icon } from "@/components/icon";
import { ContactSection, FAQSection, InstallationGallery, ProductGrid, ReviewGrid } from "@/components/site-sections";
import { superiority } from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-page" id="main-content">
        <section className="home-hero">
          <div className="hero-photo" />
          <div className="hero-gradient" />
          <div className="hero-content">
            <h1>Whole-home water filtration,<br /><span>without compromise.</span></h1>
            <p>Premium components, high-flow engineering, and professional installation for better water at every tap.</p>
            <div className="hero-actions">
              <Link className="button" href="/contact">Quick Quote <Icon name="arrow" /></Link>
              <Link className="button button-ghost" href="/our-story">Learn More</Link>
            </div>
          </div>
        </section>

        <section className="superiority-section" aria-labelledby="superiority-title">
          <div className="section-heading">
            <span className="eyebrow">Why Evergreen</span>
            <h2 id="superiority-title">The difference<br />is in the build.</h2>
            <p>A system is only as good as the components carrying water through it every day.</p>
          </div>
          <div className="superiority-grid">
            {superiority.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="best-sellers-section" aria-labelledby="best-sellers-title">
          <div className="products-heading">
            <div><span className="eyebrow">Best Sellers</span><h2 id="best-sellers-title">The systems homes<br />ask for most.</h2></div>
            <div><p>Whole-home and drinking-water equipment selected for durable service, strong flow, and straightforward ownership.</p><Link className="text-link" href="/products">All products <Icon name="arrow" /></Link></div>
          </div>
          <ProductGrid featuredOnly showAvailability={false} />
        </section>

        <FAQSection />

        <InstallationGallery
          sources={[
            "/installations/1.jpg",
            "/installations/2.jpeg",
            "/installations/5.png",
            "/installations/6.png",
            "/installations/8.png",
            "/installations/9.png",
            "/installations/13.png",
            "/installations/18.png",
            "/installations/23.png",
          ]}
        />

        <section className="reviews-section" aria-labelledby="reviews-title">
          <div className="reviews-heading">
            <span className="eyebrow">Customer reviews</span>
            <h2 id="reviews-title">The result should<br />feel obvious.</h2>
            <Link className="text-link" href="/reviews">Read more reviews <Icon name="arrow" /></Link>
          </div>
          <ReviewGrid compact />
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
