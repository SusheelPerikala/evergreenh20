import { Icon } from "./icon";

export function HeroFiltrationVisual() {
  return (
    <figure className="hero-console" aria-label="EvergreenH20 whole-home filtration system overview">
      <div className="console-bar">
        <div className="console-dots"><i /><i /><i /></div>
        <span>EVERGREENH20 / HOME WATER PLAN</span>
        <span className="console-live"><i /> System ready</span>
      </div>
      <div className="console-stage">
        <aside className="console-sidebar" aria-hidden="true">
          <BrandPulse />
          <span className="active" />
          <span />
          <span />
          <span />
        </aside>
        <div className="water-board">
          <div className="board-header">
            <div><small>RECOMMENDED SETUP</small><strong>Whole-home protection</strong></div>
            <div className="board-metric"><small>WATER SOURCE</small><strong>Municipal</strong></div>
          </div>
          <div className="system-rig" aria-hidden="true">
            <span className="pipe pipe-in" /><span className="pipe pipe-out" />
            <div className="media-tank"><i className="tank-cap" /><i className="tank-wave" /><span>CARBON<br />MEDIA</span></div>
            <div className="filter-bank">
              <div className="canister"><i /><span>01</span><small>Sediment</small></div>
              <div className="canister"><i /><span>02</span><small>Carbon</small></div>
              <div className="canister"><i /><span>03</span><small>Polish</small></div>
            </div>
            <span className="flow-dot dot-one" /><span className="flow-dot dot-two" /><span className="flow-dot dot-three" />
          </div>
          <div className="water-plan-card">
            <div className="plan-top"><span><Icon name="spark" /> BUILT FOR YOUR HOME</span><small>PLAN EH–041</small></div>
            <p>A balanced three-stage system with whole-home carbon protection and an under-sink drinking-water finish.</p>
            <div className="plan-footer"><span>4-person household</span><span>Review plan <Icon name="arrow" /></span></div>
          </div>
        </div>
      </div>
      <figcaption className="sr-only">A proposed three-stage whole-home water filtration layout.</figcaption>
    </figure>
  );
}

function BrandPulse() {
  return <div className="mini-mark"><i /><i /><i /></div>;
}

export function ProductSilhouette({ variant }: { variant: "whole" | "ro" | "counter" | "shower" }) {
  return (
    <div className={"product-silhouette silhouette-" + variant} aria-hidden="true">
      {variant === "whole" ? <><i className="tall-tank" /><i className="short-tank" /><span className="product-pipe" /></> : null}
      {variant === "ro" ? <><i className="ro-box" /><span className="ro-canisters"><b /><b /><b /></span><i className="ro-tap" /></> : null}
      {variant === "counter" ? <><i className="counter-body"><b /></i><span className="counter-spout" /></> : null}
      {variant === "shower" ? <><i className="shower-head" /><span className="shower-filter" /><b className="shower-drops" /></> : null}
    </div>
  );
}

export function WholeHomeVisual() {
  return (
    <figure className="feature-visual whole-visual" aria-label="Whole-home filtration system">
      <div className="whole-system" aria-hidden="true">
        <span className="whole-pipe top" /><span className="whole-pipe side" />
        <div className="whole-tank main"><i /><small>Carbon media</small></div>
        <div className="whole-tank pre"><i /><small>Pre-filter</small></div>
        <div className="whole-controller"><Icon name="droplet" /><span><small>SYSTEM</small><strong>Ready</strong></span></div>
      </div>
      <div className="visual-note note-water"><span><Icon name="home" /></span><div><small>WHOLE HOME</small><strong>Every tap, one system.</strong></div></div>
      <div className="visual-note note-service"><span><Icon name="wrench" /></span><div><small>INSTALLATION</small><strong>Guided from start to finish.</strong></div></div>
    </figure>
  );
}

export function DrinkingWaterVisual() {
  return (
    <figure className="feature-visual drinking-visual" aria-label="Under-sink drinking water filtration">
      <div className="kitchen-card">
        <div className="sink-line" aria-hidden="true"><span className="faucet" /><i className="faucet-drop" /></div>
        <div className="quality-readout"><small>DRINKING WATER</small><strong>Crisp. Clear. Ready.</strong><span><i /> System flowing normally</span></div>
        <div className="under-sink">
          <div className="stage"><b>1</b><i /><span><strong>Pre-filter</strong><small>First-pass protection</small></span></div>
          <div className="stage"><b>2</b><i /><span><strong>RO membrane</strong><small>Precision filtration</small></span></div>
          <div className="stage"><b>3</b><i /><span><strong>Mineral finish</strong><small>Balanced taste</small></span></div>
        </div>
      </div>
    </figure>
  );
}

export function OwnershipVisual() {
  return (
    <figure className="feature-visual ownership-visual" aria-label="Replacement filter and product stock overview">
      <div className="service-window">
        <div className="service-heading"><div><small>MY EVERGREENH20</small><strong>Your system at a glance</strong></div><span><i /> All good</span></div>
        <div className="service-grid">
          <article className="life-card"><small>FILTER LIFE</small><div className="life-ring"><strong>82%</strong><span>remaining</span></div><p>Estimated replacement in 5 months.</p></article>
          <div className="supply-list">
            <div className="supply-title"><small>REPLACEMENT FILTERS</small><span>View all</span></div>
            <article><i className="filter-thumb" /><span><strong>Annual carbon set</strong><small>For Whole Home Carbon</small></span><b>In stock</b></article>
            <article><i className="filter-thumb slim" /><span><strong>RO three-pack</strong><small>For Under-Sink RO</small></span><b>In stock</b></article>
            <article><i className="filter-thumb dark" /><span><strong>Shower cartridge</strong><small>For Shower & Bath</small></span><b className="low">4 left</b></article>
          </div>
        </div>
        <div className="service-footer"><Icon name="refresh" /><span><strong>Optional replacement reminders</strong><small>Simple support, without a forced subscription.</small></span><span className="service-manage">Manage</span></div>
      </div>
    </figure>
  );
}
