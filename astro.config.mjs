import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://roamoutfitters.com',
  base: '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Use Sharp for image optimization
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  build: {
    assets: '_assets',
    inlineStylesheets: 'always',
  },
});
