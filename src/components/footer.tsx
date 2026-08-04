import Link from "next/link";

const groups = [
  {
    title: "Helpful Links",
    links: [
      ["Home", "/"],
      ["Reviews", "/reviews"],
      ["Installations", "/reviews#installations"],
      ["Our Story", "/our-story"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Our Products",
    links: [
      ["Whole Home Systems", "/products#whole-home"],
      ["Drinking Water Systems", "/products#drinking-water"],
      ["Add Ons", "/products#add-ons"],
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
    <svg className="instagram-icon" aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5.3" />
      <circle cx="12" cy="12" r="4.25" />
      <circle className="instagram-icon-dot" cx="17.65" cy="6.55" r="1.1" />
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
        <div className="footer-links">
          {groups.map((group) => (
            <div key={group.title}>
              <strong>{group.title}</strong>
              {group.links.map(([label, href]) => (
                <Link href={href} key={label}>{label}</Link>
              ))}
            </div>
          ))}
          <address className="footer-company">
            <strong>Company info.</strong>
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
              <span>500 8th Avenue FRNT 3,<br />New York, NY, United States, New York</span>
            </div>
          </address>
          <div className="footer-follow">
            <strong>Follow Us.</strong>
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
        <div className="footer-bottom">
          <span>Copyright 2026 Evergreen H2O.</span>
          <span>Systems built with care in the USA.</span>
        </div>
    </footer>
  );
}
