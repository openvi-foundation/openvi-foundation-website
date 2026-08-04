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

/** Matches the site's dark surface, so the card reads as part of the same brand. */
const card = ({ eyebrow, title, tagline, footer }) => `<!doctype html>
<html><head><meta charset="utf-8"><style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; display: flex; flex-direction: column;
    justify-content: space-between; padding: 80px;
    background: #0b0d10;
    background-image: radial-gradient(circle at 85% 15%, rgba(66, 184, 131, 0.18), transparent 55%);
    color: #e9edf2;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  }
  .eyebrow {
    font-size: 26px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
    color: #42b883;
  }
  h1 { font-size: ${title.length > 22 ? 84 : 104}px; font-weight: 700; letter-spacing: -0.03em; line-height: 1.04; }
  p { font-size: 38px; line-height: 1.35; color: #a8b3c1; max-width: 900px; margin-top: 24px; }
  footer {
    display: flex; align-items: center; gap: 20px;
    font-size: 26px; color: #7c8899; border-top: 1px solid #222831; padding-top: 28px;
  }
  .dot { width: 10px; height: 10px; border-radius: 50%; background: #42b883; }
</style></head>
<body>
  <div class="eyebrow">${eyebrow}</div>
  <div>
    <h1>${title}</h1>
    <p>${tagline}</p>
  </div>
  <footer><span class="dot"></span>${footer}</footer>
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
    }))
];

for (const c of cards) await shoot(c.html, c.out);
