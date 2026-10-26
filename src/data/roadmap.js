export const roadmapSource = 'https://github.com/openvi-foundation/openvue#roadmap';

export const roadmapStatus = {
    done: { label: 'Done', severity: 'success' },
    active: { label: 'In progress', severity: 'warn' },
    planned: { label: 'Planned', severity: 'secondary' }
};

export const roadmap = [
    {
        id: 'foundations',
        title: 'Getting to 1.0',
        summary: 'Stability first: the fork published, documented, migratable and frozen at a stable API.',
        items: [
            {
                status: 'done',
                title: 'Publish to npm',
                text: 'Every OpenVue package is live under the [`@openvue`](https://www.npmjs.com/org/openvue) scope.'
            },
            {
                status: 'done',
                title: 'Launch openvue.dev',
                text: 'The full documentation with interactive component demos, at [openvue.dev](https://openvue.dev).'
            },
            {
                status: 'done',
                title: 'Ship a PrimeVue migration tool',
                text: '`npx @openvue/migrate` moves a PrimeVue v4 project to OpenVue in one command. See the [migration guide](/projects/openvue/migrate).'
            },
            {
                status: 'done',
                date: '2026-09-10',
                title: 'Release 1.0.0',
                text: 'The public API is stable and follows semantic versioning from here. [Release notes](/projects/openvue/changelog#v1-0-0).'
            }
        ]
    },
    {
        id: 'one-one',
        title: 'OpenVue 1.x',
        summary: 'Fixes before features, then the pieces of the ecosystem that were still missing.',
        items: [
            {
                status: 'active',
                title: 'Work through the backlog',
                text: 'Open issues, accessibility and performance come before new surface area. What has landed since 1.0.0 is under Unreleased in the [changelog](/projects/openvue/changelog).'
            },
            {
                status: 'done',
                date: '2026-10-21',
                title: 'Bring Volt back',
                text: '[OpenVolt](/projects/openvolt) is live: `npx openvolt-vue` copies Tailwind-native components into your own codebase.'
            },
            {
                status: 'planned',
                title: 'Ship a new theme',
                text: 'A preset of our own, so OpenVue has its own visual identity alongside Aura, Lara, Material and Nora.'
            },
            {
                status: 'planned',
                title: 'More free templates',
                text: 'Further application templates and layouts, building on [Deni](/articles/deni-free-mit-admin-dashboard-template).'
            }
        ]
    },
    {
        id: 'two',
        title: 'OpenVue 2.0',
        summary: 'Modernised internals, without leaving existing applications behind.',
        items: [
            {
                status: 'planned',
                title: 'Vapor mode',
                text: 'Full compatibility with Vue Vapor. Traditional virtual DOM rendering stays supported.'
            },
            {
                status: 'planned',
                title: 'Composition API and TypeScript at the source',
                text: 'The components rewritten around the Composition API with TypeScript as the source language. The Options API keeps working for the applications that use it.'
            }
        ]
    }
];
