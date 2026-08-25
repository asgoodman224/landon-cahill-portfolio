# Landon Cahill — Portfolio

Personal portfolio site: marketing, brand strategy, editorial design and copy.
Built with React 19, TypeScript and Vite, styled with a hand-rolled design system
("Ink & Signal") rather than a component library.

## Running it

```bash
npm install     # first time only
npm run dev     # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Type-check (`tsc -b`) then build to `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | Run oxlint |

## Editing the content

**Almost everything on the site is edited in one file: [`src/data/site.ts`](src/data/site.ts).**
Headline copy, projects and their case studies, experience, skills, contact
details and the About section all live there. You should not need to open a
component to change words.

Two conventions in that file:

- Anything wrapped in `[SQUARE BRACKETS]` is an unverified placeholder. A case
  study chapter still holding one is **hidden from the site** rather than shown
  to visitors, so filling it in is what makes it appear.
- Fields left as `''` degrade on purpose — an empty project `image` renders a
  designed typographic panel, an empty photo `caption` renders no caption.

Images are plain files served from `public/`:

- `public/photos/` — portrait and About photos
- `public/work/` — project and case-study imagery

## Structure

```
src/
  data/site.ts        all site content
  components/         one file per section, plus Primitives.tsx (Reveal, MaskedLines…)
  hooks/index.ts      in-view, scroll, body-lock, reduced-motion
  index.css           the design system: tokens, layout, every section's styles
shot.mjs              dev-only puppeteer harness for visual checks
```

## Deploying

The build output in `dist/` is a fully static site — no server, no environment
variables, no API. Any static host works.

```bash
npm run build       # produces dist/
```

Then either drag `dist/` onto <https://app.netlify.com/drop>, or connect this
repo to Netlify or Vercel (build command `npm run build`, publish directory
`dist`) for deploys on every push.

If you deploy to a **GitHub Pages project site** (`username.github.io/repo/`),
set Vite's `base` to `/repo-name/` in `vite.config.ts` first — otherwise every
asset 404s. Netlify and Vercel serve from the root and need no change.
