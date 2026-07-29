import Link from "next/link";
import { BrandLogo } from "./brand-logo";

const groups = [
  {
    title: "Products",
    links: [
      ["Whole Home", "/products#whole-home"],
      ["Drinking Water", "/products#drinking-water"],
      ["Add Ons", "/products#add-ons"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Reviews", "/reviews"],
      ["Installations", "/reviews#installations"],
      ["Our Story", "/our-story"],
    ],
  },
  {
    title: "Socials",
    links: [
      ["Facebook", "https://www.facebook.com/"],
      ["Instagram", "https://www.instagram.com/"],
    ],
  },
];

export function Footer() {
  return (
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
  );
}
