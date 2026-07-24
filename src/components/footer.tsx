import Link from "next/link";
import { BrandMark } from "./icon";

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <Link className="brand" href="/" aria-label="EvergreenH20 home"><BrandMark /><span translate="no">EVERGREENH20</span></Link>
        <p>Professional filtration.<br />Personal guidance.</p>
      </div>
      <div className="footer-links">
        <div><strong>Products</strong><Link href="/products#whole-home-carbon-system">Whole home</Link><Link href="/products#under-sink-reverse-osmosis">Reverse osmosis</Link><Link href="/products#countertop-mineral-filter">Countertop</Link><Link href="/products#shower-bath-filter">Shower & bath</Link></div>
        <div><strong>Company</strong><Link href="/#our-story">Our story</Link><Link href="/#reviews">Testimonials</Link><Link href="/products#guide">Buying guide</Link></div>
        <div><strong>Support</strong><Link href="/#ownership">Replacement filters</Link><Link href="/products#comparison">Compare systems</Link><Link href="/products#guide">Product guidance</Link></div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 EvergreenH20</span>
        <nav aria-label="Legal information"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/accessibility">Accessibility</Link></nav>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
