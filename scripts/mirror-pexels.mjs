import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const images = [
  'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/5698853/pexels-photo-5698853.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/6647039/pexels-photo-6647039.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/6647112/pexels-photo-6647112.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/6647028/pexels-photo-6647028.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200'
];

const outDir = path.join(process.cwd(), 'public', 'pexels');

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

function fileBase(url) {
  const match = url.match(/pexels-photo-(\d+)/);
  if (match) return `pexels-${match[1]}`;
  const basename = path.basename(new URL(url).pathname).replace(/\.[^.]+$/, '');
  return basename.replace(/[^a-z0-9-]+/gi, '-');
}

async function downloadBuffer(url) {
  let res = await fetch(url);
  if (!res.ok) {
    const clean = url.split('?')[0];
    res = await fetch(clean);
    if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  }
  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function processImage(url) {
  const base = fileBase(url);
  const input = await downloadBuffer(url);
  const image = sharp(input);
  const metadata = await image.metadata();
  const target = Math.min(metadata.width ?? 1600, 1200);
  const smallTarget = Math.min(target, 600);

  const large = image.resize({ width: target, withoutEnlargement: true });
  const small = image.resize({ width: smallTarget, withoutEnlargement: true });

  await Promise.all([
    large.clone().jpeg({ quality: 82 }).toFile(path.join(outDir, `${base}.jpg`)),
    large.clone().webp({ quality: 75 }).toFile(path.join(outDir, `${base}.webp`)),
    large.clone().avif({ quality: 60, effort: 4 }).toFile(path.join(outDir, `${base}.avif`)),
    small.clone().webp({ quality: 75 }).toFile(path.join(outDir, `${base}-sm.webp`)),
    small.clone().avif({ quality: 60, effort: 4 }).toFile(path.join(outDir, `${base}-sm.avif`)),
  ]);

  console.log('✓ mirrored', base);
}

async function main() {
  await ensureDir(outDir);
  for (const url of images) {
    try {
      await processImage(url);
    } catch (error) {
      console.error('✗ error processing', url, error);
    }
  }
}

main();
