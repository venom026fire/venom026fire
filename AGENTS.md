# AGENTS.md

Context for AI agents (and future humans) working on this repository. Read this before
making changes — most of it exists because something non-obvious broke once.

## What this is

The personal portfolio of Prithijit Majumder (a BIM Manager / VDC specialist), live at
**[prithijit.com](https://prithijit.com)**. A multi-page React site with per-project 3D
visualizations. All real content — résumé history, project list, skills — comes from his
actual CV and project documents, not invented copy.

## Golden rules

1. **Never `git commit` or `git push` unless explicitly asked in that turn.** The owner
   commits manually. This has been stated repeatedly — don't re-ask, just don't do it.
2. **Never fabricate résumé/project facts.** Every claim on this site (dates, team sizes,
   LOD levels, project scope) traces back to a CV, a project document, or a public source
   the owner provided. If asked to add/update content, ask for or derive it from a real
   source — don't invent plausible-sounding details.
3. **Never publish PII beyond what's already public-facing**: no home street address, no
   date of birth. City-level location is fine (already shown). The résumé PDFs served from
   `/files/` will always contain more detail than the site itself does — that's fine, that's
   the owner's call, not something to reconcile.
4. **Internal/confidential documents are for extraction, not serving.** If the owner shares
   an internal client/employer document (e.g. an internal project PDF marked "not for public
   serving"), pull the factual content into the site's own copy — never add the file itself
   to `public/`, and don't cite it by name or reproduce its branding/letterhead language.
   Cross-reference with public sources (news coverage, official project pages) where possible
   before publishing specifics like budgets or completion percentages.
5. **Large images always go through the optimization pipeline before import.** Source photos
   and renders arrive as multi-megabyte PNGs. Never import a raw original into `src/` — see
   "Image pipeline" below.

## Stack

Vite + React + TypeScript, React Router (client-side routing), Tailwind CSS, Framer Motion,
Three.js via React Three Fiber + drei (3D scenes), lucide-react (icons — note: this version
has **no brand/logo icons**; see `src/components/icons/BrandIcons.tsx` for hand-drawn
LinkedIn/X/Facebook/YouTube glyphs and `icons/DiscordIcon.tsx`).

## Repository layout

```
/                       Repo root — CI config + legal/docs only, no app code
  .github/workflows/deploy.yml   Builds app/ and deploys to GitHub Pages on push to main
  README.md, LICENSE, credits.txt
  AGENTS.md             This file

app/                    Everything else lives here
  src/
    pages/              One file per route: Home, About, Experience, Projects,
                         ProjectDetail (dynamic /projects/:slug), Skills, Contact, NotFound
    routes.tsx          Route table + page-transition wrapper (AnimatePresence)
    App.tsx             Persistent chrome: Navbar, ScrollProgress, ScrollToTop, Footer, BackToTop
    data/content.ts     SINGLE SOURCE OF TRUTH for all site copy — see below
    components/
      layout/           Navbar, Footer, ScrollProgress, ScrollToTop, BackToTop, SocialLinks
      ui/               Reveal, CornerFrame, DimensionDivider, PageHeader, SpecRow, StatCounter
      three/            All 3D scenes — see "3D scenes" below
      icons/            Hand-drawn brand icons (lucide has none)
      ProjectCard.tsx, CTABanner.tsx, QuoteBlock.tsx   Shared cross-page blocks
    assets/             Optimized, imported images (webp) — Vite hashes these into the build
    hooks/
  public/               Static passthrough files served as-is: CNAME, favicons, résumé/
                         portfolio PDFs, og-image.jpg
  originals/            Full-resolution source masters (photos, renders) — NOT imported
                         directly, NOT served; input to the optimize-*.mjs scripts only
  scripts/
    optimize-images.mjs       Regenerates hero/workstation webp + og-image from originals/
    optimize-occ-images.mjs   Same pattern for the OCC project's renders (originals/occ/,
                               currently deleted locally after one-time processing — see below)
    postbuild.mjs             Copies dist/index.html → dist/404.html (GitHub Pages SPA fallback)
```

## Commands (run from `app/`)

```
npm install
npm run dev              # local dev server
npm run build             # tsc -b && vite build && postbuild.mjs  →  app/dist
npm run lint               # oxlint
npm run preview            # serve the production build locally
npm run optimize-images    # regenerate hero/workstation webp from app/originals/*.png
```

There is no test suite. `npm run build` (which includes a full TypeScript check) and
`npm run lint` are the correctness gates — always run both before considering a change done.

## Content model (`src/data/content.ts`)

Everything text/data-driven on the site is one TypeScript module. To change site content,
edit this file — don't hunt for hardcoded strings in page components (if you find one,
that's a bug; move it here).

Key exports:
- `profile` — name, role, tagline, contact info, résumé/portfolio file paths, socials
- `bio` — About-page narrative paragraphs
- `capabilities` — the 4 "what he does" cards
- `process` — the 5 LOD-stage cards (also drives the interactive 3D model on About)
- `experience` — career timeline, most-recent-first, `current: true` on exactly one entry
- `projects` — the project grid + detail pages. See `Project` type for all fields, including
  optional ones used for the flagship/current project pattern:
  - `status: "ongoing"` marks a project as the Home-page spotlight (only one at a time is
    assumed; `Home.tsx` does `projects.find(p => p.status === "ongoing")`)
  - `coverImage` + `renderCredit` — a real photo instead of the abstract 3D category model
    on that project's detail page
  - `subBuildings` — the sub-component breakdown grid (name/description/images[]) for
    projects with multiple distinct buildings/phases
  - `sources` — external citations shown as a "Further reading" list
  - Category strings must exactly match an entry in `projectCategories`, since that array
    drives both the filter UI and `CategoryModel.tsx`'s per-category 3D geometry
- `skillGroups` — categorized skill bars (grouped, not a flat list)
- `education`, `quote`, `navLinks` (nav uses these for both desktop and mobile menus)

When adding a project, prefer reusing an existing `category` so it picks up the matching 3D
model in `CategoryModel.tsx` automatically. Only add a new category (and a new case in
`CategoryModel.tsx`) if nothing existing fits.

## Visual language — don't drift into generic dark-SaaS styling

The design is deliberately "technical drawing / blueprint" themed, not just "dark mode with
an accent color." When adding UI, reuse these rather than inventing new patterns:
- `CornerFrame` — L-shaped corner brackets (CAD viewport framing) around photos/cards
- `DimensionDivider` — architectural dimension-line section separator with a label
- `PageHeader` — per-page header with a "Sheet NN" code (`navLinks[].code`) + eyebrow + title
- Fonts: `font-display` (Sora, headings), default sans (Inter, body), `font-mono`
  (JetBrains Mono, for labels/data/codes/stats — this is what carries the technical feel)
- Palette: `ink-*` (near-black backgrounds), `gold-*` (primary accent), `blue-*` (secondary/
  cyan accent), `mist-*` (text greys) — defined in `tailwind.config.js`
- `StatCounter` for any numeric stat that should count up on scroll into view

## 3D scenes (`src/components/three/`)

Every scene follows the same pattern: a `*Model.tsx` (the actual meshes/geometry, built from
shared primitives) + a `*Scene.tsx` (Canvas + lighting + OrbitControls wrapper), loaded via
the generic `LazyScene` component so each one is its own code-split chunk and only ever one
Canvas is mounted at a time (route-scoped).

```tsx
<LazyScene
  loader={() => import("../components/three/SomeScene")}
  sceneProps={{ foo: "bar" }}
  className="aspect-[16/9] w-full"
  label="Loading…"
/>
```

Existing scenes:
- `BlueprintScene` / `StationModel` — Home hero, generic elevated-station wireframe
- `CategoryScene` / `CategoryModel` — per-category illustrative model on project detail
  pages (rail/aviation/cultural/residential/heritage/industrial/landscape)
- `LODScene` / `LODModel` — interactive, stage-driven (0–4) model on the About page
- `ClashScene` / `ClashModel` — interactive clash-detection demo on the Skills page

Shared geometry helpers live in `primitives.tsx` (`Beam`, `Column`, `TaperedColumn`, `Node`,
`ScanPoints`, `Tag`). Reuse these for any new model instead of writing raw `<mesh>` JSX.

**Important footgun**: `LazyScene`'s `useMemo(() => lazy(loader), [])` intentionally has an
empty dependency array. Call sites pass a fresh arrow function every render; if the memo
depended on `loader`, React would re-run `lazy()` every render and Suspense would reload the
chunk in a loop. Don't "fix" that empty array.

All scenes respect `prefers-reduced-motion` via `usePrefersReducedMotion()` (disables
auto-rotate). `SceneErrorBoundary` + `SceneFallback` give a graceful degrade if WebGL is
unavailable — don't remove them.

## Image pipeline

Three tiers, don't blur them:
1. **`originals/`** — full-resolution masters (a personal photo, a client render). Never
   imported into the app, never served. Gitignored is NOT required for these two existing
   personal-photo masters (they're intentionally committed as the only copy) — but large
   one-off batches (like a project's renders) are fine to leave un-committed/local-only if
   the source is recoverable elsewhere (e.g. still in the owner's Drive). Use judgment.
2. **`scripts/optimize-*.mjs`** — sharp-based scripts that resize + convert to WebP. Follow
   the existing pattern (see `optimize-images.mjs`) rather than hand-processing images.
3. **`src/assets/`** — the optimized WebP output, imported directly in `content.ts` or
   components so Vite hashes and bundles them. This is the only tier that ships.

Typical source renders/photos arrive as 18–40MB PNGs; after this pipeline they should land
around 80–500KB WebP each. If an image import is >1MB, it wasn't run through sharp — fix that
before committing, don't ship it as-is.

## Deployment & GitHub Pages

`.github/workflows/deploy.yml` builds `app/` on every push to `main` and publishes
`app/dist` via `actions/deploy-pages`. Two things about this are **not** stored in this repo
and will not show up in `git diff` if they break:

1. **Pages source must be "GitHub Actions"** in Settings → Pages (not "Deploy from a
   branch"). If someone switches this, GitHub can silently drop the custom domain
   association even though the workflow keeps reporting success and the default
   `owner.github.io/repo/` URL 404s on everything. Fix: Settings → Pages → Source → "None" →
   Save → back to "GitHub Actions" → Save → re-run the workflow (`workflow_dispatch` is
   wired up, no new commit needed).
2. **Custom domain (`prithijit.com`) is a Settings field, independent of `app/public/CNAME`.**
   The CNAME file in the build artifact is necessary but not sufficient — the domain also has
   to be entered in Settings → Pages → Custom domain. DNS requirements (already correctly
   configured as of this writing): 4 `A` records on the apex → `185.199.108/109/110/111.153`,
   and a `CNAME` record on `www` → `venom026fire.github.io` (bare hostname — **no** `https://`
   prefix or trailing slash; that specific mistake produces GitHub's "DNS record could not be
   retrieved" error even though the record exists).

Because there's client-side routing (`/projects/:slug` etc.) and GitHub Pages has no
server-side rewrites:
- `vite.config.ts` uses `base: '/'` (absolute), not relative — nested routes would otherwise
  resolve asset URLs against the wrong path depth.
- `scripts/postbuild.mjs` copies `dist/index.html` → `dist/404.html` so a direct load of a
  deep link 404s into the SPA shell instead of a dead end, and React Router then renders the
  right page from `location`.

If you ever need to debug "is this actually a code problem or a GitHub Pages state problem,"
check the public REST API first (works unauthenticated for a public repo, no token needed):
`api.github.com/repos/<owner>/<repo>/actions/runs`, `.../deployments`, and diff against
`curl -sI` on the live URLs — don't guess from the Settings UI alone.
