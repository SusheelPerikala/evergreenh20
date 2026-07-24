# Theme

## Compact token summary

- Ink: `#171916`; ink-soft: `#2a2d28`
- Paper: `#f3f1ea`; white: `#fcfcf8`; fog/border: `#d9d7ce`
- Muted: `#6e716a`; signal: `#c8f45d`; signal-dark: `#2b3b16`
- Atmospheric surfaces: sky `#c9e5f0`, peach `#efc5a7`
- Font: Arial / Helvetica Neue / Helvetica / sans-serif
- Display scale: clamp-based, up to 7.6rem, weight 400, tight line-height and tracking
- Page gutter: `clamp(1rem, 3vw, 2.5rem)`; section spacing: `clamp(5.5rem, 10vw, 10rem)`
- Shape: pill controls; 19–42px feature-panel radii; 1px fog borders
- Motion curve: `cubic-bezier(.2,.7,.2,1)`; respects reduced motion
- Breakpoints: 1100px, 760px, and 430px
- CSS approach: one global vanilla CSS file; no Tailwind configuration or theme provider

## Raw theme source

### `src/app/globals.css`

```css
:root {
  --ink: #171916;
  --ink-soft: #2a2d28;
  --paper: #f3f1ea;
  --white: #fcfcf8;
  --fog: #d9d7ce;
  --muted: #6e716a;
  --signal: #c8f45d;
  --signal-dark: #2b3b16;
  --sky: #c9e5f0;
  --peach: #efc5a7;
  --ease: cubic-bezier(.2, .7, .2, 1);
  --gutter: clamp(1rem, 3vw, 2.5rem);
  --section-space: clamp(5.5rem, 10vw, 10rem);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; background: var(--paper); }
body {
  margin: 0;
  overflow-x: clip;
  background: var(--paper);
  color: var(--ink);
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
}
body, button, a { font: inherit; }
a { color: inherit; text-decoration: none; }
button { color: inherit; }
svg { width: 1em; height: 1em; display: block; }
main { overflow: clip; }
::selection { color: var(--ink); background: var(--signal); }
:focus-visible { outline: 3px solid var(--signal); outline-offset: 4px; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }

.site-header {
  position: fixed;
  z-index: 20;
  top: 1.5rem;
  left: 50%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: min(calc(100% - 2rem), 1380px);
  min-height: 64px;
  padding: .55rem .7rem .55rem 1rem;
  color: var(--white);
  border: 1px solid rgba(255, 255, 255, .12);
  border-radius: 999px;
  background: rgba(23, 25, 22, .9);
  box-shadow: 0 20px 70px rgba(10, 16, 15, .18);
  backdrop-filter: blur(18px);
  transform: translateX(-50%);
}
.brand { display: inline-flex; align-items: center; width: max-content; gap: .7rem; font-size: .77rem; font-weight: 800; letter-spacing: .16em; }
.brand-mark { position: relative; display: inline-flex; align-items: flex-end; gap: 2px; width: 25px; height: 25px; padding: 5px; color: inherit; border: 1px solid currentColor; border-radius: 7px; transform: rotate(-3deg); }
.brand-mark span { display: block; width: 3px; border-radius: 4px; background: currentColor; }
.brand-mark span:nth-child(1) { height: 7px; }
.brand-mark span:nth-child(2) { height: 14px; }
.brand-mark span:nth-child(3) { height: 10px; }
.desktop-nav { display: flex; align-items: center; gap: clamp(1.2rem, 2.5vw, 2.5rem); }
.desktop-nav a, .header-login { color: rgba(255, 255, 255, .68); font-size: .78rem; transition: color .2s ease; }
.desktop-nav a:hover, .header-login:hover { color: var(--white); }
.header-actions { justify-self: end; display: flex; align-items: center; gap: 1.15rem; }
.mobile-menu { display: none; position: relative; }
.mobile-menu summary { display: grid; place-items: center; width: 42px; height: 42px; cursor: pointer; border-radius: 50%; background: rgba(255,255,255,.09); list-style: none; }
.mobile-menu summary::-webkit-details-marker { display: none; }
.mobile-menu summary svg { width: 21px; height: 21px; }
.mobile-menu nav { position: absolute; top: calc(100% + 1rem); right: 0; display: grid; width: min(320px, calc(100vw - 2rem)); padding: .8rem; border: 1px solid rgba(255,255,255,.1); border-radius: 20px; background: var(--ink); box-shadow: 0 24px 70px rgba(0,0,0,.24); }
.mobile-menu nav a { display: flex; align-items: center; justify-content: space-between; padding: 1rem; color: rgba(255,255,255,.78); border-bottom: 1px solid rgba(255,255,255,.08); }
.mobile-menu nav a:last-child { border: 0; }

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  min-height: 54px;
  padding: .9rem 1.35rem;
  gap: .7rem;
  border-radius: 999px;
  background: var(--signal);
  color: var(--signal-dark);
  font-size: .84rem;
  font-weight: 750;
  transition: transform .25s var(--ease), background .25s ease, box-shadow .25s ease;
}
.button svg, .text-link svg, .story-copy a svg { transition: transform .25s var(--ease); }
.button:hover { transform: translateY(-2px); background: #d5ff70; box-shadow: 0 10px 30px rgba(85, 110, 32, .16); }
.button:hover svg, .text-link:hover svg, .story-copy a:hover svg { transform: translateX(4px); }
.button-small { min-height: 46px; padding: .7rem 1.05rem; }
.button-ghost { color: var(--ink); border: 1px solid rgba(23,25,22,.18); background: rgba(252,252,248,.45); backdrop-filter: blur(8px); }
.button-ghost:hover { background: var(--white); box-shadow: none; }
.button-light { color: var(--ink); background: var(--white); }
.text-link { display: inline-flex; align-items: center; gap: .55rem; width: max-content; font-size: .84rem; font-weight: 750; border-bottom: 1px solid rgba(23,25,22,.35); padding-bottom: .25rem; }

.hero {
  position: relative;
  min-height: 100svh;
  padding: clamp(9.5rem, 15vw, 12rem) var(--gutter) 3rem;
  background:
    radial-gradient(circle at 50% 24%, rgba(255,255,255,.9), transparent 35%),
    linear-gradient(160deg, #d7ebef 0%, #c9e5f0 50%, #e6e6d4 100%);
}
.hero::after { content: ""; position: absolute; inset: 0; z-index: 0; opacity: .28; pointer-events: none; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.08'/%3E%3C/svg%3E"); }
.hero-aura { position: absolute; z-index: 0; border-radius: 50%; filter: blur(2px); opacity: .45; }
.hero-aura-one { top: 18%; left: 1%; width: 24vw; height: 24vw; background: radial-gradient(circle, rgba(200,244,93,.5), transparent 68%); }
.hero-aura-two { top: 7%; right: -5%; width: 38vw; height: 38vw; background: radial-gradient(circle, rgba(255,255,255,.8), transparent 65%); }
.hero-copy { position: relative; z-index: 1; max-width: 1180px; margin: 0 auto; text-align: center; }
.eyebrow { display: inline-flex; align-items: center; gap: .55rem; font-size: .67rem; font-weight: 800; letter-spacing: .15em; line-height: 1.2; text-transform: uppercase; }
.live-eyebrow { margin-bottom: 2rem; padding: .55rem .75rem; border: 1px solid rgba(23,25,22,.14); border-radius: 999px; background: rgba(252,252,248,.48); }
.live-eyebrow i, .console-live i, .healthy i { width: 7px; height: 7px; border-radius: 50%; background: #70a723; box-shadow: 0 0 0 4px rgba(112,167,35,.14); animation: pulse 2.2s ease-in-out infinite; }
.hero h1 { margin: 0; font-size: clamp(3.35rem, 7.7vw, 7.6rem); font-weight: 400; line-height: .89; letter-spacing: -.067em; }
.hero h1 span { color: rgba(23,25,22,.42); }
.hero-copy > p { max-width: 650px; margin: 2rem auto 0; color: rgba(23,25,22,.66); font-size: clamp(1rem, 1.7vw, 1.27rem); line-height: 1.45; }
.hero-actions { display: flex; justify-content: center; gap: .7rem; margin-top: 2rem; }
.hero-console { position: relative; z-index: 2; width: min(1220px, 100%); margin: clamp(3.5rem, 7vw, 6rem) auto 0; overflow: hidden; border: 1px solid rgba(23,25,22,.16); border-radius: 26px; background: rgba(252,252,248,.92); box-shadow: 0 45px 110px rgba(46,65,65,.2); }
.console-bar { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; height: 48px; padding: 0 1rem; color: var(--muted); border-bottom: 1px solid var(--fog); font-size: .57rem; font-weight: 800; letter-spacing: .13em; }
.console-dots { display: flex; gap: 5px; }
.console-dots i, .window-bar i { width: 8px; height: 8px; border-radius: 50%; background: var(--fog); }
.console-live { justify-self: end; display: flex; align-items: center; gap: .5rem; color: var(--ink); letter-spacing: 0; text-transform: uppercase; }
.console-stage { display: grid; grid-template-columns: 58px 1fr; min-height: 490px; }
.console-sidebar { display: flex; flex-direction: column; align-items: center; gap: 1.35rem; padding: 1.2rem .8rem; border-right: 1px solid var(--fog); }
.console-sidebar > span { width: 25px; height: 25px; border-radius: 7px; background: #e5e3dc; }
.console-sidebar > span.active { background: var(--ink); box-shadow: inset 0 0 0 7px var(--signal); }
.mini-brand { display: flex; align-items: end; gap: 2px; height: 22px; margin-bottom: .7rem; }
.mini-brand i { width: 3px; border-radius: 3px; background: var(--ink); }
.mini-brand i:nth-child(1) { height: 7px; }.mini-brand i:nth-child(2) { height: 16px; }.mini-brand i:nth-child(3) { height: 11px; }
.network-board { position: relative; min-width: 0; min-height: 490px; overflow: hidden; padding: 1.7rem; background-color: #f7f6f1; background-image: radial-gradient(#c8c7c0 1px, transparent 1px); background-size: 28px 28px; }
.board-header { position: relative; z-index: 2; display: flex; align-items: flex-start; justify-content: space-between; }
.board-header div { display: flex; flex-direction: column; gap: .35rem; }
.board-header small, .shipment-card small, .ai-action-card small { color: var(--muted); font-size: .56rem; font-weight: 800; letter-spacing: .12em; }
.board-header strong { font-size: 1.1rem; font-weight: 650; }
.board-metric { text-align: right; }
.board-metric strong { font-size: 1.55rem; font-weight: 500; }
.route-map { position: absolute; inset: 60px 1.3rem 0; width: calc(100% - 2.6rem); height: calc(100% - 70px); }
.map-line { fill: none; stroke-linecap: round; }
.map-line.ghost { stroke: #d1cfc7; stroke-width: 1.2; stroke-dasharray: 5 7; }
.map-line.two { opacity: .7; }
.map-line.live-route { stroke: var(--ink); stroke-width: 2.4; stroke-dasharray: 8 7; animation: routeDash 14s linear infinite; }
.route-halo { fill: rgba(200,244,93,.32); animation: pulseHalo 2.5s ease-in-out infinite; transform-origin: 76px 246px; }
.route-node { fill: var(--ink); stroke: var(--white); stroke-width: 3px; }.route-node.destination { fill: var(--signal-dark); }
.shipment-card { position: absolute; z-index: 3; display: flex; gap: .75rem; align-items: center; min-width: 190px; padding: .8rem; border: 1px solid var(--fog); border-radius: 13px; background: var(--white); box-shadow: 0 14px 40px rgba(35,35,30,.08); }
.origin-card { left: 5%; bottom: 18%; }.destination-card { right: 5%; top: 31%; }
.shipment-card > div { display: flex; flex-direction: column; gap: .2rem; }
.shipment-card strong { font-size: .74rem; }.shipment-card span:not(.card-icon) { color: var(--muted); font-size: .62rem; }
.card-icon { display: grid; place-items: center; width: 32px; height: 32px; flex: 0 0 auto; border-radius: 9px; background: var(--signal); }.card-icon svg { width: 16px; height: 16px; }.card-icon.dark { color: var(--white); background: var(--ink); }
.ai-action-card { position: absolute; z-index: 4; bottom: 1.3rem; left: 50%; width: min(390px, 47%); padding: 1rem; color: var(--white); border-radius: 16px; background: var(--ink); box-shadow: 0 18px 60px rgba(23,25,22,.2); transform: translateX(-50%); animation: softFloat 6s ease-in-out infinite; }
.action-top, .action-footer { display: flex; align-items: center; justify-content: space-between; }
.action-top > span { display: flex; align-items: center; gap: .45rem; color: var(--signal); font-size: .57rem; font-weight: 800; letter-spacing: .11em; }.action-top svg { width: 14px; height: 14px; }
.ai-action-card p { margin: .7rem 0 .8rem; color: rgba(255,255,255,.82); font-size: .72rem; line-height: 1.4; }
.action-footer { padding-top: .65rem; color: rgba(255,255,255,.46); border-top: 1px solid rgba(255,255,255,.12); font-size: .58rem; }.action-footer span:last-child { display: flex; align-items: center; gap: .3rem; color: rgba(255,255,255,.76); }.action-footer svg { width: 12px; height: 12px; }
.hero-proof { position: relative; z-index: 1; display: flex; justify-content: center; align-items: baseline; gap: .55rem; margin: 1.5rem auto 0; color: rgba(23,25,22,.56); font-size: .69rem; }.hero-proof strong { color: var(--ink); }

.logo-strip { padding: 3rem var(--gutter) 3.5rem; text-align: center; border-bottom: 1px solid var(--fog); background: var(--white); }
.logo-strip p { margin: 0 0 2.2rem; color: var(--muted); font-size: .64rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
.logo-strip > div { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: clamp(1.7rem, 4vw, 4.5rem); }
.wordmark { color: #888a84; font-size: clamp(.8rem, 1.4vw, 1.08rem); font-weight: 750; letter-spacing: -.03em; }
.mark-2 { letter-spacing: .18em; text-transform: uppercase; }.mark-3 { font-weight: 400; font-style: italic; }.mark-4 { padding: .3rem .5rem; color: var(--white); border-radius: 4px; background: #8b8d87; }.mark-5 { font-family: Georgia, serif; font-weight: 400; }.mark-7 { text-transform: uppercase; }

.statement-section { position: relative; display: grid; grid-template-columns: 1fr minmax(0, 9fr) minmax(210px, 2fr); gap: 2rem; align-items: start; padding: var(--section-space) var(--gutter); background: var(--white); }
.section-icon { padding-top: .55rem; }.section-icon .brand-mark { width: 34px; height: 34px; }
.statement-section > p { margin: 0; font-size: clamp(2.8rem, 6vw, 6.4rem); line-height: .91; letter-spacing: -.06em; }
.statement-section > p strong { font-weight: 400; }.statement-section > p span { color: #a4a49e; }
.statement-aside { align-self: end; padding-bottom: .65rem; }.statement-aside > p { margin: .8rem 0 0; color: var(--muted); font-size: .9rem; line-height: 1.45; }

.features-wrap { background: var(--paper); }
.feature-section { display: grid; grid-template-columns: minmax(310px, 4fr) minmax(0, 8fr); gap: clamp(3.5rem, 7vw, 8rem); align-items: center; max-width: 1540px; min-height: 950px; margin: 0 auto; padding: var(--section-space) var(--gutter); border-bottom: 1px solid var(--fog); }
.feature-section.is-reversed { grid-template-columns: minmax(0, 8fr) minmax(310px, 4fr); }
.feature-section.is-reversed .feature-copy { grid-column: 2; grid-row: 1; }.feature-section.is-reversed .feature-demo { grid-column: 1; grid-row: 1; }
.section-index { display: flex; gap: .6rem; align-items: center; margin-bottom: 3.5rem; font-size: .66rem; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
.section-index span:first-child { display: grid; place-items: center; width: 34px; height: 34px; border: 1px solid var(--fog); border-radius: 50%; color: var(--muted); }
.feature-copy h2 { margin: 0; max-width: 520px; font-size: clamp(2.6rem, 4.3vw, 5rem); font-weight: 400; line-height: .96; letter-spacing: -.055em; }
.feature-description { max-width: 490px; margin: 2rem 0 2.5rem; color: var(--muted); font-size: clamp(1rem, 1.5vw, 1.18rem); line-height: 1.52; }
.feature-copy ul { display: grid; max-width: 500px; margin: 0 0 2.7rem; padding: 0; list-style: none; border-top: 1px solid var(--fog); }
.feature-copy li { display: flex; align-items: center; gap: .9rem; padding: .9rem 0; border-bottom: 1px solid var(--fog); font-size: .83rem; }
.feature-copy li > span { display: grid; place-items: center; width: 30px; height: 30px; flex: 0 0 auto; border-radius: 50%; background: var(--white); }.feature-copy li svg { width: 14px; height: 14px; }
.feature-demo { min-width: 0; }
.feature-visual { position: relative; width: 100%; min-height: 660px; margin: 0; overflow: hidden; border-radius: 28px; }

.capture-visual { display: grid; place-items: center; padding: clamp(1rem, 4vw, 4rem); background: linear-gradient(145deg, #e6d7c2, #efc5a7); }
.capture-visual::before { content: ""; position: absolute; inset: 0; opacity: .34; background-image: linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px); background-size: 50px 50px; }
.visual-window { position: relative; z-index: 1; width: min(760px, 100%); overflow: hidden; border: 1px solid rgba(23,25,22,.17); border-radius: 19px; background: var(--white); box-shadow: 0 35px 80px rgba(80,54,35,.18); transform: rotate(-1deg); }
.window-bar { display: flex; align-items: center; justify-content: space-between; height: 45px; padding: 0 1rem; color: var(--muted); border-bottom: 1px solid var(--fog); font-size: .55rem; font-weight: 800; letter-spacing: .14em; }.window-bar > span { display: flex; gap: 5px; }
.capture-grid { display: grid; grid-template-columns: 42% 58%; min-height: 410px; }
.inbox-column { padding: 1rem; border-right: 1px solid var(--fog); background: #f7f6f1; }
.inbox-label { display: flex; align-items: center; justify-content: space-between; margin-bottom: .8rem; color: var(--muted); font-size: .55rem; font-weight: 800; letter-spacing: .12em; }.inbox-label b { display: grid; place-items: center; width: 20px; height: 20px; border-radius: 50%; color: var(--ink); background: var(--signal); font-size: .55rem; }
.email-preview { display: flex; gap: .65rem; margin-bottom: .5rem; padding: .75rem; border: 1px solid transparent; border-radius: 11px; }.email-preview.selected { border-color: var(--fog); background: var(--white); box-shadow: 0 8px 25px rgba(23,25,22,.06); }.email-preview.faded { opacity: .55; }
.avatar { display: grid; place-items: center; width: 29px; height: 29px; flex: 0 0 auto; border-radius: 8px; color: var(--signal-dark); background: var(--signal); font-size: .55rem; font-weight: 800; font-style: normal; }.avatar.gray { color: var(--muted); background: var(--fog); }
.email-preview > div { display: grid; min-width: 0; gap: .16rem; }.email-preview strong { font-size: .66rem; }.email-preview span, .email-preview small { overflow: hidden; color: var(--muted); font-size: .54rem; text-overflow: ellipsis; white-space: nowrap; }.email-preview small { opacity: .7; }
.extraction-panel { padding: 1.4rem; }
.extract-heading { display: flex; justify-content: space-between; gap: 1rem; align-items: center; margin-bottom: 1.3rem; }.extract-heading > div { display: grid; gap: .25rem; }.extract-heading small, .data-grid small { color: var(--muted); font-size: .53rem; font-weight: 800; letter-spacing: .1em; }.extract-heading strong { font-size: .95rem; }.extract-heading > span { display: flex; gap: .35rem; align-items: center; padding: .4rem .55rem; border-radius: 99px; color: var(--signal-dark); background: rgba(200,244,93,.6); font-size: .53rem; font-weight: 800; }.extract-heading svg { width: 12px; height: 12px; }
.data-grid { display: grid; grid-template-columns: 1fr 1fr; gap: .75rem; }.data-grid label { display: grid; gap: .35rem; padding: .65rem; border: 1px solid var(--fog); border-radius: 9px; }.data-grid span { font-size: .65rem; font-weight: 700; }
.file-chip { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: .55rem; margin-top: .8rem; padding: .65rem; border-radius: 9px; background: var(--paper); }.file-chip > svg { width: 16px; height: 16px; }.file-chip > svg:last-child { color: #5d8b2e; }.file-chip > span { display: grid; gap: .15rem; }.file-chip strong { font-size: .6rem; }.file-chip small { color: var(--muted); font-size: .52rem; }
.extraction-panel button { display: flex; align-items: center; justify-content: center; width: 100%; margin-top: .8rem; padding: .65rem; gap: .4rem; color: var(--white); border: 0; border-radius: 9px; background: var(--ink); font-size: .62rem; font-weight: 750; }.extraction-panel button svg { width: 13px; height: 13px; }

.coordinate-visual { display: grid; place-items: center; padding: clamp(1rem, 4vw, 4rem); background: linear-gradient(145deg, #a5c9d6, var(--sky)); }
.coordinate-visual::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 20% 20%, rgba(255,255,255,.5), transparent 24%), radial-gradient(circle at 80% 75%, rgba(200,244,93,.25), transparent 26%); }
.coordinate-shell { position: relative; z-index: 1; width: min(760px, 100%); padding: 1.5rem; border: 1px solid rgba(23,25,22,.16); border-radius: 19px; background: var(--white); box-shadow: 0 35px 80px rgba(28,68,80,.16); transform: rotate(1deg); }
.coordinate-top { display: flex; justify-content: space-between; align-items: center; padding-bottom: 1.15rem; border-bottom: 1px solid var(--fog); }.coordinate-top > div { display: grid; gap: .3rem; }.coordinate-top small, .automation-log > small { color: var(--muted); font-size: .52rem; font-weight: 800; letter-spacing: .11em; }.coordinate-top strong { display: flex; align-items: center; gap: .45rem; font-size: 1.05rem; }.coordinate-top strong svg { width: 14px; }
.healthy { display: flex; align-items: center; gap: .5rem; padding: .42rem .55rem; border: 1px solid #d9e8ba; border-radius: 99px; color: #41620e; background: #f1fadf; font-size: .55rem; font-weight: 750; }
.timeline { padding: 1.6rem .7rem 1.5rem; }.timeline-line { position: relative; display: flex; justify-content: space-between; height: 2px; margin: 0 1.6rem .8rem; background: linear-gradient(90deg, var(--signal-dark) 0 66%, var(--fog) 66%); }.timeline-line i { position: relative; top: -5px; width: 11px; height: 11px; border: 3px solid var(--white); border-radius: 50%; background: var(--signal-dark); box-shadow: 0 0 0 1px var(--signal-dark); }.timeline-line i:nth-child(3) { background: var(--signal); animation: pulseHalo 2s ease infinite; }.timeline-line i:last-child { background: var(--fog); box-shadow: 0 0 0 1px var(--fog); }
.time-labels { display: flex; justify-content: space-between; text-align: center; }.time-labels span { display: grid; gap: .18rem; min-width: 66px; }.time-labels b { font-size: .56rem; }.time-labels small { color: var(--muted); font-size: .5rem; }
.coordinate-lower { display: grid; grid-template-columns: 1.35fr .8fr; gap: .8rem; }
.conversation, .automation-log { min-width: 0; padding: 1rem; border-radius: 12px; background: var(--paper); }
.conversation-title { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }.conversation-title > span { display: flex; align-items: center; gap: .55rem; }.conversation-title > span > span { display: grid; gap: .12rem; }.conversation-title strong { font-size: .62rem; }.conversation-title small { color: var(--muted); font-size: .48rem; }.conversation-title > small { color: #5d8b2e; font-weight: 800; letter-spacing: .1em; }
.message { width: 84%; margin: .45rem 0; padding: .55rem .65rem; border-radius: 9px 9px 9px 2px; background: var(--white); font-size: .55rem; line-height: 1.35; }.message.ours { margin-left: auto; color: var(--white); border-radius: 9px 9px 2px 9px; background: var(--ink); }.message.short { width: 50%; }
.automation-log { display: flex; flex-direction: column; gap: .8rem; }.automation-log > div { display: flex; align-items: center; gap: .55rem; }.automation-log > div > svg { width: 14px; height: 14px; color: var(--muted); }.automation-log span { display: grid; gap: .1rem; }.automation-log strong { font-size: .55rem; }.automation-log small { color: var(--muted); font-size: .48rem; }

.resolve-visual { padding: clamp(1rem, 4vw, 4rem); background: linear-gradient(145deg, #dedbd2, #f1efe8); }
.resolve-visual::after { content: ""; position: absolute; right: -10%; bottom: -20%; width: 60%; height: 60%; border-radius: 50%; background: rgba(200,244,93,.27); filter: blur(40px); }
.resolve-header, .exception-card, .resolved-card { position: relative; z-index: 1; width: min(760px, 100%); margin-inline: auto; }
.resolve-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; padding: 1.1rem 1.3rem; border: 1px solid var(--fog); border-radius: 14px; background: rgba(252,252,248,.78); backdrop-filter: blur(8px); }.resolve-header > div { display: grid; gap: .25rem; }.resolve-header small, .exception-title small, .resolution-flow small, .resolved-card small { color: var(--muted); font-size: .52rem; font-weight: 800; letter-spacing: .11em; }.resolve-header strong { font-size: .86rem; }.resolve-header > span { color: var(--muted); font-size: .55rem; }
.exception-card { padding: 1.35rem; border: 1px solid rgba(23,25,22,.16); border-radius: 18px; background: var(--white); box-shadow: 0 35px 80px rgba(50,49,42,.12); transform: rotate(-.7deg); }
.exception-title { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: .8rem; padding-bottom: 1.15rem; border-bottom: 1px solid var(--fog); }.exception-title > div { display: grid; gap: .25rem; }.exception-title strong { font-size: .83rem; }.alert-icon { display: grid; place-items: center; width: 36px; height: 36px; color: #6e3a20; border-radius: 10px; background: #f2d3bf; font-weight: 800; }.risk-pill { padding: .4rem .55rem; color: #6e3a20; border-radius: 99px; background: #fae8dc; font-size: .52rem; font-weight: 750; }
.resolution-flow { display: flex; align-items: center; justify-content: center; padding: 2.2rem 0; }.resolution-flow > div { display: flex; align-items: center; gap: .55rem; }.resolution-flow > div > i { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; background: var(--paper); }.resolution-flow > div > i.lime { background: var(--signal); }.resolution-flow svg { width: 15px; height: 15px; }.resolution-flow div > span { display: grid; gap: .2rem; }.resolution-flow strong { font-size: .57rem; }.flow-line { width: clamp(20px, 4vw, 62px); height: 1px; margin: 0 .5rem; background: var(--fog); }
.resolution-summary { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: .8rem; padding: 1rem; color: var(--white); border-radius: 12px; background: var(--ink); }.resolution-summary > svg { width: 23px; height: 23px; color: var(--signal); }.resolution-summary p { margin: 0; color: rgba(255,255,255,.7); font-size: .57rem; line-height: 1.45; }.resolution-summary p strong { color: var(--white); }.resolution-summary > span { display: flex; align-items: center; gap: .35rem; color: var(--signal); font-size: .52rem; font-weight: 750; }.resolution-summary span svg { width: 11px; height: 11px; }
.resolved-card { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: .7rem; margin-top: 1rem; padding: .9rem 1rem; border: 1px solid var(--fog); border-radius: 13px; background: rgba(252,252,248,.82); }.resolved-card > span:first-child { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; background: var(--signal); }.resolved-card svg { width: 14px; height: 14px; }.resolved-card > div { display: grid; gap: .2rem; }.resolved-card strong { font-size: .65rem; }.resolved-card > span:last-child { color: var(--muted); font-size: .52rem; }

.human-section { display: grid; grid-template-columns: 1.1fr .9fr; min-height: 860px; color: var(--white); background: var(--ink); }
.human-visual { position: relative; display: grid; place-items: center; min-height: 650px; overflow: hidden; background: radial-gradient(circle at center, #39443b 0, #232723 40%, #171916 72%); }
.human-visual::before { content: ""; position: absolute; inset: 0; opacity: .1; background-image: linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px); background-size: 48px 48px; }
.human-orbit { position: absolute; border: 1px solid rgba(200,244,93,.3); border-radius: 50%; }.orbit-one { width: 60%; aspect-ratio: 1; }.orbit-two { width: 83%; aspect-ratio: 1; border-color: rgba(255,255,255,.12); }
.human-core { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 220px; aspect-ratio: 1; text-align: center; border: 1px solid rgba(255,255,255,.14); border-radius: 50%; background: rgba(23,25,22,.82); box-shadow: 0 0 0 15px rgba(200,244,93,.06); }.human-core .brand-mark { margin-bottom: 1.3rem; color: var(--signal); }.human-core small { color: rgba(255,255,255,.48); font-size: .53rem; font-weight: 800; letter-spacing: .13em; }.human-core strong { margin-top: .5rem; font-size: .9rem; }
.human-note { position: absolute; z-index: 3; display: flex; align-items: center; gap: .7rem; padding: .7rem; border: 1px solid rgba(255,255,255,.15); border-radius: 13px; background: rgba(34,38,34,.88); box-shadow: 0 20px 60px rgba(0,0,0,.2); backdrop-filter: blur(10px); }.human-note i { display: grid; place-items: center; width: 34px; height: 34px; color: var(--ink); border-radius: 50%; background: var(--signal); font-size: .57rem; font-weight: 800; font-style: normal; }.human-note > span:first-child { display: grid; place-items: center; width: 34px; height: 34px; color: var(--signal); border-radius: 50%; background: rgba(200,244,93,.1); }.human-note svg { width: 17px; height: 17px; }.human-note > span, .human-note > div { display: grid; gap: .2rem; }.human-note small { color: rgba(255,255,255,.46); font-size: .47rem; font-weight: 800; letter-spacing: .1em; }.human-note strong { font-size: .59rem; }.note-one { top: 20%; left: 10%; animation: softFloat 7s ease-in-out infinite; }.note-two { right: 8%; bottom: 20%; animation: softFloat 7s 1.5s ease-in-out infinite; }
.human-copy { display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding: var(--section-space) clamp(2.5rem, 7vw, 8rem); }.human-copy .eyebrow { color: var(--signal); }.human-copy h2 { max-width: 600px; margin: 2rem 0; font-size: clamp(3rem, 5.3vw, 6rem); font-weight: 400; line-height: .93; letter-spacing: -.06em; }.human-copy p { max-width: 510px; margin: 0 0 2.5rem; color: rgba(255,255,255,.58); font-size: 1.05rem; line-height: 1.55; }

.stories-section { padding: var(--section-space) var(--gutter); background: var(--white); }
.stories-header { display: flex; justify-content: space-between; align-items: end; max-width: 1480px; margin: 0 auto 4.5rem; }.stories-header h2, .news-heading h2 { margin: 1.5rem 0 0; font-size: clamp(3rem, 5.5vw, 6.4rem); font-weight: 400; line-height: .92; letter-spacing: -.06em; }
.story-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; max-width: 1480px; margin: auto; }
.story-card { min-width: 0; }.story-art { position: relative; aspect-ratio: 1.08; overflow: hidden; border-radius: 19px; }.art-boxes { color: #f7f0e5; background: #9f6d45; }.art-grid { color: var(--ink); background: #cbd8c0; }.art-rings { color: var(--white); background: #2d454d; }
.story-art::before { content: ""; position: absolute; inset: 0; opacity: .28; background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px); background-size: 36px 36px; }
.art-number { position: absolute; top: 1.2rem; left: 1.2rem; z-index: 2; display: grid; place-items: center; width: 34px; height: 34px; border: 1px solid currentColor; border-radius: 50%; font-size: .65rem; font-weight: 800; }
.art-object { position: absolute; top: 50%; left: 50%; display: flex; align-items: end; gap: 5px; transform: translate(-50%, -50%); }.art-object i { display: block; width: clamp(40px, 7vw, 92px); height: clamp(55px, 10vw, 130px); border: 1px solid currentColor; background: rgba(255,255,255,.12); box-shadow: inset -10px -10px 30px rgba(0,0,0,.06); transform: skewY(-8deg); }.art-object i:nth-child(2) { height: clamp(80px, 14vw, 180px); background: rgba(255,255,255,.25); }.art-object i:nth-child(3) { height: clamp(48px, 8vw, 105px); }
.art-rings .art-object { width: 52%; aspect-ratio: 1; border: 1px solid currentColor; border-radius: 50%; }.art-rings .art-object::before, .art-rings .art-object::after { content: ""; position: absolute; inset: 18%; border: 1px solid currentColor; border-radius: 50%; }.art-rings .art-object::after { inset: 36%; background: var(--signal); }.art-rings .art-object i { display: none; }
.story-metric { position: absolute; right: 1rem; bottom: 1rem; display: flex; flex-direction: column; min-width: 120px; padding: .8rem; color: var(--ink); border-radius: 12px; background: var(--white); }.story-metric strong { font-size: 1.35rem; font-weight: 500; letter-spacing: -.05em; }.story-metric small { color: var(--muted); font-size: .55rem; }
.story-copy { padding: 1.3rem .2rem; }.story-copy > span { color: var(--muted); font-size: .65rem; }.story-copy h3 { margin: 1rem 0 1.4rem; font-size: clamp(1.35rem, 2.25vw, 2.15rem); font-weight: 500; line-height: 1.08; letter-spacing: -.04em; }.story-copy a { display: inline-flex; align-items: center; gap: .45rem; font-size: .73rem; font-weight: 750; }.story-copy a svg { width: 14px; height: 14px; }

.news-section { padding: 0 var(--gutter) var(--section-space); background: var(--white); }
.news-heading { max-width: 1480px; margin: 0 auto 4rem; padding-top: var(--section-space); border-top: 1px solid var(--fog); }.news-heading h2 { max-width: 980px; }
.news-feature { display: grid; grid-template-columns: 1.15fr .85fr; max-width: 1480px; margin: auto; overflow: hidden; border: 1px solid var(--fog); border-radius: 24px; background: var(--paper); }
.news-art { position: relative; min-height: 520px; overflow: hidden; background: linear-gradient(145deg, #cbdce5, #f0dfcb); }.news-grid { position: absolute; inset: 0; opacity: .38; background-image: radial-gradient(#6e716a 1px, transparent 1px); background-size: 26px 26px; }.news-route { position: absolute; top: 50%; left: 50%; width: 70%; height: 35%; border: 2px dashed var(--ink); border-color: var(--ink) transparent transparent transparent; border-radius: 50%; transform: translate(-50%, -40%) rotate(-8deg); }.news-route i { position: absolute; width: 18px; height: 18px; border: 4px solid var(--white); border-radius: 50%; background: var(--ink); }.news-route i:nth-child(1) { top: -10px; left: 5%; }.news-route i:nth-child(2) { top: -45px; left: 35%; background: var(--signal); }.news-route i:nth-child(3) { top: -35px; right: 30%; }.news-route i:nth-child(4) { top: 8px; right: 4%; background: var(--signal); }.news-art > .brand-mark { position: absolute; right: 2rem; bottom: 2rem; width: 58px; height: 58px; padding: 13px; border-radius: 14px; background: var(--white); box-shadow: 0 16px 40px rgba(23,25,22,.12); }
.news-copy { display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding: clamp(2.5rem, 6vw, 7rem); }.news-copy > span { color: var(--muted); font-size: .67rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }.news-copy h3 { margin: 1.5rem 0; font-size: clamp(2.1rem, 3.4vw, 4.2rem); font-weight: 400; line-height: .96; letter-spacing: -.055em; }.news-copy p { margin: 0 0 2.2rem; color: var(--muted); line-height: 1.5; }

.final-cta { display: grid; grid-template-columns: 1.1fr .9fr; min-height: 760px; padding: var(--section-space) var(--gutter); color: var(--white); background: #31322d; }
.cta-copy { display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding-left: clamp(0rem, 5vw, 6rem); }.cta-copy .eyebrow { color: var(--signal); }.cta-copy h2 { margin: 2rem 0; font-size: clamp(3.5rem, 6.7vw, 7.6rem); font-weight: 400; line-height: .88; letter-spacing: -.07em; }.cta-copy p { max-width: 590px; margin: 0 0 2.6rem; color: rgba(255,255,255,.58); font-size: 1.05rem; line-height: 1.5; }
.cta-terminal { align-self: center; justify-self: center; display: grid; grid-template-rows: auto 1fr auto; width: min(520px, 90%); aspect-ratio: 1.12; overflow: hidden; color: var(--ink); border: 12px solid #e2dfd5; border-radius: 42px; background: var(--white); box-shadow: 0 35px 100px rgba(0,0,0,.3), inset 0 0 0 1px rgba(23,25,22,.12); transform: rotate(3deg); }
.terminal-top { display: flex; align-items: center; gap: .6rem; padding: 1.25rem; border-bottom: 1px solid var(--fog); }.terminal-top .brand-mark { width: 25px; height: 25px; }.terminal-top > span { font-size: .65rem; font-weight: 800; letter-spacing: .14em; }.terminal-top small { display: flex; align-items: center; gap: .4rem; margin-left: auto; color: var(--muted); font-size: .5rem; font-weight: 800; }.terminal-top small i { width: 6px; height: 6px; border-radius: 50%; background: #70a723; }
.terminal-center { display: flex; flex-direction: column; align-items: center; justify-content: center; }.smile-eyes { display: flex; gap: 2.8rem; }.smile-eyes i { width: 10px; height: 18px; border-radius: 50%; background: var(--ink); }.smile-mouth { width: 95px; height: 45px; margin: .3rem 0 1.6rem; border-bottom: 8px solid var(--ink); border-radius: 0 0 70px 70px; }.terminal-center strong { font-size: clamp(1.3rem, 2.5vw, 2rem); font-weight: 500; letter-spacing: -.04em; }.terminal-center small { margin-top: .4rem; color: var(--muted); font-size: .62rem; }
.terminal-bottom { display: flex; justify-content: space-between; padding: 1.25rem; border-top: 1px solid var(--fog); font-size: .62rem; }.terminal-bottom span { color: var(--muted); }.terminal-bottom strong { font-size: .72rem; }

footer { display: grid; grid-template-columns: 1fr 1fr; padding: 5rem var(--gutter) 1.5rem; color: var(--white); background: var(--ink); }
.footer-brand .brand { margin-bottom: 2rem; }.footer-brand p { color: rgba(255,255,255,.45); font-size: 1.1rem; line-height: 1.35; }
.footer-links { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }.footer-links div { display: flex; flex-direction: column; align-items: flex-start; gap: .9rem; }.footer-links strong { margin-bottom: .6rem; color: rgba(255,255,255,.4); font-size: .6rem; letter-spacing: .13em; text-transform: uppercase; }.footer-links a { color: rgba(255,255,255,.75); font-size: .78rem; }.footer-links a:hover { color: var(--signal); }
.footer-bottom { grid-column: 1 / -1; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; margin-top: 5rem; padding-top: 1.5rem; color: rgba(255,255,255,.38); border-top: 1px solid rgba(255,255,255,.12); font-size: .61rem; }.footer-bottom a { justify-self: end; color: rgba(255,255,255,.75); }

@keyframes pulse { 50% { transform: scale(.7); opacity: .6; } }
@keyframes pulseHalo { 50% { transform: scale(1.25); opacity: .55; } }
@keyframes routeDash { to { stroke-dashoffset: -100; } }
@keyframes softFloat { 50% { transform: translate(-50%, -6px); } }
.human-note.note-one, .human-note.note-two { animation-name: noteFloat; }
@keyframes noteFloat { 50% { transform: translateY(-8px); } }
.reveal { opacity: 1; transform: none; }

@media (max-width: 1100px) {
  .site-header { grid-template-columns: 1fr auto; }
  .desktop-nav, .header-login { display: none; }
  .mobile-menu { display: block; }
  .feature-section, .feature-section.is-reversed { grid-template-columns: 1fr; min-height: auto; }
  .feature-section.is-reversed .feature-copy, .feature-section.is-reversed .feature-demo { grid-column: 1; }
  .feature-section.is-reversed .feature-copy { grid-row: 1; }.feature-section.is-reversed .feature-demo { grid-row: 2; }
  .feature-copy { display: grid; grid-template-columns: .9fr 1.1fr; column-gap: 4rem; align-items: start; }
  .section-index { grid-column: 1 / -1; margin-bottom: 2rem; }.feature-copy h2 { grid-row: 2 / 5; }.feature-description { margin-top: 0; }.feature-copy ul, .feature-copy .text-link { grid-column: 2; }
  .feature-visual { min-height: 620px; }
  .human-section { grid-template-columns: 1fr; }.human-copy { min-height: 650px; }
  .final-cta { grid-template-columns: 1fr; gap: 5rem; }.cta-copy { padding-left: 0; }.cta-terminal { width: min(560px, 90%); }
}

@media (max-width: 760px) {
  :root { --section-space: 5.5rem; }
  .site-header { top: .8rem; width: calc(100% - 1rem); min-height: 58px; padding-left: .8rem; }
  .site-header .brand span:last-child { display: none; }
  .header-actions { gap: .45rem; }.button-small { min-height: 40px; padding: .55rem .8rem; font-size: .68rem; }.button-small svg { display: none; }
  .mobile-menu summary { width: 40px; height: 40px; }
  .hero { padding-top: 8rem; }
  .hero h1 { font-size: clamp(3rem, 15vw, 5rem); line-height: .92; }
  .hero-copy > p { font-size: 1rem; }
  .hero-actions { flex-direction: column; align-items: center; }.hero-actions .button { width: min(100%, 290px); }
  .hero-console { margin-top: 3.5rem; border-radius: 18px; }
  .console-bar { grid-template-columns: 1fr 1fr; }.console-bar > span:nth-child(2) { display: none; }
  .console-stage { grid-template-columns: 1fr; min-height: 480px; }.console-sidebar { display: none; }.network-board { min-height: 480px; padding: 1rem; }.board-header { align-items: center; }.board-header strong { font-size: .85rem; }.board-metric strong { font-size: 1.1rem; }
  .route-map { inset: 70px .5rem 0; width: calc(100% - 1rem); }.origin-card { left: 3%; bottom: 27%; }.destination-card { right: 3%; top: 34%; }.shipment-card { min-width: 145px; padding: .6rem; }.shipment-card strong { font-size: .6rem; }.card-icon { width: 26px; height: 26px; }.ai-action-card { bottom: .8rem; width: calc(100% - 1.6rem); }.ai-action-card p { font-size: .65rem; }
  .hero-proof { flex-wrap: wrap; line-height: 1.5; }.hero-proof span:last-child { width: 100%; }
  .logo-strip > div { gap: 1.4rem 2rem; }
  .statement-section { grid-template-columns: 1fr; }.section-icon { display: none; }.statement-section > p { font-size: clamp(2.7rem, 12.5vw, 4.5rem); }.statement-aside { max-width: 250px; }
  .feature-copy { display: block; }.feature-copy h2 { font-size: clamp(2.7rem, 12vw, 4rem); }.feature-description { margin-top: 1.5rem; }.feature-visual { min-height: 520px; border-radius: 20px; }
  .visual-window, .coordinate-shell { width: 700px; max-width: none; transform: scale(.7) rotate(-1deg); }.coordinate-shell { transform: scale(.7) rotate(1deg); }.capture-visual, .coordinate-visual { justify-content: center; padding: 0; }.capture-grid { min-height: 390px; }
  .resolve-visual { display: flex; flex-direction: column; justify-content: center; padding: 1rem; }.resolve-header, .exception-card, .resolved-card { width: 620px; max-width: none; transform: scale(.72); }.resolve-header { margin-bottom: -2rem; transform-origin: bottom center; }.exception-card { transform-origin: center; }.resolved-card { margin-top: -2rem; transform-origin: top center; }
  .human-visual { min-height: 560px; }.human-core { width: 170px; }.note-one { top: 13%; left: 4%; }.note-two { right: 3%; bottom: 14%; }.human-copy { min-height: auto; padding: 5.5rem var(--gutter); }.human-copy h2 { font-size: clamp(3rem, 13vw, 4.6rem); }
  .stories-header { display: block; }.stories-header .text-link { margin-top: 2rem; }.story-grid { grid-template-columns: 1fr; gap: 3rem; }.story-art { aspect-ratio: 1.25; }
  .news-feature { grid-template-columns: 1fr; }.news-art { min-height: 360px; }.news-copy { padding: 2rem; }
  .final-cta { min-height: auto; }.cta-copy h2 { font-size: clamp(3.2rem, 14vw, 5rem); }.cta-terminal { width: 100%; border-width: 8px; border-radius: 28px; transform: rotate(1.5deg); }.terminal-center { min-height: 250px; }
  footer { grid-template-columns: 1fr; }.footer-links { margin-top: 3rem; }.footer-bottom { grid-template-columns: 1fr; gap: .8rem; }.footer-bottom a { justify-self: start; }
}

@media (max-width: 430px) {
  .button-small { font-size: 0; }.button-small::before { content: "Demo"; font-size: .68rem; }
  .feature-visual { min-height: 470px; }
  .visual-window, .coordinate-shell { transform: scale(.58) rotate(-1deg); }.coordinate-shell { transform: scale(.58) rotate(1deg); }
  .resolve-header, .exception-card, .resolved-card { transform: scale(.6); }.resolve-header { margin-bottom: -3.5rem; }.resolved-card { margin-top: -3.5rem; }
  .human-note { transform: scale(.88); }.note-one { left: -2%; }.note-two { right: -4%; }
  .footer-links { grid-template-columns: 1fr 1fr; }.footer-links div:last-child { margin-top: 1rem; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
  .reveal { animation: none; }
}
```

