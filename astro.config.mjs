import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://openvi.dev',
    trailingSlash: 'never',
    integrations: [sitemap()],
    build: {
        format: 'file'
    }
});
