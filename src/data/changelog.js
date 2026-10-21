/**
 * OpenVue's release history, read from CHANGELOG.md in the OpenVue repository
 * at build time, so /projects/openvue/changelog is never a second copy
 * someone has to remember to update.
 *
 * The changelog rather than GitHub Releases, because the changelog is the one
 * that is complete: not every version has a Release entry, and every version
 * has a changelog section.
 *
 * The parser only knows the Keep a Changelog shape the file is written in:
 *
 *   ## [1.0.0] - 2026-09-10      a release; `## [Unreleased]` for what is on main
 *   A paragraph.                 intro prose for that release
 *   ### Fixed                    a group heading
 *   - An entry.                  one line per entry
 *   [1.0.0]: https://...         link references at the bottom: compare URLs
 *
 * If the fetch fails the result is `null` and the page says where to read the
 * file instead, rather than failing the deploy.
 */
const REPO = 'https://github.com/openvi-foundation/openvue';
const RAW = 'https://raw.githubusercontent.com/openvi-foundation/openvue/HEAD/CHANGELOG.md';

export const changelogUrl = `${REPO}/blob/master/CHANGELOG.md`;

/**
 * RichText handles code spans and links; bold is the one other piece of
 * markdown the file uses, and it reads fine without the asterisks. Relative
 * links point at files in the repository, so they are made absolute.
 */
const clean = (text) =>
    text
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\]\((?!https?:|#|\/)([^)]+)\)/g, `](${REPO}/blob/master/$1)`);

export function parseChangelog(markdown) {
    const releases = [];
    const refs = {};
    let release = null;
    let group = null;

    for (const raw of markdown.split('\n')) {
        const line = raw.trimEnd();

        const ref = line.match(/^\[([^\]]+)\]:\s*(\S+)$/);
        if (ref) {
            refs[ref[1].toLowerCase()] = ref[2];
            continue;
        }

        const heading = line.match(/^## \[([^\]]+)\](?:\s*-\s*(\d{4}-\d{2}-\d{2}))?/);
        if (heading) {
            release = {
                version: heading[1],
                date: heading[2] ?? null,
                unreleased: heading[1].toLowerCase() === 'unreleased',
                intro: [],
                groups: []
            };
            group = null;
            releases.push(release);
            continue;
        }

        // Everything above the first release is the file's own preface.
        if (!release || line === '') continue;

        const groupHeading = line.match(/^### (.+)$/);
        if (groupHeading) {
            group = { heading: groupHeading[1], items: [] };
            release.groups.push(group);
            continue;
        }

        const item = line.match(/^- (.+)$/);
        if (item) {
            // An entry above any heading still belongs to the release.
            if (!group) {
                group = { heading: null, items: [] };
                release.groups.push(group);
            }
            group.items.push(clean(item[1]));
            continue;
        }

        release.intro.push(clean(line));
    }

    for (const r of releases) r.compareUrl = refs[r.version.toLowerCase()] ?? null;

    return releases;
}

let cached;

export function getReleases() {
    cached ??= (async () => {
        try {
            const res = await fetch(RAW, { signal: AbortSignal.timeout(10_000) });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return parseChangelog(await res.text());
        } catch (error) {
            console.warn(`[changelog] ${RAW}: ${error.message}`);
            return null;
        }
    })();
    return cached;
}

/** URL-safe anchor for a version, e.g. `1.0.0-rc.0` -> `v1-0-0-rc-0`. */
export const versionId = (version) => `v${version.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
