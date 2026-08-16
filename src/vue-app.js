import OpenVue from 'openvue/config';
import { themeConfig } from './openvue-theme.js';

/**
 * Configures OpenVue for the components Astro renders.
 *
 * Nothing on this site hydrates: every OpenVue component is rendered to HTML at
 * build time and styled by the generated stylesheet, so this runs during the
 * build rather than in the browser.
 *
 * The theme comes from `src/openvue-theme.js`, the same config the stylesheet
 * generator reads, so markup and CSS are produced from one source.
 */
export default (app) => {
    app.use(OpenVue, { theme: themeConfig });
};
