import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tizipingce.autos',
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/draft/') &&
        !page.includes('?'),
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
});
