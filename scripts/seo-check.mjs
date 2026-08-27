import { existsSync, readFileSync, readdirSync } from 'node:fs';
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

function sourceTreeFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return sourceTreeFiles(path);
    return /\.(astro|md|mdx|mjs|ts)$/.test(entry.name) ? [path] : [];
  });
}

const sourceFiles = sourceTreeFiles(join(root, 'src'));

for (const sourceUrl of requiredSourceUrls) {
  const found = sourceFiles.some((file) => existsSync(file) && readFileSync(file, 'utf8').includes(sourceUrl));
  assert(found, `Missing official source URL in project source: ${sourceUrl}`);
}

// The release date is confirmed by Steam as August 27, 2026 — guard against stale planning dates.
const forbiddenClaims = [
  'August 28',
  'August 20, 2026',
  '2026-08-20',
  'August 25, 2026',
  '2026-08-25',
];

// A verification date is valid evidence and must not be confused with a release claim.
// Remove only dates attached to words such as "checked" or "verified" before scanning.
const verificationDate = /(?:last\s+)?(?:checked|verified|observed|reviewed|updated)\s*(?:on|as of|:)\s*\*{0,2}(?:August\s+\d{1,2},\s+2026|2026-\d{2}-\d{2})\*{0,2}/gi;

for (const file of sourceFiles) {
  if (!existsSync(file)) continue;
  const text = readFileSync(file, 'utf8').replace(verificationDate, '');
  for (const claim of forbiddenClaims) {
    assert(!text.includes(claim), `Unverified release-date claim found in ${file}: ${claim}`);
  }
}

const siteSource = readFileSync(join(root, 'src/data/site.ts'), 'utf8');
assert(/releaseDate:\s*['"]2026-08-27['"]/.test(siteSource), 'Current ISO release date is missing from src/data/site.ts.');

if (failures.length > 0) {
  console.error(`SEO check failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SEO check passed: ${requiredPages.length} routes, ${requiredImages.length} official images, and ${requiredSourceUrls.length} source URLs verified.`);
