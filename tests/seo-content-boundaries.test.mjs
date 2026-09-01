import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const projectFile = (path) => new URL(`../${path}`, import.meta.url);

test('guide hub renders the existing topic cluster for search intent', async () => {
  const html = await readFile(projectFile('dist/guide/index.html'), 'utf8');
  const visible = html.replaceAll('&amp;', '&');

  for (const label of ['Release date, price & platform', 'Characters & story', 'Collectibles guide', 'Combat & skills', 'Walkthrough plan']) {
    assert.ok(visible.includes(label), `missing guide topic hub: ${label}`);
  }
});

test('characters data uses the named official cast instead of the stale placeholder', async () => {
  const source = await readFile(projectFile('src/data/characters.ts'), 'utf8');

  for (const name of ['Leni', 'Alec', 'Theseus']) {
    assert.ok(source.includes(`name: '${name}'`), `missing confirmed character: ${name}`);
  }

  assert.doesNotMatch(source, /second hero is confirmed to exist but not yet named publicly/);
});

test('released hubs keep official facts separate from unverified route details', async () => {
  const [collectibles, walkthrough, skills] = await Promise.all([
    readFile(projectFile('src/pages/collectibles/index.astro'), 'utf8'),
    readFile(projectFile('src/pages/walkthrough/index.astro'), 'utf8'),
    readFile(projectFile('src/pages/skills/index.astro'), 'utf8'),
  ]);

  assert.match(collectibles, /released game|direct, reproducible evidence/i);
  assert.match(walkthrough, /released game|verifiable/i);
  assert.doesNotMatch(walkthrough, /awaits a hands-on checklist/i);
  assert.doesNotMatch(skills, /likely doubles as|potentially,? a way to control encounters/i);
});

test('release status stays manually gated after the calendar date', async () => {
  const site = await readFile(projectFile('src/data/site.ts'), 'utf8');
  const countdown = await readFile(projectFile('src/components/Countdown.astro'), 'utf8');

  assert.match(site, /releaseDate:\s*['"]2026-08-27['"]/);
  assert.match(site, /releaseStatus:\s*['"]released['"]/);
  assert.match(site, /return SITE\.releaseStatus === ['"]released['"]/);
  assert.match(countdown, /data-release-status=\{SITE\.releaseStatus\}/);
  assert.match(countdown, /el\.dataset\.releaseStatus === ['"]released['"]/);
});

test('guide links point to the existing flat content routes', async () => {
  const source = await readFile(projectFile('src/content/guides/island-exploration-encounter-guide.md'), 'utf8');

  assert.ok(source.includes('](/minoan-sphere-light-puzzle-guide/)'));
  assert.doesNotMatch(source, /\]\(\/guides\/minoan-sphere-light-puzzle-guide\//);
});

test('visible content dates use long US English formatting', async () => {
  const source = await readFile(projectFile('src/utils/dates.ts'), 'utf8');

  assert.match(source, /month:\s*['"]long['"]/);
  assert.match(source, /day:\s*['"]numeric['"]/);
  assert.match(source, /year:\s*['"]numeric['"]/);
});

test('guide metadata labels updatedAt as an editorial update, not a source verification claim', async () => {
  const source = await readFile(projectFile('src/layouts/GuideLayout.astro'), 'utf8');

  assert.match(source, /Updated\s*<time/);
  assert.doesNotMatch(source, /Last verified\s*<time/);
});

test('sitemap config records real dates for the static hubs changed in this pass', async () => {
  const source = await readFile(projectFile('astro.config.mjs'), 'utf8');

  const expectedDates = {
    '/': '2026-08-28',
    '/guide/': '2026-08-28',
    '/guide/page/2/': '2026-08-28',
    '/characters/': '2026-08-28',
    '/collectibles/': '2026-08-28',
    '/skills/': '2026-08-28',
    '/walkthrough/': '2026-09-01',
    '/contact/': '2026-08-28',
    '/privacy/': '2026-08-28',
    '/about/': '2026-09-01',
  };

  for (const [route, date] of Object.entries(expectedDates)) {
    assert.match(source, new RegExp(`['"]${route.replaceAll('/', '\\/')}['"]\\s*:\\s*['"]${date}['"]`), `missing static lastmod: ${route}`);
  }
});
