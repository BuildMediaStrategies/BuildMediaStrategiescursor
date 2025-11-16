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

const srcAssets = path.join(root, 'src', 'assets');

const inputs = [
  // Hero images
  { in: 'hero-image.png', outBase: 'hero-image', maxWidth: 1600 },
  { in: 'hero-image-alt.png', outBase: 'hero-image-alt', maxWidth: 1600 },
  { in: 'hero-image-new.png', outBase: 'hero-image-new', maxWidth: 1600 },

  // AI Operations page images (largest files - biggest performance win!)
  { in: 'assets/bms-web-image.png', outBase: 'assets/bms-web-image', maxWidth: 1024 },
  { in: 'assets/bms-mobile-img.png', outBase: 'assets/bms-mobile-img', maxWidth: 1024 },
  { in: 'assets/bms-lead-img.png', outBase: 'assets/bms-lead-img', maxWidth: 1024 },
  { in: 'assets/bms-linkedin-img.png', outBase: 'assets/bms-linkedin-img', maxWidth: 1024 },
  { in: 'assets/bms-chatbot-img.png', outBase: 'assets/bms-chatbot-img', maxWidth: 1024 },
  { in: 'assets/bms-call-img.png', outBase: 'assets/bms-call-img', maxWidth: 1024 },

  // Logo cloud images
  { in: 'assets/ucl-icon.png', outBase: 'assets/ucl-icon', maxWidth: 512 },
  { in: 'assets/cursor-icon.png', outBase: 'assets/cursor-icon', maxWidth: 256 },
  { in: 'assets/sos-icon.png', outBase: 'assets/sos-icon', maxWidth: 256 },
  { in: 'assets/hamilton-nexus-icon.png', outBase: 'assets/hamilton-nexus-icon', maxWidth: 256 },
  { in: 'assets/github-logo.png', outBase: 'assets/github-logo', maxWidth: 256 },
  { in: 'assets/logo.png', outBase: 'assets/logo', maxWidth: 256 },
];

// Also copy and optimize src/assets images to public/assets
const srcInputs = [
  { in: 'ai-dashboard.png', outBase: 'assets/ai-dashboard', maxWidth: 1024, srcPath: srcAssets },
  { in: 'bms-logo.png', outBase: 'assets/bms-logo', maxWidth: 256, srcPath: srcAssets },
];

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true }).catch(() => {});
}

async function optimizeOne({ in: inName, outBase, maxWidth, srcPath }) {
  const inPath = srcPath ? path.join(srcPath, inName) : path.join(pub, inName);
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
  const pngPath = path.join(pub, `${outBase}.png`);

  // Ensure output directory exists
  await ensureDir(path.dirname(avifPath));
  await ensureDir(path.dirname(webpPath));

  const tasks = [
    pipeline
      .clone()
      .avif({ quality: 60, effort: 4 })
      .toFile(avifPath)
      .then(() => console.log('✓', path.relative(pub, avifPath), 'written')),
    pipeline
      .clone()
      .webp({ quality: 70 })
      .toFile(webpPath)
      .then(() => console.log('✓', path.relative(pub, webpPath), 'written')),
  ];

  // If source is from src/assets, also copy optimized PNG to public
  if (srcPath) {
    tasks.push(
      pipeline
        .clone()
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(pngPath)
        .then(() => console.log('✓', path.relative(pub, pngPath), 'written (from src)'))
    );
  }

  await Promise.all(tasks);
}

async function main() {
  await ensureDir(pub);

  console.log('Optimizing public images...');
  for (const img of inputs) {
    try {
      await optimizeOne(img);
    } catch (e) {
      console.error('Error optimizing', img.in, e);
    }
  }

  console.log('\nOptimizing src/assets images...');
  for (const img of srcInputs) {
    try {
      await optimizeOne(img);
    } catch (e) {
      console.error('Error optimizing', img.in, e);
    }
  }
}

main();

