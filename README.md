# openvi-foundation-website

The website for the [OpenVi Foundation](https://openvi.dev), an organization index pointing at the
projects we maintain. Plain by design: static HTML, no client-side JavaScript, no webfonts.

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
| `src/styles/global.css`    | All styling. System fonts, light and dark via `prefers-color-scheme`. |

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
