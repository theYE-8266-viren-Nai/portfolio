// @ts-check
import { defineConfig } from 'astro/config';

// Static output — the whole site is prerendered HTML + CSS. There is no client
// framework here on purpose: every animation is native CSS (scroll-driven
// timelines, @starting-style, @property), so there is nothing to hydrate.
export default defineConfig({
  site: 'https://thuriya.dev',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
