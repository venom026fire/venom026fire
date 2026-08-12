# Prithijit Majumder — Portfolio

Live at **[prithijit.com](https://prithijit.com)**.

Personal portfolio for Prithijit Majumder, a BIM Manager and Virtual Design & Construction
specialist. A multi-page site built with React, including an interactive 3D BIM-themed
visualization on nearly every page.

## Stack

- [Vite](https://vitejs.dev) + [React](https://react.dev) + TypeScript
- [React Router](https://reactrouter.com) for client-side routing
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Framer Motion](https://www.framer.com/motion/) for animation
- [Three.js](https://threejs.org) via [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) for the 3D scenes
- [Lucide](https://lucide.dev) for icons

Full attribution in [credits.txt](credits.txt).

## Project structure

```
app/                  Source code (everything below lives here)
  src/
    pages/            One component per route (Home, About, Experience, Projects, ...)
    components/       Shared UI, layout chrome, and 3D scenes
    data/content.ts   All site copy and structured data (experience, projects, skills, etc.)
  public/             Static passthrough assets (CNAME, favicons, résumé/portfolio PDFs)
  originals/          Full-resolution source photos (not shipped in the build)
```

## Local development

```
cd app
npm install
npm run dev
```

## Building

```
cd app
npm run build
```

Outputs to `app/dist`, including a `404.html` copy of `index.html` so deep links
(e.g. `/projects/neom-oxagon-port-city`) resolve correctly on GitHub Pages.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
builds `app/` and publishes `app/dist` to GitHub Pages via GitHub Actions.

The custom domain is served from `app/public/CNAME` and requires two things to stay in sync
on the GitHub side (Settings → Pages), independent of anything in this repo:

- **Custom domain** field set to `prithijit.com`
- DNS at the registrar: four `A` records on the apex (`185.199.108/109/110/111.153`) and a
  `CNAME` record on `www` pointing to `venom026fire.github.io` (bare hostname, no scheme/slash)

If Pages ever reports a successful deployment but the site 404s anyway, toggling the Pages
**Source** setting to "None" and back to "GitHub Actions", then re-running the workflow, has
resolved it before.

## License

Apache 2.0 — see [LICENSE](LICENSE).
