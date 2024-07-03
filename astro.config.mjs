import cloudflare from '@astrojs/cloudflare'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://asis.quest',
  integrations: [sitemap()],
  output: 'server',
  adapter: cloudflare()
})
