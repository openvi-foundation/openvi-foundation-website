/**
 * Single source of truth for every project the foundation maintains.
 * Each entry generates a card on the home page, a row on /projects,
 * and its own indexable detail page at /projects/<slug>.
 *
 * `version` is the latest version published to npm; update it on release.
 *
 * `summary` is page copy and runs long. `metaDescription` is the search-result
 * version of the same claim, kept under 160 characters so Google does not cut it.
 */
export const projects = [
    {
        slug: 'openvue',
        name: 'OpenVue',
        tagline: 'The Vue UI component library, continued.',
        status: 'beta',
        version: '0.7.0-beta.0',
        repo: 'https://github.com/openvi-foundation/openvue',
        docs: 'https://openvue.dev',
        npm: 'https://www.npmjs.com/package/openvue',
        install: 'npm install openvue@beta @openvue/themes@beta',
        language: 'Vue',
        license: 'MIT',
        continues: 'PrimeVue',
        summary:
            'A community-maintained continuation of PrimeVue, one of the most widely adopted Vue.js component libraries, picked up after its original maintainers archived it. 80+ accessible, themeable components for Vue and Nuxt.',
        metaDescription:
            'OpenVue is the maintained continuation of PrimeVue: 80+ accessible Vue and Nuxt components, an unchanged API, MIT licensed. Migrate with one command.',
        why: [
            'PrimeVue was archived while a lot of production applications still depended on it. Teams running it were left choosing between freezing the dependency and rewriting their UI layer.',
            'OpenVue keeps the same component API, so existing code keeps working. The MIT license is unchanged and stays that way.',
            'We forked the whole toolchain rather than just the components. The theming engine and the icon set are maintained here too, so nothing critical resolves at runtime from a scope we do not control.'
        ],
        highlights: [
            {
                title: 'One-command migration',
                body: '`npx @openvue/migrate` moves a PrimeVue v4 project across. It shows the plan first, renames dependencies, rewrites imports, adds a compatibility override so third-party libraries keep resolving, and leaves a single reviewable diff.'
            },
            {
                title: 'Drop-in API compatibility',
                body: 'Component props, slots and events match PrimeVue 4.x. Migrating is a dependency swap rather than a rewrite.'
            },
            {
                title: 'Full documentation site',
                body: 'openvue.dev carries the complete docs with interactive demos, four theme presets (Aura, Lara, Material, Nora) and RTL support.'
            },
            {
                title: 'Accessibility and TypeScript',
                body: 'WCAG 2.0 oriented components with full TypeScript definitions, plus a Nuxt module for zero-config setup.'
            }
        ],
        packages: [
            { name: 'openvue', desc: 'Core component library' },
            { name: '@openvue/themes', desc: 'Theme presets and the theming API' },
            { name: '@openvue/forms', desc: 'Form state and validation' },
            { name: '@openvue/nuxt-module', desc: 'Nuxt integration, auto-imports components' },
            { name: '@openvue/migrate', desc: 'PrimeVue v4 to OpenVue migration CLI' },
            { name: '@openvue/icons', desc: 'Icon components used internally' },
            { name: '@openvue/mcp', desc: 'Model Context Protocol server for AI tooling' },
            { name: '@openvue/auto-import-resolver', desc: 'Resolver for unplugin-vue-components' },
            { name: '@openvue/metadata', desc: 'Component metadata for editors and tooling' }
        ]
    },
    {
        slug: 'openicons',
        name: 'OpenIcons',
        tagline: 'The icon library for OpenVue, continued.',
        status: 'beta',
        version: '1.0.0-beta.1',
        repo: 'https://github.com/openvi-foundation/openicons',
        docs: null,
        npm: 'https://www.npmjs.com/package/@openvue/openicons',
        install: 'npm install @openvue/openicons@beta',
        language: 'CSS',
        license: 'MIT',
        continues: 'PrimeIcons',
        summary:
            'A community-maintained continuation of PrimeIcons, the icon font used by PrimeVue and the wider Prime ecosystem. 323 icons, shipped as a dependency-free webfont and as tree-shakeable Vue 3 components.',
        metaDescription:
            'OpenIcons is the maintained continuation of PrimeIcons: 323 icons as a dependency-free webfont or tree-shakeable Vue components. MIT licensed.',
        why: [
            'PrimeIcons was archived alongside PrimeVue, so every application using the `pi pi-*` classes needed a maintained replacement.',
            'OpenIcons ships a compatibility stylesheet. Existing `pi-` class names keep rendering while a codebase moves to `oi-` at its own pace.',
            'The webfont has no dependencies, no build step and no runtime: it is a font and a stylesheet. Projects that would rather ship only the icons they use can import the Vue components instead.'
        ],
        highlights: [
            {
                title: '323 icons',
                body: 'The complete PrimeIcons set carried forward under an unchanged MIT license, plus ten icons drawn since the fork.'
            },
            {
                title: 'Webfont or Vue components',
                body: '`@openvue/openicons-vue` gives every icon as a tree-shakeable Vue 3 component with a `size` prop, for projects that want to ship only what they use.'
            },
            {
                title: 'Drop-in compatibility layer',
                body: '`openicons-compat.css` maps the legacy `pi pi-*` classes onto the new font, so migration can be incremental.'
            },
            {
                title: 'Inherits text styling',
                body: 'Icons take `font-size` and `color` from their parent, so they scale with surrounding text. `oi-spin` handles animation and `oi-fw` gives fixed-width alignment.'
            }
        ],
        packages: [
            { name: '@openvue/openicons', desc: 'Icon webfont and stylesheets' },
            { name: '@openvue/openicons-vue', desc: 'Tree-shakeable Vue 3 components for every icon' }
        ]
    },
    {
        slug: 'openux',
        name: 'OpenUXKit',
        tagline: 'The framework-agnostic UI foundation behind OpenVue.',
        status: 'alpha',
        version: '0.0.1-alpha.1',
        repo: 'https://github.com/openvi-foundation/openux',
        docs: null,
        npm: 'https://www.npmjs.com/org/openuxkit',
        install: 'npm install @openuxkit/themes',
        language: 'TypeScript',
        license: 'MIT',
        continues: 'PrimeUIX',
        summary:
            'The styling and theming engine underneath OpenVue, forked from the last MIT-licensed PrimeUIX source and maintained independently. Framework-agnostic.',
        metaDescription:
            'OpenUXKit is the maintained continuation of PrimeUIX: the framework-agnostic CSS-in-JS theming engine and design tokens behind OpenVue. MIT licensed.',
        why: [
            'OpenVue used to resolve its theming engine at runtime from a package scope we do not control. That put the styling layer at the mercy of somebody else\'s licensing decisions.',
            'OpenUXKit was taken from the last MIT-licensed PrimeUIX source, so the styling layer cannot be relicensed out from under the projects that depend on it.',
            'It is framework-agnostic, so the same theming engine and design tokens can back component libraries outside Vue.'
        ],
        highlights: [
            {
                title: 'CSS-in-JS theming engine',
                body: '`@openuxkit/styled` is the runtime that turns design tokens into scoped component styles.'
            },
            {
                title: 'Four theme presets',
                body: 'Aura, Lara, Material and Nora ship in `@openuxkit/themes` along with the theming API.'
            },
            {
                title: 'Nine focused packages',
                body: 'Utilities, styles, forms, locale, motion and headless primitives are split up so consumers take only what they need.'
            }
        ],
        packages: [
            { name: '@openuxkit/utils', desc: 'DOM, object, event bus, uuid and z-index helpers' },
            { name: '@openuxkit/styled', desc: 'CSS-in-JS theming engine' },
            { name: '@openuxkit/styles', desc: 'Per-component base CSS' },
            { name: '@openuxkit/themes', desc: 'Theme presets and the theming API' },
            { name: '@openuxkit/forms', desc: 'Form state and validation resolvers' },
            { name: '@openuxkit/locale', desc: 'Locale and i18n utilities' },
            { name: '@openuxkit/motion', desc: 'Motion and transition utilities' },
            { name: '@openuxkit/headless', desc: 'Headless UI utilities' },
            { name: '@openuxkit/mcp', desc: 'Shared Model Context Protocol server core' }
        ]
    }
];

export const statusLabels = {
    beta: { label: 'Beta', note: 'API stable, polishing toward a stable release' },
    alpha: { label: 'Alpha', note: 'Published and usable, API may still shift' }
};

export function getProject(slug) {
    return projects.find((p) => p.slug === slug);
}
