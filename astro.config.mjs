// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
    enabled: false,
  },
  server: {
    // Mengizinkan semua domain trycloudflare.com mengakses server dev Astro Anda
    allowedHosts: ['.trycloudflare.com']
  }
});
