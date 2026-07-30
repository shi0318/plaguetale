import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();

const requiredSourceUrls = [
  'https://store.steampowered.com/app/2713000/Resonance_A_Plague_Tale_Legacy/',
  'https://www.focus-entmt.com/en/games',
];

const requiredPages = [
  '/',
  '/guide/',
  '/characters/',
  '/collectibles/',
  '/skills/',
  '/walkthrough/',
  '/release-date/',
  '/story/',
  '/combat/',
  '/romance-guide/',
  '/platforms/',
  '/download/',
  '/about/',
  '/privacy/',
  '/contact/',
];

const requiredImages = [
  'public/images/ptl-hero-banner.webp',
  'public/images/ptl-sophia-combat.webp',
  'public/images/ptl-island-trail.webp',
  'public/images/ptl-light-puzzle.webp',
  'public/images/ptl-header.webp',
];

const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

for (const image of requiredImages) {
  assert(existsSync(join(root, image)), `Missing official image: ${image}`);
}

for (const page of requiredPages) {
  const outputPath =
    page === '/'
      ? join(root, 'dist', 'index.html')
      : join(root, 'dist', page.replace(/^\/|\/$/g, ''), 'index.html');
  assert(existsSync(outputPath), `Missing built route: ${page}`);
}

const distIndex = join(root, 'dist', 'index.html');
if (existsSync(distIndex)) {
  const distText = readFileSync(distIndex, 'utf8');
  assert(distText.includes('Resonance: A Plague Tale Legacy'), 'Homepage H1/title target is missing.');
  assert(distText.includes('application/ld+json'), 'JSON-LD schema is missing from homepage.');
}

const sourceFiles = [
  'src/data/site.ts',
  'src/data/sources.ts',
  'src/pages/characters/index.astro',
  'src/pages/collectibles/index.astro',
  'src/pages/walkthrough/index.astro',
].map((file) => join(root, file));

for (const sourceUrl of requiredSourceUrls) {
  const found = sourceFiles.some((file) => existsSync(file) && readFileSync(file, 'utf8').includes(sourceUrl));
  assert(found, `Missing official source URL in project source: ${sourceUrl}`);
}

// The release date is confirmed by Steam as August 27, 2026 — guard against stale planning dates.
const forbiddenClaims = [
  'August 20, 2026',
  '2026-08-20',
  'August 25, 2026',
  '2026-08-25',
];

for (const file of sourceFiles) {
  if (!existsSync(file)) continue;
  const text = readFileSync(file, 'utf8');
  for (const claim of forbiddenClaims) {
    assert(!text.includes(claim), `Unverified release-date claim found in ${file}: ${claim}`);
  }
}

if (failures.length > 0) {
  console.error(`SEO check failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SEO check passed: ${requiredPages.length} routes, ${requiredImages.length} official images, and ${requiredSourceUrls.length} source URLs verified.`);
