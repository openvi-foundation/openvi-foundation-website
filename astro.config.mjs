import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';

export default defineConfig({
    site: 'https://openvi.dev',
    trailingSlash: 'never',
    // Vue is here for one reason: the live OpenVue demo. Everything else on the
    // site stays static HTML. `appEntrypoint` installs the OpenVue plugin into
    // every island, so components resolve their theme and config.
    integrations: [sitemap(), vue({ appEntrypoint: '/src/vue-app.js' })],
    build: {
        format: 'file'
    }
});
