import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// المصدر الوحيد لعنوان الموقع.
const SITE_URL = 'https://mubarakiyasouk.com';

export default defineConfig({
  site: SITE_URL || undefined,
  output: 'server',
  adapter: cloudflare({configPath: './wrangler.jsonc'}),
  integrations: [
    sitemap({
      customPages: ['/', '/en/', '/privacy/', '/en/privacy/', '/terms/', '/en/terms/', '/cookies/', '/en/cookies/'].map(p => new URL(p, SITE_URL).href),
      filter: (page) => !page.includes('/404')
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
