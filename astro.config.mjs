// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import compress from 'astro-compress';
import umami from 'astro-umami';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.benjamin-steyaert.com',
  output: 'static',
  devToolbar: {
    enabled: false
  },
  integrations: [sitemap(), robotsTxt({
    sitemap: [
      'https://www.benjamin-steyaert.com/sitemap-index.xml',
    ],
  }), compress(), umami()]
});