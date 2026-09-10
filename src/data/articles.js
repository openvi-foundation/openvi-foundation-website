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
 */

const sources = {
    devto: { name: 'DEV Community', short: 'dev.to' },
    vuejs: { name: 'r/vuejs', short: 'reddit' }
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
                text: 'OpenVue is an independent, community-driven continuation of PrimeVue 4.5.5, the final release under open-source governance. Maintained under the [OpenVi Foundation](https://www.openvi.dev/), it operates as a fully open-source, MIT-licensed ecosystem free from commercial gating or paywalled functionality. It maintains total architectural fidelity across 80+ core components, preserving full parity with existing props, slots, events, and theming systems, while unifying icon sets and design tooling under a single ecosystem.'
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
    }
];

/** Newest first. The data file is grouped by source; the site reads as a feed. */
export const articlesByDate = [...articles].sort((a, b) => b.date.localeCompare(a.date));

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
