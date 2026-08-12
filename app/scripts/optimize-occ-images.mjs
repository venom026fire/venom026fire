import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const p = (rel) => fileURLToPath(new URL(rel, import.meta.url));

mkdirSync(p("../src/assets/occ"), { recursive: true });

const HERO = ["aerial-view"];
const WIDE = ["aerial-view-2"];
const GALLERY = [
  "auditorium",
  "cinema",
  "flexible-theatre",
  "theatre-foyer",
  "archives",
  "library",
  "plaza-01",
  "plaza-02",
];

for (const name of HERO) {
  await sharp(p(`../originals/occ/${name}.png`))
    .resize({ width: 2400, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(p(`../src/assets/occ/${name}.webp`));
}

for (const name of WIDE) {
  await sharp(p(`../originals/occ/${name}.png`))
    .resize({ width: 2000, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(p(`../src/assets/occ/${name}.webp`));
}

for (const name of GALLERY) {
  await sharp(p(`../originals/occ/${name}.png`))
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(p(`../src/assets/occ/${name}.webp`));
}

console.log("OCC images optimized.");
