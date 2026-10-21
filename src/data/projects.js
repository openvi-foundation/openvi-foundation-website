/**
 * Single source of truth for every project the foundation maintains.
 * Each entry generates a card on the home page, a row on /projects,
 * and its own indexable detail page at /projects/<slug>.
 *
 * `version` is the latest version published to npm; update it on release.
 *
 * `githubRepo` and `npmPackage` are what the build-time stats read: the
 * repository whose stars count for the project, and the one package whose
 * weekly downloads stand for it. OpenVolt lives in the OpenVue monorepo, so it
 * names that repository rather than a `repo` URL the API cannot take.
 *
 * `contribute` feeds that project's block on /contribute: its contributing
 * guide (null where the repository has none yet), the commands that get a
 * working checkout, and where help is wanted most.
 *
 * `guides` are a project's own pages under /projects/<slug>/, listed on its
 * detail page. They belong to the project, not the foundation, so they are not
 * in the site navigation.
 *
 * `summary` is page copy and runs long. `metaDescription` is the search-result
 * version of the same claim, kept under 160 characters so Google does not cut it.
 */
export const projects = [
    {
        slug: 'openvue',
        name: 'OpenVue',
        tagline: 'The Vue UI component library, continued.',
        status: 'stable',
        version: '1.0.0',
        repo: 'https://github.com/openvi-foundation/openvue',
        githubRepo: 'openvi-foundation/openvue',
        npmPackage: 'openvue',
        docs: 'https://openvue.dev',
        npm: 'https://www.npmjs.com/package/openvue',
        install: 'npm install openvue @openvue/themes',
        language: 'Vue',
        license: 'MIT',
        continues: 'PrimeVue',
        upstreamStatus: 'Security fixes only',
        upstreamNote: 'security fixes only upstream, new development no longer MIT',
        guides: [
            {
                href: '/projects/openvue/migrate',
                cta: 'Read the guide',
                title: 'Migrate from PrimeVue',
                body: 'One command, every package it renames, and the few cases it leaves to you.'
            },
            {
                href: '/projects/openvue/roadmap',
                cta: 'See the roadmap',
                title: 'Roadmap',
                body: 'What has shipped, what is being worked on now, and where 2.0 is headed.'
            },
            {
                href: '/projects/openvue/changelog',
                cta: 'Read the changelog',
                title: 'Changelog',
                body: 'Every release since the fork, built from the repository changelog on each deploy.'
            }
        ],
        summary:
            'A community-maintained continuation of PrimeVue, one of the most widely adopted Vue.js component libraries, picked up after its MIT-licensed 4.x line stopped moving. 80+ accessible, themeable components for Vue and Nuxt.',
        metaDescription:
            'OpenVue is the maintained continuation of PrimeVue: 80+ accessible Vue and Nuxt components, an unchanged API, MIT licensed. Migrate with one command.',
        why: [
            'PrimeVue 4 was archived, then reopened for security fixes only. New development moved to PrimeVue 5 under a license that is no longer MIT, while a lot of production applications still depend on the MIT 4.x line. Teams running it were left choosing between freezing the dependency, accepting a new license and rewriting their UI layer.',
            'OpenVue keeps the same component API, so existing code keeps working. The MIT license is unchanged and stays that way.',
            'We forked the whole toolchain rather than just the components. The theming engine and the icon set are maintained here too, so nothing critical resolves at runtime from a scope we do not control.'
        ],
        highlights: [
            {
                title: 'One-command migration',
                body: '`npx @openvue/migrate` moves a PrimeVue v4 project across. It shows the plan first, renames dependencies, rewrites imports, lists any PrimeVue reference it could not rewrite, and leaves a single reviewable diff.'
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
        contribute: {
            guide: 'https://github.com/openvi-foundation/openvue/blob/master/CONTRIBUTING.md',
            setup: 'git clone https://github.com/openvi-foundation/openvue.git\ncd openvue\npnpm install\npnpm run dev',
            help: [
                'Reproducing, triaging and fixing issues inherited from PrimeVue.',
                'Migration reports: anything `npx @openvue/migrate` misses in a real codebase.',
                'Accessibility testing with real screen readers, reported against specific versions.',
                'Documentation gaps on openvue.dev, especially theming and unstyled mode.'
            ]
        },
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
        status: 'stable',
        version: '1.0.0',
        repo: 'https://github.com/openvi-foundation/openicons',
        githubRepo: 'openvi-foundation/openicons',
        npmPackage: '@openvue/openicons',
        docs: null,
        npm: 'https://www.npmjs.com/package/@openvue/openicons',
        install: 'npm install @openvue/openicons',
        language: 'CSS',
        license: 'MIT',
        continues: 'PrimeIcons',
        upstreamStatus: 'Archived',
        summary:
            'A community-maintained continuation of PrimeIcons, the icon font used by PrimeVue and the wider Prime ecosystem. 323 icons, shipped as a dependency-free webfont and as tree-shakeable Vue 3 components.',
        metaDescription:
            'OpenIcons is the maintained continuation of PrimeIcons: 323 icons as a dependency-free webfont or tree-shakeable Vue components. MIT licensed.',
        why: [
            'The MIT-licensed PrimeIcons repository was archived, so every application using the `pi pi-*` classes needed a maintained replacement.',
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
        contribute: {
            guide: null,
            setup: 'git clone https://github.com/openvi-foundation/openicons.git\ncd openicons\npnpm install\npnpm build',
            help: [
                'Icon requests, with the interface they are missing from.',
                'New icons drawn on the 24×24 grid at the weight of the existing set; `pnpm add-icon` wires one in.',
                'Bugs in the Vue components or the `pi-*` compatibility stylesheet.'
            ]
        },
        packages: [
            { name: '@openvue/openicons', desc: 'Icon webfont and stylesheets' },
            { name: '@openvue/openicons-vue', desc: 'Tree-shakeable Vue 3 components for every icon' }
        ]
    },
    {
        slug: 'openux',
        name: 'OpenUXKit',
        tagline: 'The framework-agnostic UI foundation behind OpenVue.',
        status: 'stable',
        version: '1.1.0',
        repo: 'https://github.com/openvi-foundation/openux',
        githubRepo: 'openvi-foundation/openux',
        npmPackage: '@openuxkit/themes',
        docs: null,
        npm: 'https://www.npmjs.com/org/openuxkit',
        install: 'npm install @openuxkit/themes',
        language: 'TypeScript',
        license: 'MIT',
        continues: 'PrimeUIX',
        upstreamStatus: 'Archived',
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
        contribute: {
            guide: 'https://github.com/openvi-foundation/openux/blob/main/CONTRIBUTING.md',
            setup: 'git clone https://github.com/openvi-foundation/openux.git\ncd openux\npnpm install\npnpm run build:packages\npnpm test',
            help: [
                'Theming bugs that surface in OpenVue but start in the engine or the presets.',
                'Using the engine outside Vue, and reporting where it still assumes Vue.',
                'Test coverage for the styled and themes packages.'
            ]
        },
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
    },
    {
        slug: 'openvolt',
        name: 'OpenVolt',
        tagline: 'Tailwind CSS components for OpenVue, continued.',
        status: 'stable',
        version: '1.0.1',
        repo: 'https://github.com/openvi-foundation/openvue/tree/master/packages/volt-cli',
        githubRepo: 'openvi-foundation/openvue',
        npmPackage: 'openvolt-vue',
        docs: 'https://openvolt.openvue.dev',
        npm: 'https://www.npmjs.com/package/openvolt-vue',
        install: 'npx openvolt-vue add Button',
        language: 'Vue',
        license: 'MIT',
        continues: 'PrimeVue Volt',
        upstreamStatus: 'Security fixes only',
        // Volt itself is not archived; what it sits on is. The spec table says
        // "archived upstream" for everything else.
        upstreamNote: 'built on PrimeVue v4, now security-only upstream',
        summary:
            'A maintained continuation of Volt, the Tailwind CSS components built on unstyled PrimeVue. 69 components you copy into your project as plain .vue files and own from then on, built on OpenVue and released with it.',
        metaDescription:
            'OpenVolt continues PrimeVue Volt: 69 Tailwind CSS components for OpenVue that you copy into your project and own. Tested in CI, MIT licensed.',
        why: [
            'Volt depends on PrimeVue v4, which has moved to security-only maintenance with a read-only issue tracker. Projects built on Volt had nowhere to report a broken component.',
            'OpenVolt is the same 69 components and the same design, rebuilt on `openvue` instead of `primevue`. It lives in the OpenVue repository and ships with every OpenVue release, so the components and the library underneath them cannot drift apart.',
            'The upstream CLI cloned the repository and copied whatever was on the main branch at that moment. The OpenVolt CLI carries its components inside the published package, so an install always gives you files from a release, matched to your OpenVue version.'
        ],
        highlights: [
            {
                title: 'You own the code',
                body: '`npx openvolt-vue add Button` writes the component into `src/volt` as a regular `.vue` file. The styling is Tailwind classes you can read and change; keyboard support and accessibility still come from OpenVue underneath.'
            },
            {
                title: 'Tested on every pull request',
                body: 'CI installs OpenVolt into a fresh project, type checks it and runs it in a real browser, so a component that breaks fails the build before it ships.'
            },
            {
                title: 'Works offline',
                body: 'Nothing is downloaded when you add a component, so the CLI works in CI, behind firewalls and without git.'
            },
            {
                title: 'Your edits are safe',
                body: 'Components you have customised are never overwritten unless you pass `--overwrite`. Coming from PrimeVue Volt, `npx @openvue/migrate` followed by `npx openvolt-vue add all --overwrite` moves a project across.'
            }
        ],
        contribute: {
            guide: 'https://github.com/openvi-foundation/openvue/blob/master/CONTRIBUTING.md',
            setup: 'git clone https://github.com/openvi-foundation/openvue.git\ncd openvue\npnpm install\n# the CLI and its components: packages/volt-cli',
            help: [
                'Components that break or look wrong after `npx openvolt-vue add`, with the Tailwind and OpenVue versions you are on.',
                'Gaps in the Vite and Nuxt setup guides on openvolt.openvue.dev.',
                'Projects moving from PrimeVue Volt: what the switch did not cover.'
            ]
        },
        packages: [{ name: 'openvolt-vue', desc: 'CLI that copies OpenVolt components into your project' }]
    }
];

/**
 * Repositories that are not libraries: a template to start from, examples to
 * read, and the sandbox a bug report starts in. They sit under the projects on
 * /projects rather than among them, because nobody installs them as a
 * dependency and none of them continues an upstream project.
 */
export const tools = [
    {
        name: 'Deni',
        kind: 'Template',
        summary:
            'A full admin dashboard template built with OpenVue, Vue 3, TypeScript and Vite: dashboard, CRUD tables, detail pages, forms with validation, auth and error pages. Clone it and build on it.',
        repo: 'https://github.com/openvi-foundation/deni',
        demo: 'https://deni-taupe.vercel.app',
        article: '/articles/deni-free-mit-admin-dashboard-template'
    },
    {
        name: 'OpenVue examples',
        kind: 'Examples',
        summary:
            'Minimal starter projects for OpenVue: Vite with Vue 3, in JavaScript and in TypeScript. The shortest path from an empty folder to a themed component on screen.',
        repo: 'https://github.com/openvi-foundation/openvue-examples'
    },
    {
        name: 'OpenVue reproducer',
        kind: 'Bug reports',
        summary:
            'A one-click StackBlitz starter for reporting bugs. Open it, reduce the problem to the smallest `App.vue` that shows it, fork, and paste the link into the issue.',
        repo: 'https://github.com/openvi-foundation/openvue-reproducer',
        demo: 'https://stackblitz.com/github/openvi-foundation/openvue-reproducer?file=src%2FApp.vue',
        demoLabel: 'Open in StackBlitz'
    }
];

export const statusLabels = {
    stable: { label: 'Stable', note: 'Released, semantic versioning applies from here' },
    rc: { label: 'Release candidate', note: 'Feature complete, final checks before 1.0.0' },
    beta: { label: 'Beta', note: 'API stable, polishing toward a stable release' },
    alpha: { label: 'Alpha', note: 'Published and usable, API may still shift' }
};

export function getProject(slug) {
    return projects.find((p) => p.slug === slug);
}
