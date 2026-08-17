# Portfolio — Thuriya Ye Naing

Static portfolio site built with Astro 7. Content mirrors the CV and every claim traces
back to a public repository.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve the built output
```

## Structure

```
src/
├── data/site.ts        # all page content — edit here, not in markup
├── styles/global.css   # design tokens + every animation
├── layouts/Base.astro  # <head>, JSON-LD, scroll progress bar
├── components/ProjectCard.astro
└── pages/index.astro   # section composition
```

To change what the site says, edit `src/data/site.ts`. Nothing else needs touching.

## Why there is no JavaScript

The site ships zero client-side JS. There is no framework, no scroll library, and no
`IntersectionObserver`. Every animation is native CSS:

| Effect | Mechanism |
|---|---|
| Reveal on scroll | `animation-timeline: view()` with `animation-range` |
| Reading progress bar | `animation-timeline: scroll(root block)` |
| Hero entry stagger | `@starting-style` + per-element `--i` transition delay |
| Rotating card border | `@property --angle` animated in a conic gradient |
| Hero aura, name sheen | Long-running keyframes on a blurred conic gradient |

Scroll-driven timelines are wrapped in `@supports (animation-timeline: view())`, so a
browser without support renders the finished state rather than blank content. Everything
motion-related also sits inside `@media (prefers-reduced-motion: no-preference)`.

Colours are authored in `oklch()` with `color-mix()` for tints, sizes use `clamp()`
fluid scales, and the project card layout responds via a container query rather than a
viewport breakpoint. Light mode comes from `prefers-color-scheme`.

## Deploying

Vercel picks this up with no configuration — framework preset Astro, build `npm run build`,
output `dist`. Netlify and Cloudflare Pages work the same way.

Before going live, set the real domain in `astro.config.mjs` (`site:`), which feeds the
canonical URL and JSON-LD.
