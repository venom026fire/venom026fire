import { copyFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const p = (rel) => fileURLToPath(new URL(rel, import.meta.url));

// GitHub Pages has no server-side rewrites. A direct load of a deep route
// (e.g. /projects/neom-oxagon) 404s unless a 404.html exists — GH Pages serves
// that for any unknown path, and since it's a copy of index.html, the React
// Router client picks up the original URL and renders the right route.
copyFileSync(p("../dist/index.html"), p("../dist/404.html"));

console.log("postbuild: wrote dist/404.html (SPA deep-link fallback)");
