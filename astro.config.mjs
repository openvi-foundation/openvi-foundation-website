import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import { articles, articlesByDate } from './src/data/articles.js';

const articleDates = Object.fromEntries(articles.map((a) => [`/articles/${a.slug}`, a.date]));

export default defineConfig({
    site: 'https://openvi.dev',
    trailingSlash: 'never',
    integrations: [
        sitemap({
            filter: (page) => !new URL(page).pathname.startsWith('/articles/tag/'),
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
                    item.priority = 0.7;
                    item.changefreq = 'yearly';
                } else {
                    item.priority = 0.6;
                    item.changefreq = 'monthly';
                }

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
