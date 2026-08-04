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

function ContactIcon({ name }: { name: "phone" | "email" | "location" }) {
  const paths = {
    phone: <path d="M7.1 3.5 10 8.3l-2.1 2.1a16.5 16.5 0 0 0 5.7 5.7l2.1-2.1 4.8 2.9-1.4 3.4c-.3.8-1.2 1.3-2.1 1.2C9.5 20.5 3.5 14.5 2.5 7c-.1-.9.4-1.8 1.2-2.1l3.4-1.4Z" />,
    email: <><rect x="2.5" y="4.5" width="19" height="15" rx="1.8" /><path d="m3.5 6 8.5 7 8.5-7" /></>,
    location: <><path d="M20 10c0 5.7-8 12-8 12S4 15.7 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  };

  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">{paths[name]}</svg>;
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
        </div>
        <address className="footer-company">
          <div className="footer-contact-details">
            <a href="tel:+19047184073">
              <ContactIcon name="phone" />
              <span>904-718-4073</span>
            </a>
            <a href="mailto:info@evergreenh20.com">
              <ContactIcon name="email" />
              <span>info@evergreenh20.com</span>
            </a>
            <div>
              <ContactIcon name="location" />
              <span>500 8th Avenue FRNT 3, New York, NY,<br />United States, New York</span>
            </div>
          </div>
          <div className="footer-socials">
            <a href="https://www.facebook.com/profile.php?id=61591314113049" target="_blank" rel="noreferrer" aria-label="Evergreen H2O on Facebook">
              <SocialIcon name="facebook" />
            </a>
            <a href="https://www.instagram.com/evergreen_h20/" target="_blank" rel="noreferrer" aria-label="Evergreen H2O on Instagram">
              <SocialIcon name="instagram" />
            </a>
          </div>
        </address>
        <div className="footer-bottom">
          <span>Copyright 2026 Evergreen H2O.</span>
          <span>Systems built with care in the USA.</span>
        </div>
    </footer>
  );
}
