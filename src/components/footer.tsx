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
];

function SocialIcon({ name }: { name: "facebook" | "instagram" }) {
  if (name === "facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M13.7 21v-8h2.8l.4-3.1h-3.2v-2c0-.9.3-1.5 1.6-1.5H17V3.6c-.8-.1-1.6-.2-2.4-.2-2.4 0-4.1 1.5-4.1 4.2v2.3H7.8V13h2.7v8h3.2Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <rect x="3.3" y="3.3" width="17.4" height="17.4" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.5" cy="6.8" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}

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
          <div>
            <strong>Socials</strong>
            <div className="footer-socials">
              <a href="https://www.facebook.com/profile.php?id=61591314113049" target="_blank" rel="noreferrer" aria-label="Evergreen H2O on Facebook">
                <SocialIcon name="facebook" />
              </a>
              <a href="https://www.instagram.com/evergreen_h20/" target="_blank" rel="noreferrer" aria-label="Evergreen H2O on Instagram">
                <SocialIcon name="instagram" />
              </a>
            </div>
          </div>
        </div>
        <address className="footer-company">
          <strong>Company info</strong>
          <a href="tel:+19047184073">904-718-4073</a>
          <a href="mailto:info@evergreenh20.com">info@evergreenh20.com</a>
          <span>500 8th Avenue FRNT 3, New York, NY, United States, New York</span>
        </address>
        <div className="footer-bottom">
          <span>Copyright 2026 Evergreen H2O.</span>
          <span>Systems built with care in the USA.</span>
        </div>
    </footer>
  );
}
