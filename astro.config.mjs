// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const siteUrl = process.env.PUBLIC_SITE_URL ?? 'https://darrenpaul.dev';

export default defineConfig({
  site: siteUrl,
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !/\/(confirm|auth|account|logout)(\/|$)/.test(page),
    }),
  ],
  image: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: '**.supabase.co' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
