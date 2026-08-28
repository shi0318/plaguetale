# Resonance: A Plague Tale Legacy Guide

Independent, source-tracked fan guide for **Resonance: A Plague Tale Legacy** (Asobo Studio / Focus Entertainment, released 27 August 2026).

🔗 **Live site: https://plaguetaleguide.com**

Every fact carries a visible confirmation status (Official / Steam feature / Steam community report / Trailer-preview / Series-based / Unconfirmed) and links back to its source. Data is drawn from the official Steam store page (App 2713000) and clearly labelled player reports; nothing is fabricated.

## Tech stack

- [Astro 5](https://astro.build/) — static output (`output: 'static'`, `trailingSlash: 'always'`)
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite`
- `@astrojs/sitemap` — automatic sitemap generation

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the build locally |

## Project structure

```
src/
├── components/     Shared UI (Header, Footer, StatusBadge, SourcePanel, ...)
├── content/guides/ Markdown guides (release-date, romance, story, combat)
├── data/           Single source of truth (site, sources, official facts, characters, assets)
├── layouts/        Layout.astro (meta + JSON-LD), GuideLayout.astro
├── pages/          Routes: home, /characters/, /collectibles/, /skills/, /walkthrough/, /guide/, site pages
└── styles/         global.css (medieval Plague Tale palette)
```

## Disclaimer

This is an independent fan site. Not affiliated with or endorsed by Asobo Studio or Focus Entertainment. All trademarks belong to their respective owners.
