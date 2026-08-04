export const site = {
    name: 'OpenVi Foundation',
    url: 'https://openvi.dev',
    tagline: 'We maintain open source UI libraries for the web.',
    /** Title-tag half of the tagline. Kept short so `Name | seoTagline` survives the ~60char SERP cut. */
    seoTagline: 'The home of OpenVue, PrimeVue continued',
    /** Fallback meta description. Kept under 160 characters so search results do not truncate it. */
    description:
        'The OpenVi Foundation maintains open source UI libraries for the web: OpenVue, OpenUXKit and OpenIcons. Community run and permanently MIT licensed.',
    email: 'contact@openvi.dev',
    github: 'https://github.com/openvi-foundation',
    /** OpenVue's documentation site, the main entry point for users of the libraries. */
    docs: 'https://openvue.dev',
    npm: 'https://www.npmjs.com/org/openvue',
    discord: 'https://discord.gg/cMVy8jAe6'
};

export const nav = [
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/governance', label: 'Governance' },
    { href: '/contribute', label: 'Contribute' }
];
