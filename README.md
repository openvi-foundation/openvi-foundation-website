# openvi-foundation-website

The website for the [OpenVi Foundation](https://openvi.dev), an organization index pointing at the
projects we maintain.

The interface is built with [OpenVue](https://openvue.dev), the component library the foundation
maintains. Every card, tag, chip, button and panel on the site is an OpenVue component. It still
costs the visitor no JavaScript: Astro renders the components to HTML at build time and the theme is
compiled to a stylesheet beforehand, so the pages stay static and the theme switch is the only
script that runs.

## Development

```bash
pnpm install
pnpm run dev      # http://localhost:4321
pnpm run build    # static output in dist/
pnpm run preview  # serve the built output
```

## How OpenVue is used

The site installs the released `openvue` and `@openvue/themes` packages from npm rather than linking
the workspace, so it consumes the library the same way anyone else does. Upgrading is a normal
dependency bump.

Astro renders a Vue component to HTML when it has no `client:*` directive, so `ProjectCard` and the
rest become plain markup with no JavaScript behind them. Nothing on the site hydrates. If you add a
component that has to respond to input, give that one a `client:*` directive and it alone ships a
runtime.

In styled mode OpenVue injects its CSS from the browser at runtime, which never happens when nothing
hydrates. So [`scripts/generate-openvue-css.mjs`](scripts/generate-openvue-css.mjs) calls the same
string generators the Nuxt module uses for SSR and writes the whole theme to
`src/styles/openvue.generated.css` before the build. Both `pnpm run dev` and `pnpm run build` run
it, and the output is gitignored.

Two things follow from that. A component missing from `components` in
[`src/openvue-theme.js`](src/openvue-theme.js) renders unstyled, because its CSS was never compiled
in, so add it to that list the first time you use it. And dark mode stays a single switch:
`darkModeSelector` points OpenVue at the same `data-theme` attribute the site's theme toggle writes,
with the theme config shared between the app and the generator so the two cannot drift.

`global.css` owns the shell, meaning layout, header, footer and typography. Its last section handles
the seam where sitewide element styling would otherwise leak into OpenVue components.

## Adding a project

Append an entry to `projects` in [`src/data/projects.js`](src/data/projects.js). It automatically
gets a card on the home page, a row on the projects page, a detail page, and a sitemap entry. No
other file needs to change.

## SEO

Each page carries its own title, meta description, canonical URL, Open Graph tags and JSON-LD.
`@astrojs/sitemap` generates the sitemap at build. If the domain changes, update `site` in
`astro.config.mjs` and `public/robots.txt` together.

## Deploying

`pnpm run build` emits a fully static `dist/`, so any static host works. Build command
`pnpm run build`, output directory `dist`.

## License

MIT.
