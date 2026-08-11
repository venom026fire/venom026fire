import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const p = (rel) => fileURLToPath(new URL(rel, import.meta.url));

mkdirSync(p("../src/assets"), { recursive: true });

await sharp(p("../originals/Prithijit_Long.png"))
  .resize({ height: 1500, withoutEnlargement: true })
  .webp({ quality: 84 })
  .toFile(p("../src/assets/hero-portrait.webp"));

await sharp(p("../originals/Prithijit_Banner.png"))
  .resize({ width: 1700, withoutEnlargement: true })
  .webp({ quality: 80 })
  .toFile(p("../src/assets/workstation.webp"));

// Stable, unhashed path for social-preview meta tags
await sharp(p("../originals/Prithijit_Banner.png"))
  .resize({ width: 1200, height: 630, fit: "cover", position: "attention" })
  .jpeg({ quality: 82 })
  .toFile(p("../public/og-image.jpg"));

console.log("Images optimized.");
