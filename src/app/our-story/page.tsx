import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Icon } from "@/components/icon";
import { InteriorHero } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Our Story | Evergreen H2O",
  description: "Why Evergreen H2O builds serviceable, high-flow water systems with premium components.",
};

export default function OurStoryPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <InteriorHero
          eyebrow="Our Story"
          title={<>Water treatment<br />should earn your trust.</>}
          description="We built Evergreen H2O around a simple standard: use better components, explain the system clearly, and stand behind the work."
          image={4}
        >
          <Link className="button button-light" href="/contact">Talk to our team <Icon name="arrow" /></Link>
        </InteriorHero>

        <section className="story-statement">
          <span>01</span>
          <h2>Most systems look similar from across the room. The meaningful differences are inside the valve, tank, media, and flow path.</h2>
        </section>

        <section className="story-split">
          <div className="story-image"><img src="/installations/3.jpeg" alt="Evergreen H2O whole-home system installation" /></div>
          <div className="story-copy">
            <span className="eyebrow">Built around service</span>
            <h2>Choose the parts you would want to own for the next decade.</h2>
            <p>That principle led us to ceramic disc valves, Jacobi coconut shell activated carbon, ResinTech CG10 ten-percent crosslinked resin, and a larger distributor tube that supports whole-home flow.</p>
            <p>It also shaped how we install. Equipment should be orderly, accessible, understandable, and ready to service without rebuilding the room around it.</p>
          </div>
        </section>

        <section className="story-principles" aria-labelledby="principles-title">
          <div><span className="eyebrow">What guides us</span><h2 id="principles-title">Three standards.<br />Every home.</h2></div>
          <article><span>01</span><h3>Explain everything</h3><p>Homeowners deserve plain language about media, sizing, maintenance, and tradeoffs before choosing equipment.</p></article>
          <article><span>02</span><h3>Build for the real house</h3><p>Household demand, plumbing layout, pressure, and service space matter more than a one-size-fits-all package.</p></article>
          <article><span>03</span><h3>Stay accountable</h3><p>The relationship does not end when the installation van leaves. Clear ownership and support are part of the system.</p></article>
        </section>

        <section className="founder-note">
          <blockquote>“Better water is the result. Better judgment, components, and workmanship are how we get there.”</blockquote>
          <span>Evergreen H2O · Built in the USA</span>
        </section>
      </main>
      <Footer />
    </>
  );
}
