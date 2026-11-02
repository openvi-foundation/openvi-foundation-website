const sources = {
    devto: { name: 'DEV Community', short: 'dev.to' },
    vuejs: { name: 'r/vuejs', short: 'reddit' },
    discussions: { name: 'OpenVi Foundation discussions', short: 'GitHub' },
    github: { name: 'OpenVue on GitHub', short: 'GitHub' }
};

export const articles = [
    {
        slug: 'meet-nide-the-fifth-openvue-theme',
        title: 'Meet Nide, the fifth OpenVue theme',
        kind: 'article',
        date: '2026-11-03',
        author: 'Nikola Jevrić',
        source: {
            ...sources.github,
            url: 'https://github.com/openvi-foundation/openvue/tree/master/packages/themes/src/presets/nide'
        },
        tags: ['OpenVue', 'Theming', 'Nide', 'Release'],
        lede: 'Nide is the first OpenVue theme we designed ourselves: a neutral primary, hairline borders, segmented controls and compact sizing for the software people spend hours in.',
        summary:
            'Nide landed in OpenVue 1.1.0 next to Aura, Lara, Material and Nora. A neutral primary so colour carries meaning, hairline borders, soft focus rings and a denser layout built for dashboards and admin panels.',
        metaDescription:
            'Meet Nide, the fifth OpenVue theme preset: neutral colour, hairline borders, segmented controls and compact sizing for dashboards. MIT licensed.',
        body: [
            {
                t: 'p',
                text: 'When we forked PrimeVue, we inherited four themes: Aura, Lara, Material and Nora. They are good themes, and plenty of apps run on them happily. But every time we sat down to build something ourselves, we caught ourselves doing the same thing. Turn the colour down. Make the borders thinner. Shrink the buttons a little. Calm the whole thing down until the interface stopped asking for attention.'
            },
            {
                t: 'p',
                text: 'After doing that enough times, it felt silly not to ship it. So we did. Nide landed in [OpenVue 1.1.0](/projects/openvue/changelog#v1-1-0), and it now sits next to the other four as a first-class preset. Nothing changes for apps already using Aura or any other preset. Nide is simply one more option.'
            },
            { t: 'h2', text: 'Colour that means something' },
            {
                t: 'p',
                text: 'Nide has no brand colour of its own. The primary colour is near-black in light mode and near-white in dark mode, taken straight from the surface palette. Buttons, selected states and toggles all use it.'
            },
            {
                t: 'p',
                text: 'This is the most important decision in the theme. In most interfaces colour is doing two jobs at once: decorating the components and telling the user something. When every primary button is bright blue, a blue info message has to compete with it, and a red error has to fight for attention against a screen that is already colourful. With a neutral primary, colour is free to carry meaning again. Red means something went wrong, green means it worked, amber means look closer. And when you add your own brand colour, it is the only accent on the page, so it actually stands out.'
            },
            {
                t: 'figure',
                src: '/articles/nide-vs-aura-colour.png',
                alt: 'The same buttons, messages and tags in Aura and in Nide. Aura uses a green primary on buttons and tinted backgrounds on messages; Nide uses a near-black primary, white messages with coloured text, and solid status tags.',
                width: 2296,
                height: 728
            },
            { t: 'h2', text: 'Structure without noise' },
            {
                t: 'p',
                text: 'Borders in Nide are hairlines, and shadows are soft and kept for things that genuinely float above the page: dropdowns, popovers and dialogs. Everything that sits flat on the page stays flat.'
            },
            {
                t: 'p',
                text: 'That gives the interface a clear sense of depth. If something has a shadow, it is temporary and on top of everything else. If it has only a thin border, it is part of the layout. Users never have to think about this, but they feel it, and it makes busy screens easier to scan.'
            },
            { t: 'h2', text: 'Controls that explain themselves' },
            {
                t: 'p',
                text: 'Some components got a different shape, not just different colours.'
            },
            {
                t: 'p',
                text: 'Tabs and SelectButton are segmented: the options sit together inside one container, and the selected one is lifted out of it. A row of separate buttons does not tell you whether you can pick one option or several. A segmented control does, because it looks like a single choice between parts of the same thing.'
            },
            {
                t: 'figure',
                src: '/articles/nide-vs-aura-segmented.png',
                alt: 'Tabs and SelectButton in Aura and in Nide. Aura draws tabs as text with a green underline; Nide puts the tabs in one grey container with the selected tab lifted out in white, like the SelectButton below it.',
                width: 2296,
                height: 658,
                caption: 'Tabs and SelectButton. Nide draws tabs as one segmented control.'
            },
            { t: 'h2', text: 'Built for long sessions' },
            {
                t: 'p',
                text: 'Nide is denser than the other presets. At the default 16px root size, text in buttons and fields is 14px and the controls are 36px tall, with 32px and 40px for the small and large sizes. Checkboxes and radio buttons are 18px, or 16px in the small size.'
            },
            {
                t: 'p',
                text: 'This is a deliberate choice for the kind of software people spend hours in: dashboards, admin panels, internal tools, anything with a lot of forms and tables. Density there is a feature. More rows fit on screen, related fields stay close together, and the eye travels less between the things that belong together. The controls are still comfortably large enough to hit with a mouse, and if your app needs more room, raising the root font size scales everything with it.'
            },
            {
                t: 'figure',
                src: '/articles/nide-vs-aura-density.png',
                alt: 'The same form in Aura and in Nide: a name field, a role select, checkboxes, radio buttons, a toggle switch and two buttons. The Nide form is shorter, with smaller text and controls and a near-black primary.',
                width: 2296,
                height: 988,
                caption: 'One form, both presets, at the default 16px root size. The Nide version is more compact.'
            },
            { t: 'h2', text: 'Focus you can see' },
            {
                t: 'p',
                text: 'Keyboard users need to know where they are at all times. Nide uses a 3px focus ring in a muted grey. It is wide enough to spot instantly, even against the near-black primary, but soft enough that it does not flash across the page every time someone tabs through a form.'
            },
            {
                t: 'p',
                text: 'Motion is kept short as well. Transitions run in 150 milliseconds, which is long enough to show what changed and short enough that the interface never feels like it is waiting for an animation to finish.'
            },
            { t: 'h2', text: 'Using it' },
            { t: 'p', text: 'Nide works like any other preset:' },
            {
                t: 'code',
                lang: 'js',
                code: "import { createApp } from 'vue';\nimport OpenVue from 'openvue/config';\nimport Nide from '@openvue/themes/nide';\nimport App from './App.vue';\n\nconst app = createApp(App);\n\napp.use(OpenVue, {\n    theme: {\n        preset: Nide\n    }\n});\n\napp.mount('#app');"
            },
            { t: 'p', text: 'If you load OpenVue from a CDN, there is a build for that too:' },
            {
                t: 'code',
                lang: 'html',
                code: '<script src="https://unpkg.com/@openvue/themes/umd/nide.min.js"></script>'
            },
            {
                t: 'p',
                text: "Under the hood, Nide is layered on Aura's design tokens. Anything you already know about customising Aura carries over: override a token, extend the preset with `definePreset`, or add a primary colour if you do want a bit of brand after all."
            },
            { t: 'h2', text: 'Make it yours' },
            {
                t: 'p',
                text: 'Nide joins Aura, Lara, Material and Nora in both of our theming tools, so you can start from whichever preset fits your project best.'
            },
            {
                t: 'p',
                text: 'The [Theme Builder](https://openvue.dev/theme) at openvue.dev/theme lets you pick any of the five as a base and adjust the things people usually want to change: colours, font, corner radius, density, focus ring and a few more. The whole page is the preview, so you see every choice on real components and sample apps as you make it. When you are happy, you export a few small files and drop them into your project.'
            },
            {
                t: 'p',
                text: 'If you need to go deeper, the [Theme Designer](https://openvue.dev/designer) lets you edit every token, one by one, on top of any preset you choose.'
            },
            {
                t: 'p',
                text: 'Both run entirely in your browser. No account, no license key, no paid tier.'
            },
            { t: 'h2', text: 'What comes next' },
            {
                t: 'p',
                text: 'Nide is the first theme we have designed ourselves, and it will not be the last thing that grows beyond what we started with. Like the rest of [OpenVue](https://openvue.dev), it is MIT licensed and free to use however you like.'
            },
            {
                t: 'p',
                text: 'Try it out, and if something looks off, [open an issue](https://github.com/openvi-foundation/openvue/issues). Themes get better the same way components do: someone notices a detail, and we fix it.'
            }
        ]
    },
    {
        slug: 'primevue-v4-stopped-active-dev-openvue-takes-over',
        title: 'PrimeVue v4 moved to security-only maintenance. OpenVue forks it, on MIT.',
        kind: 'article',
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
            'PrimeVue v4 moved to security-only maintenance. OpenVue is an MIT fork of 4.5.5, with the same API and a one-command migration.',
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
                text: 'OpenVue is an independent, community-driven fork of PrimeVue 4.5.5, the last PrimeVue release under the MIT license. Maintained under the [OpenVi Foundation](https://openvi.dev), it operates as a fully open-source, MIT-licensed ecosystem. It maintains total architectural fidelity across 80+ core components, preserving full parity with existing props, slots, events, and theming systems, while unifying icon sets and design tooling under a single ecosystem.'
            },
            {
                t: 'p',
                text: 'Because the API remains completely aligned with PrimeVue v4, migration requires zero structural refactoring. Upgrading is a straightforward dependency swap.'
            },
            {
                t: 'p',
                text: 'You can run the OpenVue migration CLI to update your project automatically:'
            },
            { t: 'code', lang: 'shell', code: 'npx @openvue/migrate' },
            {
                t: 'p',
                text: 'The utility renames your PrimeVue dependencies, rewrites import statements across your source files, and reports any references it could not migrate, producing a single, reviewable diff.'
            },
            {
                t: 'code',
                lang: 'diff',
                code: "- import Button from 'primevue/button'\n+ import Button from 'openvue/button'"
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
                text: 'OpenVue is an independent, community-maintained MIT fork of the PrimeVue 4.5.5 release and is not affiliated with, sponsored by, or endorsed by PrimeTek. PrimeVue is a name of its respective owner.'
            }
        ]
    },
    {
        slug: 'openvue-1-0-is-officially-out',
        title: "OpenVue 1.0 is officially out, and here's what's next: Volt, Vapor & 2.0",
        kind: 'discussion',
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
                text: "We're long-time PrimeVue users who believe a good UI library should stay free and community driven. When new PrimeVue development moved to a license that is not MIT, we decided to fork the last MIT release rather than just watch."
            },
            {
                t: 'p',
                text: 'OpenVue is forked from 4.5.5, the last MIT release. It keeps the exact same API, so your existing code keeps working without rewrite headaches.'
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
                text: 'OpenVi Foundation is an independent community organization, not affiliated with or endorsed by PrimeTek.'
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
                text: 'When we forked PrimeVue 4.5.5 as [OpenVue](https://openvue.dev/), the goal was to keep the whole MIT ecosystem alive, not only the component library. Volt was the piece still missing, and OpenVolt is our MIT fork of it: maintained, tested and released together with OpenVue.'
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
                text: 'PrimeVue Volt depends on PrimeVue v4, which has moved to security-only maintenance. OpenVolt lives in the OpenVue repository, ships with every OpenVue release, and has an open issue tracker if something needs fixing.'
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
                text: 'OpenVue and OpenVolt are independent, community-maintained MIT projects and are not affiliated with, sponsored by, or endorsed by PrimeTek. Volt was created by PrimeTek; OpenVolt is a fork of it under the same MIT license, with PrimeTek\'s copyright notice kept.'
            }
        ]
    }
];

export const articlesByDate = [...articles].sort((a, b) => b.date.localeCompare(a.date));

export const tagSlug = (tag) =>
    tag
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

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

export const headingId = (text) =>
    text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

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

export const formatDate = (iso) =>
    new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    });
