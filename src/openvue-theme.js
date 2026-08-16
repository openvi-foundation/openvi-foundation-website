import Aura from '@openvue/themes/aura';

/**
 * The one place the OpenVue theme is configured.
 *
 * Two consumers read this: `src/vue-app.js`, which configures OpenVue for the
 * components Astro renders, and `scripts/generate-openvue-css.mjs`, which
 * renders the same theme to a stylesheet at build time. They have to agree, so
 * they share this file.
 *
 * `darkModeSelector` points at the attribute the site's own theme toggle
 * writes, so one switch drives both OpenVue and `global.css`.
 */
export const themeConfig = {
    preset: Aura,
    options: {
        darkModeSelector: '[data-theme="dark"]'
    }
};

/**
 * Components whose CSS is baked into the generated stylesheet.
 *
 * Nothing on the site hydrates, so no runtime style injection ever happens: a
 * component missing from this list renders with correct markup and no styling.
 * Add the component here when you first use it.
 */
export const components = ['button', 'card', 'chip', 'tag', 'message', 'panel'];
