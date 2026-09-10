/**
 * Renders the social card images in public/og/ plus the sitewide public/og.png.
 *
 * Cards are laid out as HTML and screenshotted with headless Chrome, so there is
 * no image dependency in the project. Run it after changing a project's name or
 * tagline; the images deliberately carry no version number, so releases do not
 * invalidate them.
 *
 *   node scripts/generate-og.mjs
 *
 * Set CHROME to point at a browser binary on non-macOS machines.
 */
import { execFile } from 'node:child_process';
import { mkdir, mkdtemp, rm, writeFile, rename } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { promisify } from 'node:util';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { projects } from '../src/data/projects.js';
import { site } from '../src/data/site.js';

const run = promisify(execFile);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const chrome =
    process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

/** Follows the site: a ruled white sheet, ink type, one accent. No gradient. */
const card = ({ eyebrow, title, tagline, footer }) => `<!doctype html>
<html><head><meta charset="utf-8"><style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; display: flex; flex-direction: column;
    justify-content: space-between; padding: 76px 80px;
    background: #ffffff; color: #14181d;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .eyebrow {
    font-size: 22px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
    color: #12784d;
  }
  .rule { width: 72px; height: 3px; background: #12784d; margin: 28px 0 32px; }
  h1 {
    font-size: ${title.length > 22 ? 88 : 112}px; font-weight: 700;
    letter-spacing: -0.035em; line-height: 1.02;
  }
  p { font-size: 34px; line-height: 1.4; color: #5b636d; max-width: 880px; margin-top: 28px; }
  footer {
    display: flex; align-items: center; justify-content: space-between;
    font-size: 24px; color: #8b939d; border-top: 1px solid #e4e8ec; padding-top: 26px;
    letter-spacing: 0.02em;
  }
  .mark { display: flex; align-items: center; gap: 12px; color: #14181d; font-weight: 650; }
  .dot { width: 9px; height: 9px; background: #12784d; }
</style></head>
<body>
  <div>
    <div class="eyebrow">${eyebrow}</div>
    <div class="rule"></div>
    <h1>${title}</h1>
    <p>${tagline}</p>
  </div>
  <footer>
    <span class="mark"><span class="dot"></span>OpenVi Foundation</span>
    <span>${footer}</span>
  </footer>
</body></html>`;

async function shoot(html, out) {
    const dir = await mkdtemp(path.join(tmpdir(), 'og-'));
    const page = path.join(dir, 'card.html');
    await writeFile(page, html);
    // Chrome writes the capture as screenshot.png into its working directory.
    await run(chrome, [
        '--headless',
        '--disable-gpu',
        '--hide-scrollbars',
        '--force-device-scale-factor=1',
        '--window-size=1200,630',
        `--screenshot=${path.join(dir, 'shot.png')}`,
        `file://${page}`
    ]);
    await mkdir(path.dirname(out), { recursive: true });
    await rename(path.join(dir, 'shot.png'), out);
    await rm(dir, { recursive: true, force: true });
    console.log('wrote', path.relative(root, out));
}

const cards = [
    {
        out: path.join(root, 'public/og.png'),
        html: card({
            eyebrow: 'Open source, MIT, community run',
            title: site.name,
            tagline: site.tagline,
            footer: 'openvi.dev'
        })
    },
    ...projects.map((p) => ({
        out: path.join(root, `public/og/${p.slug}.png`),
        html: card({
            eyebrow: `${p.continues} continued`,
            title: p.name,
            tagline: p.tagline,
            footer: `openvi.dev/projects/${p.slug}`
        })
    })),
    ...[
        {
            slug: 'projects',
            eyebrow: 'Projects',
            title: 'Three libraries',
            tagline: 'Each one a maintained continuation of an archived upstream library. All MIT licensed, all versioned independently.'
        },
        {
            slug: 'about',
            eyebrow: 'About',
            title: 'Maintenance is the product',
            tagline: 'An independent, community-run foundation that keeps widely used front-end libraries working after upstream archives them.'
        },
        {
            slug: 'governance',
            eyebrow: 'Governance',
            title: 'MIT, permanently',
            tagline: 'How the foundation is run: licensing, maintainers, releases and what happens if the current maintainers step away.'
        },
        {
            slug: 'contribute',
            eyebrow: 'Contribute',
            title: 'Help maintain it',
            tagline: 'Triage the issue backlog, report migration gaps, or join the maintainer team. No prior involvement needed.'
        }
    ].map((page) => ({
        out: path.join(root, `public/og/${page.slug}.png`),
        html: card({ ...page, footer: `openvi.dev/${page.slug}` })
    }))
];

for (const c of cards) await shoot(c.html, c.out);
