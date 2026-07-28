import Link from "next/link";
import { BrandLogo } from "./brand-logo";
import { Icon } from "./icon";

const groups = [
  {
    title: "Systems",
    links: [
      ["Whole Home", "/products#whole-home"],
      ["Drinking Water", "/products#drinking-water"],
      ["Add Ons", "/products#add-ons"],
      ["In Stock", "/in-stock"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Reviews", "/reviews"],
      ["Installations", "/reviews#installations"],
      ["Our Story", "/our-story"],
      ["Quick Quote", "/contact"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy", "/privacy"],
      ["Terms", "/terms"],
      ["Accessibility", "/accessibility"],
    ],
  },
  {
    title: "Socials",
    links: [["LinkedIn", "https://www.linkedin.com/"]],
  },
];

export function Footer() {
  return (
    <>
      <section className="footer-cta" aria-labelledby="footer-cta-title">
        <div>
          <span className="eyebrow">Built around your water</span>
          <h2 id="footer-cta-title">You know the problem.<br />We will build the answer.</h2>
        </div>
        <div>
          <p>Start with a quick conversation about your home, water, and priorities. We will take it from there.</p>
          <Link className="button button-light" href="/contact">Quick Quote <Icon name="arrow" /></Link>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-brand">
          <Link href="/" aria-label="Evergreen H2O home"><BrandLogo /></Link>
          <h3>Your whole-home water team,<br />backed by better components.</h3>
        </div>
        <div className="footer-links">
          {groups.map((group) => (
            <div key={group.title}>
              <strong>{group.title}</strong>
              {group.links.map(([label, href]) => (
                <Link href={href} key={label}>{label}</Link>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>Copyright 2026 Evergreen H2O.</span>
          <span>Systems built with care in the USA.</span>
        </div>
      </footer>
    </>
  );
}
