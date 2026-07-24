import Link from "next/link";
import { SiteFooter } from "@/components/footer";
import { BrandMark, Icon, type IconName } from "@/components/icon";
import { Header } from "@/components/header";
import {
  DrinkingWaterVisual,
  HeroFiltrationVisual,
  OwnershipVisual,
  ProductSilhouette,
  WholeHomeVisual,
} from "@/components/product-visuals";
import { products } from "@/data/products";

const features: Array<{
  number: string;
  id: string;
  kicker: string;
  title: string;
  description: string;
  bullets: Array<[IconName, string]>;
  visual: React.ReactNode;
  href: string;
  linkLabel: string;
  reversed?: boolean;
}> = [
  {
    number: "01",
    id: "whole-home",
    kicker: "Whole-home protection",
    title: "Better water starts before the first tap.",
    description: "A properly sized whole-home system treats water at the point of entry, creating one dependable foundation for kitchens, bathrooms, laundry, and appliances.",
    bullets: [["home", "One system supports the entire home"], ["filter", "Configured around your water source and goals"], ["wrench", "Clear installation and service guidance"]],
    visual: <WholeHomeVisual />,
    href: "/products#whole-home-carbon-system",
    linkLabel: "Explore the whole-home system",
  },
  {
    number: "02",
    id: "drinking-water",
    kicker: "Drinking-water precision",
    title: "A dedicated finish for the water you drink.",
    description: "Under-sink reverse-osmosis options add a focused layer of filtration at the kitchen, with configurations chosen for your household and available space.",
    bullets: [["droplet", "Crisp water on demand at the sink"], ["spark", "Compact, considered system design"], ["leaf", "Optional mineral-finish configurations"]],
    visual: <DrinkingWaterVisual />,
    href: "/products#under-sink-reverse-osmosis",
    linkLabel: "Explore the drinking-water system",
    reversed: true,
  },
  {
    number: "03",
    id: "ownership",
    kicker: "Easy ownership",
    title: "Know what is in stock—and what comes next.",
    description: "Replacement timing, compatible cartridges, and stock status stay easy to understand. Our team is here when you want help, without making ownership complicated.",
    bullets: [["refresh", "Straightforward replacement guidance"], ["check", "Compatible filters clearly identified"], ["shield", "Real people available for support"]],
    visual: <OwnershipVisual />,
    href: "/products#comparison",
    linkLabel: "Compare ownership details",
  },
];

const testimonials = [
  {
    quote: "The entire process felt thoughtful—from choosing the right system to understanding what maintenance would actually look like.",
    name: "The Bennett family",
    location: "Raleigh, NC",
    product: "Whole Home Carbon",
    initials: "BF",
  },
  {
    quote: "We wanted better kitchen water without turning the decision into a science project. EvergreenH20 made every option easy to compare.",
    name: "Sarah C.",
    location: "Nashville, TN",
    product: "Under-Sink RO",
    initials: "SC",
  },
  {
    quote: "Professional, responsive, and refreshingly clear. We knew what was in stock, what it cost, and exactly what would happen next.",
    name: "Marcus W.",
    location: "Austin, TX",
    product: "Countertop Mineral",
    initials: "MW",
  },
];

function FeatureSection({ feature }: { feature: (typeof features)[number] }) {
  const classes = feature.reversed ? "feature-section is-reversed" : "feature-section";
  return (
    <section className={classes} id={feature.id}>
      <div className="feature-copy">
        <div className="section-index"><span>{feature.number}</span><span>{feature.kicker}</span></div>
        <h2>{feature.title}</h2>
        <p className="feature-description">{feature.description}</p>
        <ul>{feature.bullets.map(([icon, text]) => <li key={text}><span><Icon name={icon} /></span>{text}</li>)}</ul>
        <Link className="text-link" href={feature.href}>{feature.linkLabel} <Icon name="arrow" /></Link>
      </div>
      <div className="feature-demo">{feature.visual}</div>
    </section>
  );
}

function Stars() {
  return <span className="stars" role="img" aria-label="Example five-star testimonial layout">{[0, 1, 2, 3, 4].map((star) => <Icon name="star" key={star} />)}</span>;
}

export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-aura hero-aura-one" /><div className="hero-aura hero-aura-two" />
        <div className="hero-copy">
          <div className="eyebrow live-eyebrow"><i /> Water filtration, personally specified</div>
          <h1 id="hero-title">Better water.<br /><span>Built for your whole home.</span></h1>
          <p>EvergreenH20 helps you choose professional filtration for every tap, every glass, and every routine—with guidance that stays clear.</p>
          <div className="hero-actions">
            <Link className="button" href="/products">Browse systems <Icon name="arrow" /></Link>
            <Link className="button button-ghost" href="/products#comparison">Compare systems</Link>
          </div>
        </div>
        <HeroFiltrationVisual />
        <div className="hero-proof"><span>Whole-home and point-of-use options</span><strong>Selected for your water</strong><span>Supported by real people</span></div>
      </section>

      <section className="trust-strip" aria-label="EvergreenH20 service benefits">
        <div><Icon name="droplet" /><span><strong>Guided system selection</strong><small>Based on your home and water source</small></span></div>
        <div><Icon name="wrench" /><span><strong>Installation support</strong><small>Clear help before and after purchase</small></span></div>
        <div><Icon name="refresh" /><span><strong>Easy filter ownership</strong><small>Simple replacement guidance</small></span></div>
        <div><Icon name="star" /><span><strong>Customer-first service</strong><small>Responsive, practical, personal</small></span></div>
      </section>

      <section className="products-section" id="products">
        <div className="products-heading">
          <div><span className="eyebrow">Browse filtration</span><h2>One home.<br />Four ways to filter.</h2></div>
          <p>Start with the system type that matches where you want cleaner water. Product, price, and inventory details shown here are preview content for this site structure.</p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" id={`home-${product.slug}`} key={product.name}>
              <Link className="product-art" href={`/products#${product.slug}`}>
                <span className="sr-only">{product.name}. Current preview availability: </span>
                <span className="product-number" aria-hidden="true">0{index + 1}</span>
                <ProductSilhouette variant={product.art} />
                <span className={"stock-badge " + product.stockTone}><i />{product.stock}</span>
              </Link>
              <div className="product-copy">
                <span>{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div><strong>{product.price}</strong><Link href={`/products#${product.slug}`}>View details<span className="sr-only"> for {product.name}</span> <Icon name="arrow" /></Link></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement-section">
        <div className="section-icon"><BrandMark /></div>
        <p><strong>Expertly matched.</strong><br /><span>Tell us about your water.</span><br /><span>We&apos;ll make the options clear.</span></p>
        <div className="statement-aside"><span className="eyebrow">Service before sales</span><p>A straightforward recommendation is more valuable than the biggest system on the shelf.</p></div>
      </section>

      <div className="features-wrap">{features.map((feature) => <FeatureSection feature={feature} key={feature.id} />)}</div>

      <section className="story-section" id="our-story">
        <div className="story-visual" aria-hidden="true">
          <div className="story-orbit orbit-one" /><div className="story-orbit orbit-two" />
          <div className="story-core"><BrandMark /><small>EVERGREENH20</small><strong>Service, from the source.</strong></div>
          <div className="story-note note-one"><i>EH</i><span><small>OUR PROMISE</small><strong>Clarity before complexity.</strong></span></div>
          <div className="story-note note-two"><span><Icon name="droplet" /></span><div><small>BUILT AROUND</small><strong>Your home</strong></div></div>
        </div>
        <div className="story-copy-panel">
          <span className="eyebrow">Our story</span>
          <h2>Water quality felt too important for a one-size-fits-all answer.</h2>
          <p>We started EvergreenH20 to make professional filtration easier to understand and easier to own. That means listening first, recommending responsibly, and staying available long after the system arrives.</p>
          <Link className="button button-light" href="/products#guide">See the buying guide <Icon name="arrow" /></Link>
        </div>
      </section>

      <section className="reviews-section" id="reviews">
        <div className="reviews-header">
          <div><span className="eyebrow">Testimonial layout preview</span><h2>Clear guidance.<br />Refreshing results.</h2></div>
          <div className="rating-summary"><strong>3</strong><span>Sample customer profiles</span><small>Replace before launch</small></div>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <Stars />
              <blockquote>“{testimonial.quote}”</blockquote>
              <div className="testimonial-person"><i>{testimonial.initials}</i><span><strong>{testimonial.name}</strong><small>{testimonial.location} · {testimonial.product}</small></span><b>Sample testimonial</b></div>
            </article>
          ))}
        </div>
      </section>

      <section className="guide-section">
        <div className="guide-art" aria-hidden="true"><div className="water-rings"><i /><i /><i /><span><Icon name="droplet" /></span></div><BrandMark /></div>
        <div className="guide-copy"><span className="eyebrow">The water guide</span><h2>Whole-home or under-sink? Start with where you want the change.</h2><p>A practical introduction to the major filtration categories—and the questions worth asking before you buy.</p><Link className="text-link" href="/products#guide">Open the buying guide <Icon name="arrow" /></Link></div>
      </section>

      <section className="final-cta" id="consultation">
        <div className="cta-copy"><span className="eyebrow">A clearer next step</span><h2>Better water.<br />Clearly compared.</h2><p>Compare where each system lives, who it suits, and what ownership looks like before narrowing the field.</p><Link className="button" href="/products#comparison">Compare all systems <Icon name="arrow" /></Link></div>
        <div className="cta-terminal" aria-hidden="true">
          <div className="terminal-top"><BrandMark /><span>EVERGREENH20</span><small><i /> GUIDE READY</small></div>
          <div className="terminal-center"><span className="drop-face"><Icon name="droplet" /></span><strong>Let&apos;s find your fit.</strong><small>Whole home · Drinking water · Bath</small></div>
          <div className="terminal-bottom"><span>Systems compared</span><strong>4 options</strong></div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  );
}
