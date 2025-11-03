// Optimize hero images: generate AVIF/WebP at sensible sizes/quality
// Usage: node scripts/optimize-images.mjs

import fs from 'node:fs';
import path from 'node:path';

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch (e) {
  console.error('\nMissing dependency: sharp\nRun:  npm i -D sharp\n');
  process.exit(1);
}

const root = process.cwd();
const pub = path.join(root, 'public');

const inputs = [
  { in: 'hero-image.png', outBase: 'hero-image', maxWidth: 1600 },
  { in: 'hero-image-alt.png', outBase: 'hero-image-alt', maxWidth: 1600 },
];

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true }).catch(() => {});
}

async function optimizeOne({ in: inName, outBase, maxWidth }) {
  const inPath = path.join(pub, inName);
  if (!fs.existsSync(inPath)) {
    console.warn(`Skip: ${inName} not found`);
    return;
  }
  const image = sharp(inPath);
  const meta = await image.metadata();
  const width = meta.width || maxWidth;
  const target = Math.min(width, maxWidth);

  const pipeline = sharp(inPath).resize({ width: target, withoutEnlargement: true });

  const avifPath = path.join(pub, `${outBase}.avif`);
  const webpPath = path.join(pub, `${outBase}.webp`);

  await Promise.all([
    pipeline
      .clone()
      .avif({ quality: 60, effort: 4 })
      .toFile(avifPath)
      .then(() => console.log('✓', path.basename(avifPath), 'written')),
    pipeline
      .clone()
      .webp({ quality: 70 })
      .toFile(webpPath)
      .then(() => console.log('✓', path.basename(webpPath), 'written')),
  ]);
}

async function main() {
  await ensureDir(pub);
  for (const img of inputs) {
    try {
      await optimizeOne(img);
    } catch (e) {
      console.error('Error optimizing', img.in, e);
    }
  }
}

main();

