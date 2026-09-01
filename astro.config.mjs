import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// المصدر الوحيد لعنوان الموقع.
const SITE_URL = 'https://mubarakiyasouk.com';

export default defineConfig({
  site: SITE_URL || undefined,
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404')
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
