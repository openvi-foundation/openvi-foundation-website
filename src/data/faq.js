/**
 * The questions people actually type into a search engine after PrimeVue was
 * archived, answered on the home page and mirrored into FAQPage structured
 * data so the answers can surface directly in a result.
 *
 * Answers are plain text on purpose: FAQPage markup is matched against the
 * visible answer, so anything here has to read as a complete sentence both on
 * the page and out of context in a search result. Keep them short, keep them
 * factual, and keep them in step with the rest of the site — an answer that
 * contradicts the page it sits on is worse than no answer.
 */
export const faq = [
    {
        q: 'What is the difference between OpenVue and PrimeVue?',
        a: 'OpenVue continues PrimeVue 4.x with the same component API, so props, slots and events match. The differences are maintenance and ownership: OpenVue is actively released, permanently MIT licensed, and its theming engine and icon set are maintained in the same organization rather than resolved at runtime from a scope the project does not control.'
    },
    {
        q: 'How do I migrate from PrimeVue to OpenVue?',
        a: 'Run npx @openvue/migrate in a PrimeVue v4 project. It prints a plan first, then renames dependencies, rewrites imports and adds a compatibility override so third-party libraries keep resolving, leaving a single reviewable diff. Run it with --dry for a preview that writes nothing.'
    },
    {
        q: 'Is OpenVue free to use commercially?',
        a: 'Yes. Every project the OpenVi Foundation publishes is MIT licensed and stays MIT licensed, which permits commercial use, modification and redistribution. Releases already published cannot be relicensed retroactively.'
    },
    {
        q: 'What replaced PrimeIcons and PrimeUIX?',
        a: 'OpenIcons continues PrimeIcons: 323 icons as a dependency-free webfont or tree-shakeable Vue 3 components, with a compatibility stylesheet so existing pi pi-* class names keep rendering. OpenUXKit continues PrimeUIX, the framework-agnostic theming engine and design tokens that OpenVue renders with.'
    },
    {
        q: 'Does OpenVue work with Nuxt?',
        a: 'Yes. OpenVue ships a Nuxt module, @openvue/nuxt-module, which auto-imports components and needs no configuration. The documentation at openvue.dev covers both Vue and Nuxt setups.'
    },
    {
        q: 'Who maintains OpenVue?',
        a: 'The OpenVi Foundation, an independent group of engineers who know these libraries well. There is no company behind it and no funding. Commit access is granted on sustained, review-quality contribution rather than employer or affiliation.'
    }
];
