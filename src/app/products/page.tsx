import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/footer";
import { Header } from "@/components/header";
import { Icon } from "@/components/icon";
import { ProductSilhouette } from "@/components/product-visuals";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Water Filtration Systems",
  description: "Compare EvergreenH20 whole-home, reverse-osmosis, countertop, and bath filtration options.",
};

export default function ProductsPage() {
  const availableProducts = products.filter((product) => product.stockTone !== "restock");

  return (
    <div id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" className="catalog-page" tabIndex={-1}>
        <section className="catalog-hero">
          <span className="eyebrow">EvergreenH20 system guide</span>
          <h1>Compare the right level of filtration.</h1>
          <p>Start with where you want the change, then compare placement, ownership, and current preview inventory in one clear view.</p>
          <div className="hero-actions">
            <a className="button" href="#catalog">Browse all systems <Icon name="arrow" /></a>
            <a className="button button-ghost" href="#comparison">Compare at a glance</a>
          </div>
        </section>

        <section className="inventory-section" id="in-stock" aria-labelledby="inventory-title">
          <div>
            <span className="eyebrow">Inventory preview</span>
            <h2 id="inventory-title">What is available now.</h2>
            <p>These stock states demonstrate the catalog structure. Connect them to your inventory source before launch.</p>
          </div>
          <div className="inventory-list">
            {availableProducts.map((product) => (
              <a href={`#${product.slug}`} key={product.slug}>
                <span className={`stock-dot ${product.stockTone}`} />
                <span><strong>{product.name}</strong><small>{product.stock}</small></span>
                <Icon name="arrow" />
              </a>
            ))}
          </div>
        </section>

        <section className="catalog-list" id="catalog" aria-labelledby="catalog-title">
          <div className="catalog-heading">
            <span className="eyebrow">All systems</span>
            <h2 id="catalog-title">Built around where your water is used.</h2>
          </div>
          {products.map((product, index) => (
            <article className="catalog-product" id={product.slug} key={product.slug}>
              <div className="catalog-product-art" aria-hidden="true">
                <span className="product-number">0{index + 1}</span>
                <ProductSilhouette variant={product.art} />
                <span className={`stock-badge ${product.stockTone}`}><i />{product.stock}</span>
              </div>
              <div className="catalog-product-copy">
                <span className="eyebrow">{product.category}</span>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <dl>
                  <div><dt>Placement</dt><dd>{product.placement}</dd></div>
                  <div><dt>Best suited to</dt><dd>{product.bestFor}</dd></div>
                  <div><dt>Ownership</dt><dd>{product.service}</dd></div>
                </dl>
                <ul>{product.highlights.map((highlight) => <li key={highlight}><Icon name="check" />{highlight}</li>)}</ul>
                <div className="catalog-product-action">
                  <strong>{product.price}</strong>
                  <a className="text-link" href="#guide">Check the buying guide <Icon name="arrow" /></a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="comparison-section" id="comparison" aria-labelledby="comparison-title">
          <div className="comparison-heading"><span className="eyebrow">Side-by-side</span><h2 id="comparison-title">Compare the essentials.</h2><p>Use this as a starting point; final configuration depends on the home, water source, and installation space.</p></div>
          <div className="comparison-scroll" tabIndex={0} aria-label="Scrollable product comparison">
            <table>
              <thead><tr><th scope="col">System</th><th scope="col">Placement</th><th scope="col">Starting price</th><th scope="col">Preview stock</th></tr></thead>
              <tbody>{products.map((product) => <tr key={product.slug}><th scope="row"><a href={`#${product.slug}`}>{product.name}</a></th><td>{product.placement}</td><td>{product.price}</td><td><span className={`table-stock ${product.stockTone}`}><i />{product.stock}</span></td></tr>)}</tbody>
            </table>
          </div>
        </section>

        <section className="buying-guide" id="guide" aria-labelledby="guide-title">
          <div><span className="eyebrow">A clear way to choose</span><h2 id="guide-title">Three questions narrow the field.</h2></div>
          <ol>
            <li><span>01</span><div><strong>Where do you want the change?</strong><p>Every tap, one drinking-water tap, the countertop, or the shower.</p></div></li>
            <li><span>02</span><div><strong>What space is available?</strong><p>Main-line access, cabinet room, counter space, and connection type shape the shortlist.</p></div></li>
            <li><span>03</span><div><strong>How hands-on should ownership feel?</strong><p>Compare cartridge schedules, installation needs, and the support you want after purchase.</p></div></li>
          </ol>
          <Link className="button" href="/#our-story">See how we guide customers <Icon name="arrow" /></Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
