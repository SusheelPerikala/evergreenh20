import Link from "next/link";
import { Icon } from "./icon";
import { completeHomePackage, faqs, installations, products, reviews, type Product } from "@/data/site";

export function ProductGrid({
  featuredOnly = false,
  category,
  showAvailability = true,
}: {
  featuredOnly?: boolean;
  category?: Product["categorySlug"];
  showAvailability?: boolean;
}) {
  const availableProducts = featuredOnly ? [completeHomePackage, ...products] : products;
  const visible = availableProducts.filter((product) => {
    if (featuredOnly && !product.featured) return false;
    if (category && product.categorySlug !== category) return false;
    return true;
  });

  return (
    <div className="product-grid">
      {visible.map((product, index) => (
        <article className="product-card" id={product.id} key={product.id}>
          <div className="product-art">
            <span className="product-index">0{index + 1}</span>
            <img className="product-image" src={product.image} alt={product.imageAlt} />
            {showAvailability && (
              <span className={("stock-pill " + product.availabilityTone)}>
                <i /> {product.availability}
              </span>
            )}
          </div>
          <div className="product-copy">
            <span>{product.category}</span>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <ul>
              {product.benefits.map((benefit) => <li key={benefit}><Icon name="check" />{benefit}</li>)}
            </ul>
            <Link href={"/contact?product=" + product.id}>Quick Quote <Icon name="arrow" /></Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <div className="section-heading sticky-heading">
        <span className="eyebrow">FAQ</span>
        <h2 id="faq-title">Common questions,<br />clear answers.</h2>
        <p>Water treatment should be understandable before it is installed.</p>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <details key={faq.question} open={index === 0}>
            <summary><span>0{index + 1}</span>{faq.question}<i>+</i></summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ReviewGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={("review-grid " + (compact ? "review-grid-compact" : "")).trim()}>
      {reviews.map((review, index) => (
        <article className="review-card" key={review.quote}>
          <div className="review-top"><span>★★★★★</span><small>0{index + 1}</small></div>
          <blockquote>“{review.quote}”</blockquote>
          <footer>
            <strong>{review.name}</strong>
            <span>{review.location} · {review.product}</span>
          </footer>
        </article>
      ))}
    </div>
  );
}

export function InstallationGallery({
  limit,
  heading = true,
}: {
  limit?: number;
  heading?: boolean;
}) {
  const visible = typeof limit === "number" ? installations.slice(0, limit) : installations;
  return (
    <section className="installation-section" id="installations" aria-labelledby={heading ? "installations-title" : undefined}>
      {heading && (
        <div className="installation-heading">
          <div>
            <span className="eyebrow">In the field</span>
            <h2 id="installations-title">Built clean.<br />Installed cleaner.</h2>
          </div>
          <p>Real Evergreen H2O installations, planned for service access, strong flow, and a professional finish.</p>
        </div>
      )}
      <div className="installation-grid">
        {visible.map((source, index) => (
          <figure className={"installation-item item-" + ((index % 5) + 1)} key={source}>
            <a href={source} target="_blank" rel="noreferrer" aria-label={"Open installation " + (index + 1) + " in a new tab"}>
              <img src={source} alt={"Evergreen H2O installation " + (index + 1)} loading={index < 4 ? "eager" : "lazy"} />
            </a>
            <figcaption><span>Installation</span><strong>{String(index + 1).padStart(2, "0")}</strong></figcaption>
          </figure>
        ))}
      </div>
      {typeof limit === "number" && limit < installations.length && (
        <div className="section-action"><Link className="text-link" href="/reviews#installations">View all installations <Icon name="arrow" /></Link></div>
      )}
    </section>
  );
}

export function ContactSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={("contact-section " + (compact ? "contact-section-compact" : "")).trim()} id="contact" aria-labelledby="contact-title">
      <div className="contact-copy">
        <span className="eyebrow">Quick Quote</span>
        <h2 id="contact-title">Tell us about<br />your water.</h2>
        <p>Share a few details and we will help match your home with the right whole-home or drinking-water setup.</p>
        <div className="contact-points">
          <span><b>01</b>No-pressure system recommendation</span>
          <span><b>02</b>Clear equipment and installation scope</span>
          <span><b>03</b>Service-focused support after installation</span>
        </div>
      </div>
      <form className="contact-form" action="mailto:hello@evergreenh20.com" method="post" encType="text/plain">
        <div className="form-row">
          <label>First name<input name="first-name" autoComplete="given-name" required /></label>
          <label>Last name<input name="last-name" autoComplete="family-name" required /></label>
        </div>
        <div className="form-row">
          <label>Email<input type="email" name="email" autoComplete="email" required /></label>
          <label>Phone<input type="tel" name="phone" autoComplete="tel" /></label>
        </div>
        <label>What are you noticing?
          <select name="water-concern" defaultValue="">
            <option value="" disabled>Select a water concern</option>
            <option>Hard water or scale</option>
            <option>Chlorine taste or odor</option>
            <option>Sediment</option>
            <option>Drinking water quality</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label>Tell us about your home<textarea name="message" rows={5} placeholder="Household size, location, current equipment, or anything else useful." /></label>
        <button className="button form-submit" type="submit">Request my quote <Icon name="arrow" /></button>
        <small>Submitting opens your email application so you can review the message before sending.</small>
      </form>
    </section>
  );
}

export function InteriorHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image: number;
  children?: React.ReactNode;
}) {
  return (
    <section className={"interior-hero interior-hero-" + image}>
      <div className="interior-overlay" />
      <div className="interior-content">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </section>
  );
}
