import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// المصدر الوحيد لعنوان الموقع. اتركه فارغًا حتى يتم اختيار النطاق النهائي.
const SITE_URL = '';

export default defineConfig({
  site: SITE_URL || undefined,
  output: 'server',
  adapter: cloudflare(),
  integrations: SITE_URL ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
