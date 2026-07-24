# Shared Components

Framework: React 19 with Next.js 16 App Router. Component system: custom React components with vanilla global CSS; no third-party component library.

### `src/components/icon.tsx`

```tsx
import type { SVGProps } from "react";

export type IconName =
  | "arrow"
  | "bolt"
  | "check"
  | "clock"
  | "database"
  | "mail"
  | "menu"
  | "phone"
  | "route"
  | "shield"
  | "spark"
  | "stack";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  bolt: <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />,
  check: <><path d="M20 6 9 17l-5-5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  phone: <path d="M21 16.6v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.1 4 2 2 0 0 1 3.1 1.8h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c1 .3 1.9.6 2.9.7a2 2 0 0 1 1.7 1.9Z" />,
  route: <><circle cx="6" cy="18" r="2" /><circle cx="18" cy="6" r="2" /><path d="M8 18h3a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3" /></>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
  spark: <><path d="m12 3-1.4 4.2A5 5 0 0 1 7.4 10L3 12l4.4 2a5 5 0 0 1 3.2 2.8L12 21l1.4-4.2a5 5 0 0 1 3.2-2.8l4.4-2-4.4-2a5 5 0 0 1-3.2-2.8L12 3Z" /></>,
  stack: <><path d="m12 3-9 5 9 5 9-5-9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></>,
};

export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}
```

### `src/components/product-visuals.tsx`

```tsx
import { Icon } from "./icon";

export function HeroOrchestrator() {
  return (
    <figure className="hero-console" aria-label="Live freight orchestration overview">
      <div className="console-bar">
        <div className="console-dots"><i /><i /><i /></div>
        <span>WAYFINDER / LIVE NETWORK</span>
        <span className="console-live"><i /> Autonomous</span>
      </div>
      <div className="console-stage">
        <div className="console-sidebar">
          <div className="mini-brand"><BrandPulse /></div>
          <span className="active" />
          <span />
          <span />
          <span />
        </div>
        <div className="network-board">
          <div className="board-header">
            <div><small>NETWORK OVERVIEW</small><strong>27 loads in motion</strong></div>
            <div className="board-metric"><small>ON TIME</small><strong>98.4%</strong></div>
          </div>
          <svg className="route-map" viewBox="0 0 800 370" role="img" aria-label="Shipment routes across a regional map">
            <path className="map-line ghost one" d="M50 190 C180 30 280 310 425 130 S690 70 760 185" />
            <path className="map-line ghost two" d="M25 270 C175 180 250 360 390 220 S650 140 775 270" />
            <path className="map-line live-route" d="M76 246 C220 60 326 304 474 144 S675 100 730 195" />
            <circle className="route-halo" cx="76" cy="246" r="18" />
            <circle className="route-node" cx="76" cy="246" r="6" />
            <circle className="route-node" cx="474" cy="144" r="6" />
            <circle className="route-node destination" cx="730" cy="195" r="7" />
          </svg>
          <div className="shipment-card origin-card">
            <span className="card-icon"><Icon name="stack" /></span>
            <div><small>ORIGIN</small><strong>Columbus, OH</strong><span>Ready · 08:40</span></div>
          </div>
          <div className="shipment-card destination-card">
            <span className="card-icon dark"><Icon name="check" /></span>
            <div><small>DESTINATION</small><strong>Atlanta, GA</strong><span>ETA · 16:20</span></div>
          </div>
          <div className="ai-action-card">
            <div className="action-top"><span><Icon name="spark" /> AI ACTION</span><small>JUST NOW</small></div>
            <p>Carrier confirmed. Dock time moved 20 min to protect on-time arrival.</p>
            <div className="action-footer"><span>Load WF–02841</span><span>View trace <Icon name="arrow" /></span></div>
          </div>
        </div>
      </div>
      <figcaption className="sr-only">Wayfinder monitoring live shipments and taking an autonomous scheduling action.</figcaption>
    </figure>
  );
}

function BrandPulse() {
  return <><i /><i /><i /></>;
}

export function CaptureVisual() {
  return (
    <figure className="feature-visual capture-visual" aria-label="Email converted into a structured load">
      <div className="visual-window">
        <div className="window-bar"><span><i /><i /><i /></span><small>INBOX AUTOMATION</small></div>
        <div className="capture-grid">
          <div className="inbox-column">
            <div className="inbox-label"><span>INBOX</span><b>12</b></div>
            <article className="email-preview selected">
              <i className="avatar">HC</i><div><strong>Hearth &amp; Co.</strong><span>Pickup request · Columbus</span><small>10:42 AM</small></div>
            </article>
            <article className="email-preview">
              <i className="avatar gray">NF</i><div><strong>Northfield</strong><span>Re: Delivery window</span><small>9:18 AM</small></div>
            </article>
            <article className="email-preview faded">
              <i className="avatar gray">AB</i><div><strong>Avenue Build</strong><span>BOL attached</span><small>Yesterday</small></div>
            </article>
          </div>
          <div className="extraction-panel">
            <div className="extract-heading"><div><small>NEW LOAD</small><strong>Ready for review</strong></div><span><Icon name="spark" /> 99.6%</span></div>
            <div className="data-grid">
              <label><small>ORIGIN</small><span>Columbus, OH</span></label>
              <label><small>DESTINATION</small><span>Atlanta, GA</span></label>
              <label><small>PICKUP</small><span>Jul 24 · 08:40</span></label>
              <label><small>EQUIPMENT</small><span>53&apos; Dry Van</span></label>
            </div>
            <div className="file-chip"><Icon name="stack" /><span><strong>PO_38421.pdf</strong><small>4 fields captured</small></span><Icon name="check" /></div>
            <button type="button" tabIndex={-1}>Create load <Icon name="arrow" /></button>
          </div>
        </div>
      </div>
    </figure>
  );
}

export function CoordinateVisual() {
  return (
    <figure className="feature-visual coordinate-visual" aria-label="Carrier coordination timeline">
      <div className="coordinate-shell">
        <div className="coordinate-top">
          <div><small>LOAD WF–02841</small><strong>Columbus <Icon name="arrow" /> Atlanta</strong></div>
          <span className="healthy"><i /> On schedule</span>
        </div>
        <div className="timeline">
          <div className="timeline-line"><i /><i /><i /><i /></div>
          <div className="time-labels"><span><b>Booked</b><small>08:42</small></span><span><b>Checked in</b><small>10:16</small></span><span><b>In transit</b><small>Now</small></span><span><b>Delivery</b><small>16:20</small></span></div>
        </div>
        <div className="coordinate-lower">
          <div className="conversation">
            <div className="conversation-title"><span><i className="avatar">JT</i><span><strong>Jordan · Carrier</strong><small>SMS conversation</small></span></span><small>LIVE</small></div>
            <p className="message theirs">At the shipper now. They&apos;re asking for the pickup number.</p>
            <p className="message ours">Pickup #CMB-4382. I&apos;ve also sent it to the dock lead.</p>
            <p className="message theirs short">Got it, thanks.</p>
          </div>
          <div className="automation-log">
            <small>AUTOMATION LOG</small>
            <div><Icon name="phone" /><span><strong>Carrier replied</strong><small>10:18:04</small></span></div>
            <div><Icon name="mail" /><span><strong>Dock notified</strong><small>10:18:06</small></span></div>
            <div><Icon name="database" /><span><strong>TMS updated</strong><small>10:18:07</small></span></div>
          </div>
        </div>
      </div>
    </figure>
  );
}

export function ResolveVisual() {
  return (
    <figure className="feature-visual resolve-visual" aria-label="Freight exception resolved autonomously">
      <div className="resolve-header"><div><small>EXCEPTION CENTER</small><strong>One issue needs attention</strong></div><span>3 resolved today</span></div>
      <article className="exception-card">
        <div className="exception-title"><span className="alert-icon">!</span><div><small>WEATHER DELAY</small><strong>I-75 closure near Lexington</strong></div><span className="risk-pill">42 min risk</span></div>
        <div className="resolution-flow">
          <div><i><Icon name="bolt" /></i><span><small>DETECTED</small><strong>Traffic signal</strong></span></div>
          <span className="flow-line" />
          <div><i><Icon name="route" /></i><span><small>PLANNED</small><strong>Alternate route</strong></span></div>
          <span className="flow-line" />
          <div><i className="lime"><Icon name="check" /></i><span><small>RESOLVED</small><strong>ETA protected</strong></span></div>
        </div>
        <div className="resolution-summary">
          <Icon name="spark" />
          <p><strong>Wayfinder rerouted the driver</strong> and notified the receiver. New ETA is 16:31—still inside the delivery window.</p>
          <span>View action log <Icon name="arrow" /></span>
        </div>
      </article>
      <div className="resolved-card"><span><Icon name="check" /></span><div><small>RESOLVED 24 MIN AGO</small><strong>Missing appointment number</strong></div><span>Handled automatically</span></div>
    </figure>
  );
}
```

