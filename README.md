# Vistaar: website

Marketing / pitch site for **Vistaar**, a Story Ad Performance Lab for reader acquisition.

Built with **React 19 + Vite**.

## Run

```sh
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production bundle into dist/
npm run preview  # serve the built bundle
```

## Structure

```
index.html                Vite entry (document head, #root)
src/main.jsx              React root
src/App.jsx               section composition
src/styles.css            theme tokens + all layout (plain CSS, no framework)
src/data/content.js       all page copy, as data
src/components/           one component per section
src/hooks/                useStickyNav, usePrefersReducedMotion, useReveal, useAudienceMap
public/img/               logo + section illustrations (hand-authored SVG, served from /img/…)
```

Copy lives in `src/data/content.js`, not in the components: edit the pitch there and every
section follows. Components hold layout only.

### Hooks

| Hook | Does |
| --- | --- |
| `useStickyNav` | toggles the nav's bottom edge once the page scrolls |
| `usePrefersReducedMotion` | tracks the `prefers-reduced-motion` media query |
| `useReveal` | per-element scroll reveal via `IntersectionObserver`, fires once |
| `useAudienceMap` | drives the hero's audience-map animation |

`useAudienceMap` runs a seeded LCG rather than `Math.random`, so the demo plays the same
sequence on every load, useful when you're presenting it. It pauses when the panel scrolls
off screen or the tab is hidden, and renders a static end-state under reduced motion.

## Brand

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#0a0a0b` | page background |
| `--panel` | `#131318` | cards, panels |
| `--line` | `#232329` | hairlines, borders |
| `--txt` | `#ececef` | primary text |
| `--txt-2` | `#a2a2af` | body copy |
| `--accent` | `#8ab4ff` | signal / interactive |
| `--warn` | `#f0a08a` | skips, turnoffs, risk |
| `--good` | `#7fe0a4` | positive reactions |

Type: **Inter** for UI and headings, **JetBrains Mono** for labels and data.

Logo files: `logo-mark.svg` (icon), `logo-lockup.svg` (icon + wordmark, for decks),
`favicon.svg`. The mark is readers with arms raised, a growth arrow, and like/heart badges:
readers cheering on a creative that's taking off. `favicon.svg` drops the people and badges,
which turn to mush below ~20px, and keeps just the growth arrow.

`logo-lockup.svg` is generated from `logo-mark.svg` so the two cannot drift apart. If you
redraw the mark, regenerate the lockup rather than editing it by hand.

## Content notes

- Copy tracks the hackathon pitch. Nothing is claimed that the prototype does not do.
- Every illustration is labelled *illustrative*; the hero audience map is a scripted
  animation, not a live model run.
- The report section carries an explicit "how to read the score" note: the output is a
  **directional** signal for comparing creative options, not a guaranteed forecast.
- No pricing numbers are stated: the tiers are the plan, per the pitch.
