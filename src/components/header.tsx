"use client";

import Link from "next/link";
import { useRef } from "react";
import { BrandMark, Icon } from "./icon";

const navItems = [
  ["Products", "/products"],
  ["In stock", "/products#in-stock"],
  ["Reviews", "/#reviews"],
  ["Our story", "/#our-story"],
];

export function Header() {
  const menuRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="EvergreenH20 home"><BrandMark /><span translate="no">EVERGREENH20</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <Link className="header-link" href="/products#guide">Get product guidance</Link>
        <Link className="button button-small header-cta" href="/products">Shop <Icon name="arrow" /></Link>
        <details className="mobile-menu" ref={menuRef}>
          <summary aria-label="Navigation menu"><Icon name="menu" /></summary>
          <nav aria-label="Mobile navigation">
            {navItems.map(([label, href]) => <Link key={label} href={href} onClick={closeMenu}>{label}<Icon name="arrow" /></Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
