# Shared Layouts

## Root layout

Provides metadata, global styles, HTML language, and the shared body shell.

### `src/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wayfinder — Freight, handled.",
  description:
    "The autonomous logistics coordinator for modern manufacturers and distributors.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## Home page shell

The header, navigation, footer, and page-level sections are currently colocated in the home page file.

### `src/app/page.tsx`

```tsx
import { BrandMark, Icon, type IconName } from "@/components/icon";
import { CaptureVisual, CoordinateVisual, HeroOrchestrator, ResolveVisual } from "@/components/product-visuals";

const navItems = [
  ["Platform", "#platform"],
  ["How it works", "#how-it-works"],
  ["Stories", "#stories"],
  ["Company", "#company"],
];

const customerNames = ["Northfield", "Cinder", "Kinship", "Formwell", "Parcel & Co.", "Hearth", "Morrow"];

const features: Array<{
  number: string;
  id: string;
  kicker: string;
  title: string;
  description: string;
  bullets: Array<[IconName, string]>;
  visual: React.ReactNode;
  reversed?: boolean;
}> = [
  {
    number: "01",
    id: "capture",
    kicker: "Capture",
    title: "Every request becomes a ready-to-move load.",
    description: "Wayfinder reads the emails, attachments, portals, and spreadsheets your customers already use—then structures the details without a handoff.",
    bullets: [["mail", "Understands tenders in any format"], ["database", "Writes clean data back to your TMS"], ["spark", "Flags ambiguity before it becomes a problem"]],
    visual: <CaptureVisual />,
  },
  {
    number: "02",
    id: "coordinate",
    kicker: "Coordinate",
    title: "Always on, wherever the work happens.",
    description: "Calls, texts, emails, updates, and follow-ups happen automatically. Your team sees one clear thread instead of chasing six different ones.",
    bullets: [["phone", "Communicates naturally with every carrier"], ["clock", "Tracks milestones around the clock"], ["stack", "Keeps customers and internal teams aligned"]],
    visual: <CoordinateVisual />,
    reversed: true,
  },
  {
    number: "03",
    id: "resolve",
    kicker: "Resolve",
    title: "Exceptions get handled before they become escalations.",
    description: "Wayfinder watches the network continuously, weighs the options, takes action within your rules, and leaves a complete audit trail.",
    bullets: [["bolt", "Detects risk before the ETA changes"], ["route", "Plans and executes the best response"], ["shield", "Escalates only when human judgment matters"]],
    visual: <ResolveVisual />,
  },
];

const stories = [
  { tag: "Furniture", title: "A 64% faster path from order to dispatch.", metric: "14 hrs", note: "saved every week", art: "boxes" },
  { tag: "Building materials", title: "One coordinator for every plant and every carrier.", metric: "98.7%", note: "on-time pickup", art: "grid" },
  { tag: "Food & beverage", title: "Proactive exceptions, without the overnight shift.", metric: "3.2×", note: "faster resolution", art: "rings" },
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Wayfinder home"><BrandMark /><span>WAYFINDER</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <a className="header-login" href="#stories">Customer stories</a>
        <a className="button button-small" href="#demo">Book a demo <Icon name="arrow" /></a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><Icon name="menu" /></summary>
          <nav aria-label="Mobile navigation">
            {navItems.map(([label, href]) => <a key={href} href={href}>{label}<Icon name="arrow" /></a>)}
          </nav>
        </details>
      </div>
    </header>
  );
}

function FeatureSection({ feature }: { feature: (typeof features)[number] }) {
  return (
    <section className={`feature-section ${feature.reversed ? "is-reversed" : ""}`} id={feature.id}>
      <div className="feature-copy reveal">
        <div className="section-index"><span>{feature.number}</span><span>{feature.kicker}</span></div>
        <h2>{feature.title}</h2>
        <p className="feature-description">{feature.description}</p>
        <ul>
          {feature.bullets.map(([icon, text]) => <li key={text}><span><Icon name={icon} /></span>{text}</li>)}
        </ul>
        <a className="text-link" href="#demo">See {feature.kicker.toLowerCase()} in action <Icon name="arrow" /></a>
      </div>
      <div className="feature-demo reveal">{feature.visual}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-aura hero-aura-one" /><div className="hero-aura hero-aura-two" />
        <div className="hero-copy">
          <div className="eyebrow live-eyebrow"><i /> Autonomous freight operations</div>
          <h1 id="hero-title">The freight moves.<br /><span>Your team doesn&apos;t have to.</span></h1>
          <p>Wayfinder plans, coordinates, and protects every shipment—from the first request to the final proof of delivery.</p>
          <div className="hero-actions">
            <a className="button" href="#demo">Meet Wayfinder <Icon name="arrow" /></a>
            <a className="button button-ghost" href="#platform">Explore the platform</a>
          </div>
        </div>
        <HeroOrchestrator />
        <div className="hero-proof"><span>Trusted to coordinate more than</span><strong>48,000 shipments</strong><span>across North America</span></div>
      </section>

      <section className="logo-strip" aria-label="Selected customers">
        <p>Built with operations teams at</p>
        <div>{customerNames.map((name, index) => <span key={name} className={`wordmark mark-${index + 1}`}>{name}</span>)}</div>
      </section>

      <section className="statement-section" id="platform">
        <div className="section-icon"><BrandMark /></div>
        <p><strong>Fully autonomous.</strong><br /><span>Give Wayfinder the shipment.</span><br /><span>Get your day back.</span></p>
        <div className="statement-aside"><span className="eyebrow">One system, end to end</span><p>Built to do the work, not just show you where the work is.</p></div>
      </section>

      <div id="how-it-works" className="features-wrap">
        {features.map((feature) => <FeatureSection feature={feature} key={feature.id} />)}
      </div>

      <section className="human-section" id="company">
        <div className="human-visual" aria-hidden="true">
          <div className="human-orbit orbit-one" /><div className="human-orbit orbit-two" />
          <div className="human-core"><BrandMark /><small>HUMAN SUPPORT</small><strong>On when it matters.</strong></div>
          <div className="human-note note-one"><i>JM</i><span><small>OPS SPECIALIST</small><strong>Reviewing carrier claim</strong></span></div>
          <div className="human-note note-two"><span><Icon name="shield" /></span><div><small>ESCALATION COVERAGE</small><strong>24 / 7</strong></div></div>
        </div>
        <div className="human-copy">
          <span className="eyebrow">Humans, built in</span>
          <h2>Autonomous by default. Expert-backed by design.</h2>
          <p>Wayfinder handles the repeatable work on its own. When a situation needs judgment, a freight expert steps in with the full context already in hand.</p>
          <a className="button button-light" href="#demo">How support works <Icon name="arrow" /></a>
        </div>
      </section>

      <section className="stories-section" id="stories">
        <div className="stories-header">
          <div><span className="eyebrow">Customer stories</span><h2>Clearer operations.<br />Measurable outcomes.</h2></div>
          <a className="text-link" href="#demo">Explore all stories <Icon name="arrow" /></a>
        </div>
        <div className="story-grid">
          {stories.map((story, index) => (
            <article className="story-card" key={story.title}>
              <div className={`story-art art-${story.art}`} aria-hidden="true">
                <span className="art-number">0{index + 1}</span>
                <div className="art-object"><i /><i /><i /></div>
                <div className="story-metric"><strong>{story.metric}</strong><small>{story.note}</small></div>
              </div>
              <div className="story-copy"><span>{story.tag}</span><h3>{story.title}</h3><a href="#demo" aria-label={`Read ${story.tag} customer story`}>Read the story <Icon name="arrow" /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="news-section">
        <div className="news-heading"><span className="eyebrow">Field notes</span><h2>Ideas for a supply chain that can think ahead.</h2></div>
        <article className="news-feature">
          <div className="news-art" aria-hidden="true"><div className="news-grid" /><span className="news-route"><i /><i /><i /><i /></span><BrandMark /></div>
          <div className="news-copy"><span>Operating guide · 8 min</span><h3>The operator&apos;s guide to autonomous freight coordination.</h3><p>What to automate first, where humans stay essential, and how to build trust in every action.</p><a className="text-link" href="#demo">Read the field note <Icon name="arrow" /></a></div>
        </article>
      </section>

      <section className="final-cta" id="demo">
        <div className="cta-copy"><span className="eyebrow">Ready when you are</span><h2>You make the product.<br />We&apos;ll move everything else.</h2><p>See what autonomous freight coordination looks like on your real lanes, with your real workflows.</p><a className="button" href="mailto:hello@wayfinder.example">Book your demo <Icon name="arrow" /></a></div>
        <div className="cta-terminal" aria-hidden="true">
          <div className="terminal-top"><BrandMark /><span>WAYFINDER</span><small><i /> ONLINE</small></div>
          <div className="terminal-center"><span className="smile-eyes"><i /><i /></span><span className="smile-mouth" /><strong>All caught up.</strong><small>27 loads monitored · 0 actions needed</small></div>
          <div className="terminal-bottom"><span>Network health</span><strong>98.4%</strong></div>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><a className="brand" href="#top"><BrandMark /><span>WAYFINDER</span></a><p>Freight operations,<br />finally moving themselves.</p></div>
        <div className="footer-links">
          <div><strong>Platform</strong><a href="#capture">Capture</a><a href="#coordinate">Coordinate</a><a href="#resolve">Resolve</a></div>
          <div><strong>Company</strong><a href="#company">About</a><a href="#stories">Stories</a><a href="#demo">Careers</a></div>
          <div><strong>Connect</strong><a href="mailto:hello@wayfinder.example">Email</a><a href="#demo">LinkedIn</a><a href="#demo">Newsroom</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Wayfinder Systems</span><span>Privacy · Terms · Accessibility</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
```

