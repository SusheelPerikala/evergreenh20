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
      <main id="main-content">
        <section className="home-hero">
          <div className="hero-photo" />
          <div className="hero-gradient" />
          <div className="hero-content">
            <span className="hero-notice">Complete Home Package · savings available</span>
            <span className="eyebrow">Whole-home water, handled</span>
            <h1>Better water.<br /><span>Built for every tap.</span></h1>
            <p>Premium components, high-flow engineering, and a clear path from water test to professional installation.</p>
            <div className="hero-actions">
              <Link className="button" href="/contact">Quick Quote <Icon name="arrow" /></Link>
              <Link className="button button-ghost" href="/our-story">Learn More</Link>
            </div>
          </div>
          <div className="hero-spec-card">
            <span><i /> System architecture</span>
            <strong>High-flow by design.</strong>
            <div><small>DISTRIBUTOR</small><b>1 1/4 in</b></div>
            <div><small>MEDIA</small><b>Jacobi + CG10</b></div>
            <div><small>ASSEMBLY</small><b>Built in USA</b></div>
          </div>
          <div className="hero-proof">
            <span>NSF-certified components</span>
            <span>USA-built systems</span>
            <span>Professional installation</span>
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
          <ProductGrid featuredOnly />
        </section>

        <FAQSection />

        <InstallationGallery limit={10} />

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
