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

test('pre-release hubs keep confirmed facts separate from launch-only data', async () => {
  const [collectibles, walkthrough, skills] = await Promise.all([
    readFile(projectFile('src/pages/collectibles/index.astro'), 'utf8'),
    readFile(projectFile('src/pages/walkthrough/index.astro'), 'utf8'),
    readFile(projectFile('src/pages/skills/index.astro'), 'utf8'),
  ]);

  assert.match(collectibles, /not (?:yet )?(?:published|confirmed)/i);
  assert.match(walkthrough, /not public|not (?:yet )?confirmed/i);
  assert.doesNotMatch(skills, /likely doubles as|potentially,? a way to control encounters/i);
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

  for (const route of ['/', '/guide/', '/guide/page/2/', '/characters/', '/collectibles/', '/skills/', '/walkthrough/', '/privacy/']) {
    assert.match(source, new RegExp(`['"]${route.replaceAll('/', '\\/')}['"]\\s*:\\s*['"]2026-08-21['"]`), `missing static lastmod: ${route}`);
  }
});
