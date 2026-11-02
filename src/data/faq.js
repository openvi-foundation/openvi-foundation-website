export const faq = [
    {
        q: 'What is the OpenVi Foundation?',
        a: 'An independent, community-run organization that maintains open source UI libraries for the web. It forks widely used MIT-licensed front-end libraries when their MIT line stops being developed, and keeps those forks released, documented and MIT licensed.'
    },
    {
        q: 'Which projects does the foundation maintain?',
        a: 'Four libraries, each an MIT-licensed fork: [OpenVue](https://openvue.dev), the Vue component library forked from PrimeVue 4.5.5; [OpenVolt](https://openvolt.openvue.dev), Tailwind CSS components forked from Volt; [OpenIcons](https://openicons.openvue.dev), forked from PrimeIcons; and [OpenUXKit](/projects/openux), the theming engine forked from PrimeUIX. It also publishes templates and starters such as the [Deni](https://deni.openvue.dev) admin dashboard.'
    },
    {
        q: 'Are the projects free to use commercially?',
        a: 'Yes. Every project the OpenVi Foundation publishes is MIT licensed and stays MIT licensed, which permits commercial use, modification and redistribution. Releases already published cannot be relicensed retroactively.'
    },
    {
        q: 'Who runs the foundation, and who funds it?',
        a: 'A group of engineers who know these libraries well, together with a growing set of community contributors. There is no company behind it and no funding. Commit access is granted on sustained, review-quality contribution rather than employer or affiliation.'
    },
    {
        q: 'How can I contribute?',
        a: 'Pick an issue on any of the project repositories, report a bug with a reproduction, improve the documentation, or test components with assistive technology. Each project lists where help is needed most on the [contribute page](/contribute), and conversation happens on [Discord](https://discord.gg/cMVy8jAe6).'
    },
    {
        q: 'I use PrimeVue. Where do I start?',
        a: 'With [OpenVue](https://openvue.dev), which keeps the PrimeVue 4 component API. Running `npx @openvue/migrate` in a PrimeVue 4 project renames the packages and rewrites the imports in one reviewable diff, and the [OpenVue migration guide](/projects/openvue/migrate) covers icons, Volt and older versions.'
    },
    {
        q: 'Is the foundation affiliated with PrimeTek?',
        a: 'No. The OpenVi Foundation is not affiliated with, sponsored by, or endorsed by PrimeTek Informatics or PrimeUI. The projects are forks made under the MIT license the original code was released with, and they keep PrimeTek\'s copyright notice. PrimeVue, PrimeIcons, PrimeUIX, Volt and PrimeTek are names of their respective owners, used here only to describe where the code came from.'
    }
];

export const plainText = (text) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/`([^`]+)`/g, '$1');
