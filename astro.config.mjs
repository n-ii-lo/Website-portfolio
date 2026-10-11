// @ts-check
import { defineConfig } from 'astro/config';

// Fully static build: `npm run build` writes plain HTML/CSS/JS to dist/.
export default defineConfig({
  // Replace with the real domain before deploying (used for canonical/hreflang URLs).
  site: 'https://example.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    locales: ['ru', 'uk', 'en'],
    defaultLocale: 'ru',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
