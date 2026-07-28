import Link from "next/link";
import { BrandLogo } from "./brand-logo";
import { Icon } from "./icon";
import { navigation } from "@/data/site";

export function Header() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <Link className="header-brand" href="/" aria-label="Evergreen H2O home">
          <BrandLogo compact />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="button button-small header-cta" href="/contact">
            Quick Quote <Icon name="arrow" />
          </Link>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><Icon name="menu" /></summary>
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link href={item.href} key={item.href}>{item.label}<Icon name="arrow" /></Link>
              ))}
              <Link href="/contact">Quick Quote<Icon name="arrow" /></Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
