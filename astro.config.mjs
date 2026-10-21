import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import { articles, articlesByDate } from './src/data/articles.js';

const articleDates = Object.fromEntries(articles.map((a) => [`/articles/${a.slug}`, a.date]));

export default defineConfig({
    site: 'https://openvi.dev',
    trailingSlash: 'never',
    // Vue is here for one reason: the live OpenVue demo. Everything else on the
    // site stays static HTML. `appEntrypoint` installs the OpenVue plugin into
    // every island, so components resolve their theme and config.
    integrations: [
        sitemap({
            // Tag pages are noindex filtered views of /articles; listing them
            // here would ask a crawler to index what the page tells it not to.
            filter: (page) => !new URL(page).pathname.startsWith('/articles/tag/'),
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

                // Only dates that are true. Stamping every URL with the build
                // time tells a crawler everything changed on every deploy, and
                // Google stops trusting the field. An article carries its
                // publication date, the list its newest article; pages with no
                // date on record leave the field out.
                const lastmod =
                    articleDates[path] ?? (path === '/articles' ? articlesByDate[0]?.date : undefined);
                if (lastmod) item.lastmod = new Date(`${lastmod}T00:00:00Z`).toISOString();

                return item;
            }
        }),
        vue({ appEntrypoint: '/src/vue-app.js' })
    ],
    build: {
        format: 'file'
    }
});
