# openvi-foundation-website

The website for the [OpenVi Foundation](https://openvi.dev), an organization index pointing at the
projects we maintain. The interface is built with [OpenVue](https://openvue.dev), the component
library the foundation maintains — every card, tag, chip, button and panel on the site is an OpenVue
component. We ship what we maintain.

None of it costs the visitor any JavaScript. Astro renders the components to HTML at build time and
the theme is compiled to a stylesheet ahead of time, so the pages stay what they were before: static
HTML, no webfonts, and the theme switch as the only script that runs.

## Development

```bash
pnpm install
pnpm run dev      # http://localhost:4321
pnpm run build    # static output in dist/
pnpm run preview  # serve the built output
```

## Structure

| Path                       | Purpose                                                          |
| -------------------------- | ---------------------------------------------------------------- |
| `src/data/projects.js`     | Single source of truth for every project. Add a project here.     |
| `src/data/site.js`         | Site name, URL, contact, primary nav.                             |
| `src/layouts/Base.astro`   | Shell, meta tags, Open Graph, Organization JSON-LD.               |
| `src/pages/`               | One file per route. `projects/[slug].astro` generates detail pages. |
| `src/styles/global.css`    | The shell: layout, typography, and the seam with OpenVue.        |
| `src/components/openvue/`  | The site's OpenVue components.                                    |
| `src/openvue-theme.js`     | Theme preset and the list of components compiled into the CSS.   |
| `src/vue-app.js`           | Configures OpenVue for the components Astro renders.              |
| `scripts/generate-openvue-css.mjs` | Renders the theme to `src/styles/openvue.generated.css`.  |

## How OpenVue is used

The site depends on the released `openvue` and `@openvue/themes` packages from npm — not a workspace
link — so it consumes the library exactly the way anyone else does. Upgrading is a normal dependency
bump.

**Components render at build time.** Astro renders a Vue component to HTML when it has no `client:*`
directive, so `<ProjectCard />` and friends become plain markup with no JavaScript behind them.
Nothing on the site hydrates; if you ever add a component that needs to respond to input, that one
gets a `client:*` directive and it alone ships a runtime.

**The theme is compiled, not injected.** In styled mode OpenVue injects its CSS from the browser at
runtime, which never happens when nothing hydrates. So
[`scripts/generate-openvue-css.mjs`](scripts/generate-openvue-css.mjs) calls the same string
generators the Nuxt module uses for SSR and writes the whole theme to a stylesheet before the build.
`pnpm run dev` and `pnpm run build` both run it; the output is generated and gitignored.

Two consequences worth knowing:

- **A component missing from `components` in [`src/openvue-theme.js`](src/openvue-theme.js) renders
  unstyled.** Its CSS was never compiled in. Add the component to that list the first time you use
  it, and rerun `pnpm run openvue:css`.
- **Dark mode is one switch, not two.** `darkModeSelector` points OpenVue at the `data-theme`
  attribute the site's own theme toggle writes, so the toggle drives OpenVue and `global.css`
  together. The theme config is shared with the generator so the two cannot drift.

`global.css` still owns the shell — header, footer, grids, typography — and its final section
handles the seam where site-wide element styling would otherwise leak into OpenVue components.

### Adding a project

Append an entry to `projects` in [`src/data/projects.js`](src/data/projects.js). It automatically
gets a card on the home page, a row on `/projects`, a detail page at `/projects/<slug>`, and a
sitemap entry. No other file needs to change.

## SEO

- Per-page `<title>`, meta description, and canonical URL.
- Open Graph and Twitter card tags.
- JSON-LD: `Organization` sitewide, `ItemList` on the home page, `SoftwareSourceCode` plus
  `BreadcrumbList` on each project page.
- `sitemap-index.xml` generated at build by `@astrojs/sitemap`; `robots.txt` in `public/`.

Update `site` in `astro.config.mjs` and `public/robots.txt` together if the domain changes.

## Deploying

`pnpm run build` emits a fully static `dist/`. Any static host works: Vercel, Netlify, Cloudflare
Pages, GitHub Pages. Build command `pnpm run build`, output directory `dist`.

## License

MIT.
