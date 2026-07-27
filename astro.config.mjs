import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://plaguetaleguide.com';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      serialize(item) {
        return {
          ...item,
          lastmod: new Date().toISOString(),
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
