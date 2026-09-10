import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';

export default defineConfig({
    site: 'https://openvi.dev',
    trailingSlash: 'never',
    // Vue is here for one reason: the live OpenVue demo. Everything else on the
    // site stays static HTML. `appEntrypoint` installs the OpenVue plugin into
    // every island, so components resolve their theme and config.
    integrations: [
        sitemap({
            // Crawl budget is not a real constraint at a dozen pages, but priority
            // and changefreq still tell a crawler which URLs are the site's
            // entry points and which are reference material that rarely moves.
            serialize(item) {
                const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';

                if (path === '/') {
                    item.priority = 1.0;
                    item.changefreq = 'weekly';
                } else if (path === '/projects' || path.startsWith('/projects/')) {
                    item.priority = 0.9;
                    item.changefreq = 'weekly';
                } else if (path === '/articles') {
                    item.priority = 0.8;
                    item.changefreq = 'weekly';
                } else if (path.startsWith('/articles/')) {
                    // A published post does not change after it runs, so a
                    // crawler is told to stop coming back for it.
                    item.priority = 0.7;
                    item.changefreq = 'yearly';
                } else {
                    item.priority = 0.6;
                    item.changefreq = 'monthly';
                }

                item.lastmod = new Date().toISOString();

                return item;
            }
        }),
        vue({ appEntrypoint: '/src/vue-app.js' })
    ],
    build: {
        format: 'file'
    }
});
