import type { ReactNode } from "react";
import { SiteFooter } from "./footer";
import { Header } from "./header";

export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" className="legal-page" tabIndex={-1}>
        <header className="legal-hero">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          <small>Last updated July 22, 2026</small>
        </header>
        <div className="legal-content">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
