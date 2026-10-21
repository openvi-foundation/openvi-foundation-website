/**
 * The questions people ask about the foundation, answered on the home page and
 * mirrored into FAQPage structured data so the answers can surface directly in
 * a result.
 *
 * These are about the foundation as a whole. Questions about one project, such
 * as migrating a PrimeVue codebase, belong on that project's own pages; one is
 * kept here because it is the reason most people find the foundation at all.
 *
 * Answers are plain text on purpose: FAQPage markup is matched against the
 * visible answer, so anything here has to read as a complete sentence both on
 * the page and out of context in a search result. Keep them short, keep them
 * factual, and keep them in step with the rest of the site — an answer that
 * contradicts the page it sits on is worse than no answer.
 */
export const faq = [
    {
        q: 'What is the OpenVi Foundation?',
        a: 'An independent, community-run organization that maintains open source UI libraries for the web. It picks up widely used front-end libraries after their original maintainers stop, and keeps them released, documented and MIT licensed.'
    },
    {
        q: 'Which projects does the foundation maintain?',
        a: 'Four libraries: OpenVue, the Vue component library that continues PrimeVue; OpenVolt, Tailwind CSS components for OpenVue that continue Volt; OpenIcons, which continues PrimeIcons; and OpenUXKit, the theming engine that continues PrimeUIX. It also publishes templates and starters such as the Deni admin dashboard.'
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
        a: 'Pick an issue on any of the project repositories, report a bug with a reproduction, improve the documentation, or test components with assistive technology. Each project lists where help is needed most on the contribute page, and conversation happens on Discord.'
    },
    {
        q: 'I use PrimeVue. Where do I start?',
        a: 'With OpenVue, which keeps the PrimeVue 4 component API. Running npx @openvue/migrate in a PrimeVue 4 project renames the packages and rewrites the imports in one reviewable diff, and the OpenVue migration guide covers icons, Volt and older versions.'
    },
    {
        q: 'Is the foundation affiliated with PrimeTek?',
        a: 'No. The OpenVi Foundation is not affiliated with, sponsored by, or endorsed by PrimeTek Informatics or PrimeUI. The projects continue upstream work under its original MIT license, with attribution.'
    }
];
