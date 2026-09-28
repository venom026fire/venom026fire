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

await sharp(p("../originals/Prithijit_Quote.png"))
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile(p("../src/assets/quote-portrait.webp"));

await sharp(p("../originals/Prithijit_Experience_Banner.png"))
  .resize({ width: 2000, withoutEnlargement: true })
  .webp({ quality: 78 })
  .toFile(p("../src/assets/experience-banner.webp"));

await sharp(p("../originals/Prithijit_CTA_Banner.png"))
  .resize({ width: 2000, withoutEnlargement: true })
  .webp({ quality: 78 })
  .toFile(p("../src/assets/cta-banner.webp"));

// Social-preview meta image: contain-fit on a blurred backdrop of the same photo so the
// subject's head is never cropped off, regardless of the source photo's aspect ratio.
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const ogSource = p("../originals/Prithijit_Banner.png");

const backdrop = await sharp(ogSource)
  .resize({ width: OG_WIDTH, height: OG_HEIGHT, fit: "cover", position: "attention" })
  .blur(28)
  .modulate({ brightness: 0.55 })
  .toBuffer();

const foreground = await sharp(ogSource)
  .resize({ width: OG_WIDTH, height: OG_HEIGHT, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

await sharp(backdrop)
  .composite([{ input: foreground }])
  .jpeg({ quality: 85 })
  .toFile(p("../public/og-image.jpg"));

console.log("Images optimized.");
