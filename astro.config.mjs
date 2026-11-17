import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const SITE = 'https://plaguetaleguide.com';

const ROOT = dirname(fileURLToPath(import.meta.url));
function frontmatterDate(file) {
  const source = readFileSync(join(ROOT, file), 'utf8');
  const match = source.match(/^updatedAt:\s*["']?(\d{4}-\d{2}-\d{2})/m);
  return match?.[1];
}

// Mirror of INDEXABLE_STATUS in src/data/confidence.ts — GuideLayout sets noindex from the
// same rule, so a noindex guide must not be handed to Google in the sitemap either.
// Keep both lists in step: flipping a guide to `official` re-includes it automatically.
const INDEXABLE_STATUS = ['official', 'steam-feature', 'community', 'trailer', 'prequel'];

function guideFile(pathname) {
  const slug = pathname.replace(/^\/+|\/+$/g, ''); // 去首尾斜杠
  const candidates = [`src/content/guides/${slug}.md`, `src/content/guides/${slug}.mdx`];
  return candidates.find((rel) => existsSync(join(ROOT, rel)));
}

function isIndexable(url) {
  const pathname = new URL(url).pathname;
  // Guide pagination is crawlable from the hub but must not be sitemap URLs.
  if (/^\/guide\/page\/\d+\/$/.test(pathname)) return false;
  const file = guideFile(pathname);
  if (!file) return true; // 其余静态路由不受信心分级约束
  const status = readFileSync(join(ROOT, file), 'utf8').match(/^status:\s*["']?([\w-]+)/m)?.[1];
  return status ? INDEXABLE_STATUS.includes(status) : true;
}

// Static hubs changed in this editorial pass carry the real modification date.
// Unchanged static routes intentionally omit lastmod instead of receiving a fake date.
const STATIC_LASTMOD = {
    '/': '2026-11-16',
    '/guide/': '2026-11-16',
    '/characters/': '2026-11-16',
    '/collectibles/': '2026-11-16',
    '/skills/': '2026-11-16',
    '/walkthrough/': '2026-11-16',
    '/walkthrough/chapter-1-blood-ties/': '2026-11-16',
    '/walkthrough/chapter-2-felons/': '2026-11-16',
    '/walkthrough/chapter-3-those-before-us/': '2026-11-16',
    '/walkthrough/chapter-4-from-hell-it-rose/': '2026-11-16',
    '/walkthrough/chapter-5-desolation-it-wrought/': '2026-11-16',
    '/walkthrough/chapter-6-what-lies-beneath/': '2026-11-16',
    '/walkthrough/chapter-7-death-it-sowed/': '2026-11-16',
    '/walkthrough/chapter-8-resonance/': '2026-11-16',
    '/walkthrough/chapter-9-night-has-come/': '2026-11-16',
    '/walkthrough/chapter-10-parallel-paths/': '2026-11-16',
    '/walkthrough/chapter-11-patera/': '2026-11-16',
    '/walkthrough/chapter-12-fading-light/': '2026-11-16',
    '/walkthrough/chapter-13-as-one/': '2026-11-16',
    '/walkthrough/chapter-14-what-remains/': '2026-11-16',
    '/weapons/': '2026-11-16',
    '/maps/': '2026-11-16',
  '/contact/': '2026-08-28',
  '/privacy/': '2026-11-16',
  '/about/': '2026-11-16',
  '/terms/': '2026-11-16',
  '/editorial/': '2026-11-16',
};

function lastmodFor(url) {
  const pathname = new URL(url).pathname;
  if (STATIC_LASTMOD[pathname]) return STATIC_LASTMOD[pathname];
  const file = guideFile(pathname);
  return file ? frontmatterDate(file) : undefined;
}

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => isIndexable(page),
      serialize(item) {
        const lastmod = lastmodFor(item.url);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
