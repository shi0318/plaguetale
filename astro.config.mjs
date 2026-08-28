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

// Static hubs changed in this editorial pass carry the real modification date.
// Unchanged static routes intentionally omit lastmod instead of receiving a fake date.
const STATIC_LASTMOD = {
  '/': '2026-08-28',
  '/guide/': '2026-08-28',
  '/guide/page/2/': '2026-08-28',
  '/characters/': '2026-08-28',
  '/collectibles/': '2026-08-28',
  '/skills/': '2026-08-28',
  '/walkthrough/': '2026-08-28',
  '/contact/': '2026-08-28',
  '/privacy/': '2026-08-28',
  '/about/': '2026-08-28',
};

function lastmodFor(url) {
  const pathname = new URL(url).pathname;
  if (STATIC_LASTMOD[pathname]) return STATIC_LASTMOD[pathname];
  const slug = pathname.replace(/^\/+|\/+$/g, ''); // 去首尾斜杠
  const candidates = [`src/content/guides/${slug}.md`, `src/content/guides/${slug}.mdx`];
  const file = candidates.find((rel) => existsSync(join(ROOT, rel)));
  return file ? frontmatterDate(file) : undefined;
}

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
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
