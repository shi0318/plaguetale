import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { test } from 'node:test';

const GUIDES_DIR = new URL('../src/content/guides/', import.meta.url);

// Reads updatedAt + status straight from frontmatter so the expectation follows the content.
// Hardcoding slugs here made the test fail every time a newer guide was published.
async function guideIndex() {
  const files = (await readdir(GUIDES_DIR)).filter((f) => f.endsWith('.md'));
  const entries = await Promise.all(
    files.map(async (file) => {
      const raw = await readFile(new URL(file, GUIDES_DIR), 'utf8');
      return {
        slug: file.replace(/\.md$/, ''),
        updatedAt: raw.match(/^updatedAt:\s*["']?([\d-]+)/m)?.[1] ?? '',
        draft: /^draft:\s*true/m.test(raw),
      };
    }),
  );
  // Mirrors src/pages/guide/index.astro: newest updatedAt first, slug ascending on ties.
  return entries
    .filter((entry) => !entry.draft)
    .sort((a, b) => (a.updatedAt === b.updatedAt ? a.slug.localeCompare(b.slug) : b.updatedAt.localeCompare(a.updatedAt)));
}

test('guide hub promotes the two newest guides', async () => {
  const html = await readFile(new URL('../dist/guide/index.html', import.meta.url), 'utf8');
  const start = html.indexOf('latest-guides');
  const end = start < 0 ? -1 : html.indexOf('</section>', start);
  const latest = start < 0 ? '' : html.slice(start, end < 0 ? html.length : end);

  assert.ok(latest, 'expected a latest guides section');

  const guides = await guideIndex();
  assert.ok(guides.length >= 2, 'expected at least two published guides');

  const order = [...latest.matchAll(/href="\/([a-z0-9-]+)\/"/g)].map((m) => m[1]);
  assert.deepEqual(
    order.slice(0, 2),
    guides.slice(0, 2).map((g) => g.slug),
    'the first two cards must be the two most recently updated guides',
  );
});
