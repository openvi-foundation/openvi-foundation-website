export const projects = [
    {
        slug: 'openvue',
        name: 'OpenVue',
        tagline: 'Accessible Vue UI components, MIT licensed and community maintained.',
        status: 'stable',
        version: '1.1.0',
        repo: 'https://github.com/openvi-foundation/openvue',
        githubRepo: 'openvi-foundation/openvue',
        npmPackage: 'openvue',
        docs: 'https://openvue.dev',
        npm: 'https://www.npmjs.com/package/openvue',
        install: 'npm install openvue @openvue/themes',
        language: 'Vue',
        license: 'MIT',
        forkedFrom: 'PrimeVue',
        upstreamStatus: 'v4: security fixes only',
        upstreamNote: 'PrimeVue 4 gets security fixes only, PrimeVue 5 is not MIT',
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
            'A community-maintained fork of PrimeVue 4.5.5, the last PrimeVue release under the MIT license, developed independently by the OpenVi Foundation. 80+ accessible, themeable components for Vue and Nuxt.',
        metaDescription:
            'OpenVue is an MIT-licensed fork of PrimeVue 4.5.5: 80+ accessible Vue and Nuxt components with a compatible API. Migrate with one command.',
        why: [
            'PrimeVue 4 now receives security fixes only, and new development moved to PrimeVue 5 under a license that is not MIT, while a lot of production applications still depend on the MIT 4.x line. Teams running it were left choosing between freezing the dependency, accepting a new license and rewriting their UI layer.',
            'OpenVue keeps the same component API, so existing code keeps working. The MIT license that PrimeVue 4.5.5 was released under permits the fork, PrimeTek\'s copyright notice is kept in every package, and OpenVue stays MIT.',
            'We forked the whole toolchain rather than just the components. The theming engine and the icon set are maintained here too, so nothing critical resolves at runtime from a scope we do not control.'
        ],
        highlights: [
            {
                title: 'One-command migration',
                body: '[`npx @openvue/migrate`](/projects/openvue/migrate) moves a PrimeVue v4 project across. It shows the plan first, renames dependencies, rewrites imports, lists any PrimeVue reference it could not rewrite, and leaves a single reviewable diff.'
            },
            {
                title: 'Drop-in API compatibility',
                body: 'Component props, slots and events match PrimeVue 4.x. Migrating is a dependency swap rather than a rewrite.'
            },
            {
                title: 'Full documentation site',
                body: '[openvue.dev](https://openvue.dev) carries the complete docs with interactive demos, five theme presets (Aura, Lara, Material, Nora, Nide), the [Theme Builder](https://openvue.dev/theme) and [Theme Designer](https://openvue.dev/designer), and RTL support.'
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
                'Reproducing, triaging and fixing issues that predate the fork.',
                'Migration reports: anything `npx @openvue/migrate` misses in a real codebase.',
                'Accessibility testing with real screen readers, reported against specific versions.',
                'Documentation gaps on [openvue.dev](https://openvue.dev), especially theming and unstyled mode.'
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
        tagline: 'An MIT-licensed icon set for OpenVue and the web.',
        status: 'stable',
        version: '1.1.0',
        repo: 'https://github.com/openvi-foundation/openicons',
        githubRepo: 'openvi-foundation/openicons',
        npmPackage: '@openvue/openicons',
        docs: 'https://openicons.openvue.dev',
        npm: 'https://www.npmjs.com/package/@openvue/openicons',
        install: 'npm install @openvue/openicons',
        language: 'CSS',
        license: 'MIT',
        forkedFrom: 'PrimeIcons',
        upstreamStatus: 'MIT repository archived',
        summary:
            'A community-maintained fork of PrimeIcons, the icon font used by PrimeVue. 329 icons, shipped as a dependency-free webfont and as tree-shakeable Vue 3 components.',
        metaDescription:
            'OpenIcons is an MIT-licensed fork of PrimeIcons: 329 icons as a dependency-free webfont or tree-shakeable Vue components. MIT licensed.',
        why: [
            'The MIT-licensed PrimeIcons repository was archived, so applications using the `pi pi-*` classes had no actively maintained MIT source to depend on.',
            'OpenIcons ships a compatibility stylesheet. Existing `pi-` class names keep rendering while a codebase moves to `oi-` at its own pace.',
            'The webfont has no dependencies, no build step and no runtime: it is a font and a stylesheet. Projects that would rather ship only the icons they use can import the Vue components instead.'
        ],
        highlights: [
            {
                title: '329 icons',
                body: 'Every icon from the PrimeIcons fork under the same MIT license, plus sixteen icons drawn since the fork. Search them all at [openicons.openvue.dev](https://openicons.openvue.dev).'
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
        version: '1.2.0',
        repo: 'https://github.com/openvi-foundation/openux',
        githubRepo: 'openvi-foundation/openux',
        npmPackage: '@openuxkit/themes',
        docs: null,
        npm: 'https://www.npmjs.com/org/openuxkit',
        install: 'npm install @openuxkit/themes',
        language: 'TypeScript',
        license: 'MIT',
        forkedFrom: 'PrimeUIX',
        upstreamStatus: 'MIT repository archived',
        summary:
            'The styling and theming engine underneath OpenVue, forked from the last MIT-licensed PrimeUIX source and maintained independently. Framework-agnostic.',
        metaDescription:
            'OpenUXKit is an MIT-licensed fork of PrimeUIX: the framework-agnostic CSS-in-JS theming engine and design tokens behind OpenVue. MIT licensed.',
        why: [
            'OpenVue used to resolve its theming engine at runtime from a package scope we do not control, so a licensing change there would have reached every OpenVue project.',
            'OpenUXKit was forked from the last MIT-licensed PrimeUIX source, so the styling layer cannot be relicensed out from under the projects that depend on it.',
            'It is framework-agnostic, so the same theming engine and design tokens can back component libraries outside Vue.'
        ],
        highlights: [
            {
                title: 'CSS-in-JS theming engine',
                body: '`@openuxkit/styled` is the runtime that turns design tokens into scoped component styles.'
            },
            {
                title: 'Five theme presets',
                body: 'Aura, Lara, Material, Nora and Nide ship in `@openuxkit/themes` along with the theming API. Try any of them in the [Theme Builder](https://openvue.dev/theme).'
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
        tagline: 'Tailwind CSS components for OpenVue that you copy and own.',
        status: 'stable',
        version: '1.1.0',
        repo: 'https://github.com/openvi-foundation/openvue/tree/master/packages/volt-cli',
        githubRepo: 'openvi-foundation/openvue',
        npmPackage: 'openvolt-vue',
        docs: 'https://openvolt.openvue.dev',
        npm: 'https://www.npmjs.com/package/openvolt-vue',
        install: 'npx openvolt-vue add Button',
        language: 'Vue',
        license: 'MIT',
        forkedFrom: 'PrimeVue Volt',
        upstreamStatus: 'Built on PrimeVue 4',
        upstreamNote: 'built on PrimeVue 4, which gets security fixes only',
        summary:
            'A community-maintained fork of Volt, the MIT-licensed Tailwind CSS components built on unstyled PrimeVue. 69 components you copy into your project as plain .vue files and own from then on, built on OpenVue and released with it.',
        metaDescription:
            'OpenVolt is an MIT-licensed fork of PrimeVue Volt: 69 Tailwind CSS components for OpenVue that you copy into your project and own. Tested in CI, MIT licensed.',
        why: [
            'Volt depends on PrimeVue 4, which now receives security fixes only, so projects built on Volt had no actively developed MIT line underneath them.',
            'OpenVolt is the same 69 components and the same design under the same MIT license, rebuilt on `openvue` instead of `primevue`. It lives in the OpenVue repository and ships with every OpenVue release, so the components and the library underneath them cannot drift apart.',
            'The upstream CLI cloned the repository and copied whatever was on the main branch at that moment. The OpenVolt CLI carries its components inside the published package, so an install always gives you files from a release, matched to your OpenVue version.'
        ],
        highlights: [
            {
                title: 'You own the code',
                body: '`npx openvolt-vue add Button` writes the component into `src/volt` as a regular `.vue` file. The styling is Tailwind classes you can read and change; keyboard support and accessibility still come from OpenVue underneath. Every component is previewed at [openvolt.openvue.dev](https://openvolt.openvue.dev).'
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
                'Gaps in the Vite and Nuxt setup guides on [openvolt.openvue.dev](https://openvolt.openvue.dev).',
                'Projects moving from PrimeVue Volt: what the switch did not cover.'
            ]
        },
        packages: [{ name: 'openvolt-vue', desc: 'CLI that copies OpenVolt components into your project' }]
    }
];

export const tools = [
    {
        name: 'Deni',
        kind: 'Template',
        summary:
            'A full admin dashboard template built with OpenVue, Vue 3, TypeScript and Vite: dashboard, CRUD tables, detail pages, forms with validation, auth and error pages. See it running at [deni.openvue.dev](https://deni.openvue.dev), then clone it and build on it.',
        repo: 'https://github.com/openvi-foundation/deni',
        demo: 'https://deni.openvue.dev',
        demoLabel: 'deni.openvue.dev',
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
