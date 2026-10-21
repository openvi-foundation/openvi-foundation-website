/**
 * Everything the foundation has published about the fork, wherever it first
 * appeared. Each entry generates a row on /articles and its own indexable page
 * at /articles/<slug>.
 *
 * These pieces were written by the foundation and posted to dev.to and reddit
 * first; the copies here are the canonical ones, because the foundation's own
 * site is where the argument for the fork belongs. Every detail page links back
 * to the original thread, which is where the discussion actually happened.
 *
 * `kind` splits the two registers. An `article` is written to be read on its
 * own; a `discussion` is a post that opened a thread, and its page says so
 * rather than pretending the comments underneath it do not exist.
 *
 * `summary` is row copy and runs long. `metaDescription` is the search-result
 * version of the same claim, kept under 160 characters so Google does not cut
 * it.
 *
 * Body blocks, all of which take `backtick` code spans and [markdown](links):
 *   { t: 'p',    text }
 *   { t: 'h2',   text }              heading, id derived from the text
 *   { t: 'ul',   items }             string, or { title, text } for a lead-in
 *   { t: 'code', code, lang }        lang 'diff' colours the +/- lines
 *   { t: 'note', text }              an aside, set apart from the argument
 *   { t: 'figure', src, alt, width, height, caption?, href? }
 *                                    a screenshot; width/height are the file's
 *                                    own pixels, so the page reserves the space
 */

const sources = {
    devto: { name: 'DEV Community', short: 'dev.to' },
    vuejs: { name: 'r/vuejs', short: 'reddit' },
    discussions: { name: 'OpenVi Foundation discussions', short: 'GitHub' },
    github: { name: 'OpenVue on GitHub', short: 'GitHub' }
};

export const articles = [
    {
        slug: 'primevue-v4-stopped-active-dev-openvue-takes-over',
        title: 'PrimeVue v4 stopped active development. OpenVue takes over, on MIT.',
        kind: 'article',
        // From the dev.to API, so this one is exact.
        date: '2026-08-29',
        author: 'Nikola Jevrić',
        source: {
            ...sources.devto,
            url: 'https://dev.to/njevric/primevue-v4-stopped-active-dev-openvue-takes-over-on-mit-5c05'
        },
        tags: ['Vue', 'PrimeVue', 'Open source', 'Migration'],
        lede: 'PrimeVue v4 has moved to security-only maintenance. Here is what that means for a production Vue app, and what migrating off it actually costs.',
        summary:
            'What security-only maintenance means for teams running PrimeVue v4 in production, and why the foundation forked 4.5.5 rather than let the MIT line stop there.',
        metaDescription:
            'PrimeVue v4 moved to security-only maintenance. OpenVue continues 4.5.5 under MIT, with the same API and a one-command migration.',
        body: [
            {
                t: 'p',
                text: "If your stack relies on PrimeVue v4, there's a recent change in the project's maintenance lifecycle worth knowing about."
            },
            {
                t: 'p',
                text: 'PrimeVue v4 has officially transitioned into security-only maintenance mode. As outlined in the project’s documentation, active feature development has ceased, issue tracking is now read-only, and new bug fixes or enhancements are scoped to a separate project line.'
            },
            {
                t: 'p',
                text: 'While this marks a strategic shift for the core maintainers, it introduces strategic risk for engineering teams running production workloads on PrimeVue v4 under the MIT license, specifically those requiring ongoing component iteration, active bug resolution, and long-term ecosystem support.'
            },
            { t: 'p', text: 'To address this gap, we launched [OpenVue](https://openvue.dev/).' },
            {
                t: 'p',
                text: 'OpenVue is an independent, community-driven continuation of PrimeVue 4.5.5, the final release under open-source governance. Maintained under the [OpenVi Foundation](https://openvi.dev), it operates as a fully open-source, MIT-licensed ecosystem free from commercial gating or paywalled functionality. It maintains total architectural fidelity across 80+ core components, preserving full parity with existing props, slots, events, and theming systems, while unifying icon sets and design tooling under a single ecosystem.'
            },
            {
                t: 'p',
                text: 'Because the API remains completely aligned with PrimeVue v4, migration requires zero structural refactoring. Upgrading is a straightforward dependency swap.'
            },
            {
                t: 'p',
                text: 'You can run the official CLI migration utility to update your project automatically:'
            },
            { t: 'code', lang: 'shell', code: 'npx @openvue/migrate' },
            {
                t: 'p',
                text: 'The utility renames your PrimeVue dependencies, rewrites import statements across your source files, and reports any references it could not migrate, producing a single, reviewable diff.'
            },
            {
                t: 'code',
                lang: 'diff',
                code: "- import Button from 'primevue/button'\n+ import Button from '@openvue/button'"
            },
            {
                t: 'p',
                text: 'Your component templates, design tokens, and application logic remain entirely untouched.'
            },
            {
                t: 'p',
                text: '[OpenVue](https://openvue.dev/) is currently in 1.0.0-rc. You can explore interactive documentation, component showcases, and API specifications at [openvue.dev](https://openvue.dev/), or review the codebase on [GitHub](https://github.com/openvi-foundation/openvue). If your team depends on PrimeVue v4 under MIT and requires continued active development, we invite you to evaluate the project, star the repository, and join the community.'
            },
            {
                t: 'note',
                text: 'OpenVue is an independent, community-maintained MIT project based on the PrimeVue 4.5.5 release and is not affiliated with PrimeTek.'
            }
        ]
    },
    {
        slug: 'openvue-1-0-is-officially-out',
        title: "OpenVue 1.0 is officially out, and here's what's next: Volt, Vapor & 2.0",
        kind: 'discussion',
        // TODO: confirm against the reddit post timestamp.
        date: '2026-09-28',
        author: 'Nikola Jevrić',
        source: {
            ...sources.vuejs,
            url: 'https://www.reddit.com/r/vuejs/comments/1wsk2vs/openvue_10_is_officially_out_and_heres_whats_next/'
        },
        tags: ['Release', 'Roadmap', 'Volt', 'Vapor'],
        lede: 'The 1.0 post: what landed since the release candidate, what 1.1 is focused on, and where 2.0 is headed with Vue Vapor and a TypeScript-first core.',
        summary:
            'OpenVue 1.0.0 is on npm, with TreeTable filtering, a free Theme Designer and the Deni template. Next up: Volt, a new default theme, more templates, and a Vapor-ready 2.0.',
        metaDescription:
            'OpenVue 1.0 is out: TreeTable filtering, a free Theme Designer, Deni. Next: Volt and a new theme in 1.1, Vue Vapor and TypeScript-first in 2.0.',
        body: [
            {
                t: 'p',
                text: 'Quick update for everyone following the project: OpenVue 1.0.0 is officially live on npm. For context if you missed the previous threads: OpenVue is an MIT licensed fork of PrimeVue 4.5.5, maintained under the OpenVi Foundation.'
            },
            { t: 'p', text: "Since the RC post, here's what landed in 1.0:" },
            {
                t: 'ul',
                items: [
                    {
                        title: 'TreeTable filtering',
                        text: 'Added row filters, filter menus, and multi constraint rules matching DataTable.'
                    },
                    {
                        title: 'Theme Designer',
                        text: 'Integrated a visual editor to tweak primitive, semantic, and component tokens and export theme presets. Fully free, with no accounts or license keys.'
                    },
                    {
                        title: 'Deni',
                        text: 'Released our [first free admin dashboard template](/articles/deni-free-mit-admin-dashboard-template) built with OpenVue.'
                    },
                    {
                        title: 'DataTable fixes',
                        text: 'Fixed an issue with persisted column widths when toggling columns dynamically.'
                    }
                ]
            },
            {
                t: 'p',
                text: 'Plus plenty of smaller bug fixes and improvements across the library and showcase. Full changelog: [CHANGELOG.md](https://github.com/openvi-foundation/openvue/blob/master/CHANGELOG.md)'
            },
            { t: 'h2', text: 'OpenVue 1.1' },
            { t: 'p', text: "We're currently focused on:" },
            {
                t: 'ul',
                items: [
                    {
                        title: 'Volt',
                        text: 'Bringing source based, Tailwind oriented components back into the OpenVue ecosystem.'
                    },
                    {
                        title: 'A new default theme',
                        text: 'Giving OpenVue its own visual identity rather than relying entirely on the existing themes.'
                    },
                    {
                        title: 'More free templates',
                        text: 'Expanding on Deni with additional templates and application layouts.'
                    }
                ]
            },
            { t: 'h2', text: 'OpenVue 2.0' },
            {
                t: 'p',
                text: "The long term goal for 2.0 is to modernize the internals around Vue Vapor, Composition API, and a TypeScript first architecture. We're keeping VDOM and Options API support, so this isn't about abandoning the existing Vue ecosystem. Instead, 2.0 will be the milestone where we can clean up and modernize the internals under the hood."
            },
            {
                t: 'p',
                text: "There's already a [community discussion](https://github.com/orgs/openvi-foundation/discussions/644) around this direction if you want to join in or see what people are suggesting."
            },
            {
                t: 'p',
                text: "We're still a relatively small project, so community feedback matters a lot. If you're using OpenVue, testing it, or just following the project, we'd love to hear what you'd like to see in 1.1, especially around Volt, themes, templates and the component backlog."
            },
            { t: 'h2', text: 'Links' },
            {
                t: 'ul',
                items: [
                    '[OpenVue documentation](https://openvue.dev/)',
                    '[GitHub repository](https://github.com/openvi-foundation/openvue)'
                ]
            },
            {
                t: 'p',
                text: 'Thanks to everyone who has contributed, tested, reported issues and followed the project since the first release.'
            }
        ]
    },
    {
        slug: 'openvue-1-0-0-rc',
        title: 'OpenVue, the MIT fork of PrimeVue, hit 1.0.0-rc',
        kind: 'discussion',
        // TODO: confirm. Anchored to the 1.0.0-rc.0 npm publish on 2026-08-18.
        date: '2026-08-19',
        author: 'Nikola Jevrić',
        source: {
            ...sources.vuejs,
            url: 'https://www.reddit.com/r/vuejs/comments/1vsuyf4/openvue_mit_fork_of_primevue_hit_100rc/'
        },
        tags: ['Release', 'OpenUXKit', 'Migration', 'Charts'],
        lede: 'The release-candidate post: the last PrimeUIX dependency gone, the migration CLI finished, charts on Chart.js 4, and the bugs that came back from the community.',
        summary:
            'What landed in the release candidate: PrimeUIX replaced by OpenUXKit, the migration CLI finished, Chart.js 4 with theme-reactive charts, and a run of community-reported fixes.',
        metaDescription:
            'OpenVue 1.0.0-rc: PrimeUIX replaced by OpenUXKit, a finished migration CLI, theme-reactive Chart.js 4 charts, and community-reported fixes.',
        body: [
            { t: 'h2', text: 'What is done' },
            {
                t: 'ul',
                items: [
                    {
                        title: 'Fully removed PrimeUIX dependencies',
                        text: 'The core engine (theming, styling, utils, forms) now lives under [OpenUXKit](/projects/openux), forked and maintained under our org at 1.0.0.'
                    },
                    {
                        title: 'Migration tool',
                        text: '`npx @openvue/migrate` automatically handles moving a PrimeVue v4 project over, including dependency renames, import rewrites, and compat overrides. Details and docs: [openvue.dev/migrate](https://openvue.dev/migrate/)'
                    },
                    {
                        title: 'Showcase interactive playgrounds',
                        text: 'We added playground tabs to more components, with full coverage planned for the stable 1.0 release.'
                    },
                    {
                        title: 'Chart integration',
                        text: 'Bumped Chart.js straight from 3.x to 4.5.1. Charts now natively react to the active theme out of the box, which kills off a massive chunk of custom styling boilerplate. Every chart type now has its own interactive playground in the showcase too.'
                    }
                ]
            },
            { t: 'p', text: 'Bug fixes:' },
            {
                t: 'ul',
                items: [
                    'BlockUI no longer leaves a phantom mask over the page if unmounted mid-animation or toggled quickly.',
                    'DataTable advanced filter menu no longer closes prematurely when clicking inside nested Select, MultiSelect, or DatePicker inputs.',
                    'Virtual-scrolled DataTable rows with grouping no longer drift out of alignment during fast scrolls.',
                    '…and more.'
                ]
            },
            { t: 'h2', text: 'What is coming before 1.0 stable' },
            {
                t: 'ul',
                items: [
                    'A free, open-source visual theme editor.',
                    'Continued work on open GitHub issues.'
                ]
            },
            { t: 'h2', text: 'Thanks' },
            {
                t: 'p',
                text: 'Huge thanks to everyone who tested early builds, reported edge cases, and sent PRs. A solid portion of these fixes came directly from community reports, which helped us catch things we would have missed on our own.'
            },
            { t: 'h2', text: 'Links' },
            {
                t: 'ul',
                items: [
                    '[GitHub repository](https://github.com/openvi-foundation/openvue)',
                    '[OpenVue documentation](https://openvue.dev/)'
                ]
            }
        ]
    },
    {
        slug: 'meet-openvue-mit-fork-of-primevue',
        title: 'Meet OpenVue, an MIT fork of PrimeVue 4.5.5',
        kind: 'discussion',
        // TODO: confirm. Anchored to the beta window on npm, 2026-07-23 to 2026-08-02.
        date: '2026-07-28',
        author: 'Nikola Jevrić',
        source: {
            ...sources.vuejs,
            url: 'https://www.reddit.com/r/vuejs/comments/1v4ky03/meet_openvue_an_mit_fork_of_primevue_455/'
        },
        tags: ['Announcement', 'Fork', 'MIT', 'Accessibility'],
        lede: 'The announcement post. Why we forked from 4.5.5, what the first months of work are actually going into, and what we deliberately are not promising yet.',
        summary:
            'The post that introduced the fork to r/vuejs: where OpenVue picks up, what the early roadmap is limited to on purpose, and why the API stays untouched.',
        metaDescription:
            'The post introducing OpenVue to r/vuejs: an MIT fork of PrimeVue 4.5.5 with the same API, community run, and free permanently.',
        body: [
            { t: 'p', text: 'Hey Vue community!' },
            {
                t: 'p',
                text: "We're long-time PrimeVue users who believe a good UI library should stay free and community driven. When the license changed and PrimeVue moved away from open source, we decided to take action rather than just watch."
            },
            {
                t: 'p',
                text: 'OpenVue picks up right from 4.5.5, the last MIT release. It keeps the exact same API, so your existing code keeps working without rewrite headaches.'
            },
            {
                t: 'p',
                text: 'Right now our main focus is keeping the foundation solid: improving accessibility, patching security vulnerabilities, handling community issues, and maintaining compatibility with the latest Vue and Nuxt versions. We have bigger ideas for where to take this, but we\'d rather build them based on real feedback.'
            },
            {
                t: 'p',
                text: 'Everything you\'re used to from PrimeVue v4 is there, complete with docs and live examples. We also made `@openvue/migrate` to let you switch existing projects over in a single command.'
            },
            {
                t: 'p',
                text: 'OpenVi Foundation is an independent community organization, not affiliated with PrimeTek.'
            },
            { t: 'p', text: 'OpenVue is and will always be 100% free and open source.' },
            {
                t: 'p',
                text: "We're still in beta, so bug reports and PRs are super welcome."
            },
            {
                t: 'ul',
                items: [
                    'Docs: [openvue.dev](https://openvue.dev/)',
                    'GitHub: [openvi-foundation/openvue](https://github.com/openvi-foundation/openvue)',
                    'Migration from PrimeVue: [openvue.dev/migrate](https://openvue.dev/migrate/)'
                ]
            }
        ]
    },
    {
        slug: 'deni-free-mit-admin-dashboard-template',
        title: 'Deni, a free MIT admin dashboard template for OpenVue',
        kind: 'discussion',
        date: '2026-09-17',
        author: 'Nikola Jevrić',
        source: {
            ...sources.discussions,
            url: 'https://github.com/orgs/openvi-foundation/discussions/660'
        },
        tags: ['Template', 'Admin', 'MIT', 'TypeScript'],
        lede: 'Deni is a free, MIT-licensed admin dashboard built with OpenVue, Vue 3, TypeScript and Vite. Not a landing page with a chart on it: the screens an admin app actually needs, with the loading and empty states already written.',
        summary:
            'A free, MIT-licensed admin dashboard template built on OpenVue, Vue 3, TypeScript and Vite, with CRUD screens, a theming engine, and the loading and empty states already written.',
        metaDescription:
            'Deni is a free MIT admin dashboard template built with OpenVue, Vue 3, TypeScript and Vite. Demo, repository, and what it ships with.',
        body: [
            {
                t: 'p',
                text: "We've added Deni, a free, MIT-licensed admin dashboard template built with OpenVue, Vue 3, TypeScript and Vite."
            },
            {
                t: 'figure',
                src: '/articles/deni-admin-dashboard.png',
                alt: 'The Deni dashboard in its light theme: a sidebar of admin sections, statistic tiles for revenue, orders, average order and active customers, revenue and orders charts, and a table of recent orders.',
                width: 1907,
                height: 916,
                href: 'https://deni.openvue.dev/',
                caption: 'The dashboard screen. [Open the live demo](https://deni.openvue.dev/).'
            },
            {
                t: 'p',
                text: "It's a real starting point for admin apps rather than a screenshot of one. The screens are there, and so are the states a demo usually skips."
            },
            { t: 'h2', text: 'What it ships with' },
            {
                t: 'ul',
                items: [
                    {
                        title: 'CRUD screens',
                        text: 'Products, orders and customers, each with list, detail and edit views.'
                    },
                    {
                        title: 'The rest of the app',
                        text: 'Dashboard, analytics, calendar, inbox, forms, authentication and error pages.'
                    },
                    {
                        title: 'Loading and empty states',
                        text: 'Written for every screen, because those are the states a template normally leaves you to fill in against a real API.'
                    },
                    {
                        title: 'A theming engine',
                        text: 'Light, dim and dark, four presets, and custom palettes.'
                    },
                    {
                        title: 'A modular architecture',
                        text: 'Structured so swapping the mock data for a real backend is a change in one layer.'
                    }
                ]
            },
            { t: 'h2', text: 'Try it' },
            {
                t: 'ul',
                items: [
                    'Demo: [deni.openvue.dev](https://deni.openvue.dev/)',
                    'Repository: [openvi-foundation/deni](https://github.com/openvi-foundation/deni)'
                ]
            },
            {
                t: 'p',
                text: 'Give it a try and let us know what you think. The thread is open, and issues on the repository are the fastest way to get something fixed.'
            }
        ]
    },
    {
        slug: 'openvolt-is-live-tailwind-components-for-openvue',
        title: 'OpenVolt is live: Tailwind components for OpenVue, based on PrimeVue Volt',
        kind: 'article',
        date: '2026-10-21',
        author: 'Nikola Jevrić',
        // TODO: point at the dev.to or reddit post once it is up.
        source: {
            ...sources.github,
            url: 'https://github.com/openvi-foundation/openvue/tree/master/packages/volt-cli'
        },
        tags: ['OpenVolt', 'Tailwind CSS', 'Open source', 'MIT'],
        lede: 'OpenVolt is the Tailwind CSS side of OpenVue: 69 components you copy into your project and own, built on the MIT fork of PrimeVue. It is actively maintained, tested on every pull request, and installed from releases only.',
        summary:
            'OpenVolt brings Volt, the Tailwind CSS components built on unstyled PrimeVue, to OpenVue. Same components and design, now actively maintained, tested in CI, and installed by a CLI that always matches your OpenVue release.',
        metaDescription:
            'OpenVolt is live: 69 Tailwind CSS components for OpenVue, the MIT fork of PrimeVue. Actively maintained, tested, and always matched to your release.',
        body: [
            {
                t: 'p',
                text: 'OpenVolt is live at [openvolt.openvue.dev](https://openvolt.openvue.dev/).'
            },
            {
                t: 'p',
                text: 'When we forked PrimeVue 4.5.5 as [OpenVue](https://openvue.dev/), the goal was to keep the whole MIT ecosystem alive, not only the component library. Volt was the piece still missing, and with OpenVolt it is back: maintained, tested and released together with OpenVue.'
            },
            { t: 'h2', text: 'What is Volt?' },
            {
                t: 'p',
                text: 'Volt is a set of Tailwind CSS components built on top of PrimeVue in unstyled mode. Instead of installing a styled library and fighting its theme, you copy each component into your project as a regular `.vue` file. The styling is plain Tailwind classes you can read and change, while keyboard support, accessibility and all the hard behaviour still come from the library underneath.'
            },
            {
                t: 'p',
                text: 'You get the convenience of a full component library and the freedom of owning your UI code.'
            },
            { t: 'h2', text: 'What is OpenVolt?' },
            {
                t: 'p',
                text: 'OpenVolt is Volt for OpenVue. The same 69 components and the same design, now built on `openvue` instead of `primevue`, and maintained by the OpenVi Foundation under the MIT license.'
            },
            {
                t: 'p',
                text: 'PrimeVue Volt depends on PrimeVue v4, which has moved to security-only maintenance with read-only issue tracking. OpenVolt lives in the OpenVue repository, ships with every OpenVue release, and has an open issue tracker if something needs fixing.'
            },
            { t: 'h2', text: 'Why OpenVolt' },
            {
                t: 'ul',
                items: [
                    {
                        title: 'Actively maintained',
                        text: 'Bugs get reported, fixed and released, together with the library the components are built on.'
                    },
                    {
                        title: 'Tested on every pull request',
                        text: 'CI installs OpenVolt into a fresh project, type checks it and runs it in a real browser. We fixed the components that failed, and that check now keeps them working.'
                    },
                    {
                        title: 'Always installs a release',
                        text: "PrimeVue's Volt CLI clones the repository and copies whatever is on the main branch at that moment. The OpenVolt CLI ships its components inside the package, so you always get the files from a published release, matched to your OpenVue version."
                    },
                    {
                        title: 'Works offline, no git needed',
                        text: 'Nothing is downloaded when you add a component, so it works in CI, behind firewalls and on a plane.'
                    },
                    {
                        title: 'Your edits are safe',
                        text: 'Components you have already customised are never overwritten unless you ask for it.'
                    },
                    {
                        title: 'MIT, with no strings attached',
                        text: 'No accounts, no license keys, no paid tier.'
                    }
                ]
            },
            { t: 'h2', text: 'Get started' },
            {
                t: 'p',
                text: 'Set up OpenVue in unstyled mode with Tailwind CSS by following the [Vite](https://openvolt.openvue.dev/vite) or [Nuxt](https://openvolt.openvue.dev/nuxt) guide, then add the components you need:'
            },
            {
                t: 'code',
                lang: 'shell',
                code: 'npx openvolt-vue add Button\nnpx openvolt-vue add DataTable Dialog DatePicker\nnpx openvolt-vue add all'
            },
            {
                t: 'p',
                text: 'The files land in `src/volt`, and from that moment they are yours.'
            },
            { t: 'h2', text: 'Already using PrimeVue Volt?' },
            {
                t: 'p',
                text: 'Switching takes two commands. The migration tool moves your project from PrimeVue to OpenVue, and the OpenVolt CLI replaces your Volt components with the OpenVolt versions:'
            },
            {
                t: 'code',
                lang: 'shell',
                code: 'npx @openvue/migrate\nnpx openvolt-vue add all --overwrite'
            },
            {
                t: 'p',
                text: 'If you have customised some components, leave out `--overwrite` and your edited files will be kept.'
            },
            { t: 'h2', text: 'Links' },
            {
                t: 'ul',
                items: [
                    'OpenVolt: [openvolt.openvue.dev](https://openvolt.openvue.dev/)',
                    'OpenVue: [openvue.dev](https://openvue.dev/)',
                    'CLI on npm: [openvolt-vue](https://www.npmjs.com/package/openvolt-vue)',
                    'GitHub: [openvi-foundation/openvue](https://github.com/openvi-foundation/openvue)'
                ]
            },
            {
                t: 'p',
                text: "Give OpenVolt a try and tell us what you think. If a component is missing or something doesn't work the way you expect, open an issue on GitHub, and a star on the repository helps more people find the project."
            },
            {
                t: 'note',
                text: 'OpenVue and OpenVolt are independent, community-maintained MIT projects and are not affiliated with PrimeTek or PrimeUI. Volt was created by PrimeTek; OpenVolt continues it under the same MIT license.'
            }
        ]
    }
];

/** Newest first. The data file is grouped by source; the site reads as a feed. */
export const articlesByDate = [...articles].sort((a, b) => b.date.localeCompare(a.date));

/** URL segment for a tag, e.g. `Tailwind CSS` -> `tailwind-css`. */
export const tagSlug = (tag) =>
    tag
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

/**
 * Every tag in use with its articles, most used first and alphabetical within
 * a count, so the filter bar leads with the topics there is most to read on.
 */
export const tags = Object.values(
    articlesByDate.reduce((acc, article) => {
        for (const name of article.tags) {
            const slug = tagSlug(name);
            acc[slug] ??= { name, slug, articles: [] };
            acc[slug].articles.push(article);
        }
        return acc;
    }, {})
).sort((a, b) => b.articles.length - a.articles.length || a.name.localeCompare(b.name));

export const kindLabels = {
    article: { label: 'Article', note: 'Written for publication' },
    discussion: { label: 'Discussion', note: 'Opened a thread, and the thread is still there' }
};

/** Anchor id for a body heading. Matches what the detail page links to. */
export const headingId = (text) =>
    text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

/**
 * Reading time from the body's own words, so it cannot drift from the copy.
 * 200wpm, rounded up, because a one-minute read should never round to zero.
 */
export const readingTime = (article) => {
    const words = article.body
        .flatMap((block) => {
            if (block.t === 'ul') {
                return block.items.map((i) => (typeof i === 'string' ? i : `${i.title} ${i.text}`));
            }
            return block.code ?? block.text ?? '';
        })
        .join(' ')
        .split(/\s+/)
        .filter(Boolean).length;

    return Math.max(1, Math.round(words / 200));
};

/** 29 August 2026. Written out, because a numeric date is ambiguous by country. */
export const formatDate = (iso) =>
    new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    });
