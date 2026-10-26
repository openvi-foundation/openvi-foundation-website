const REPO = 'https://github.com/openvi-foundation/openvue';
const RAW = 'https://raw.githubusercontent.com/openvi-foundation/openvue/HEAD/CHANGELOG.md';

export const changelogUrl = `${REPO}/blob/master/CHANGELOG.md`;

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

        if (!release || line === '') continue;

        const groupHeading = line.match(/^### (.+)$/);
        if (groupHeading) {
            group = { heading: groupHeading[1], items: [] };
            release.groups.push(group);
            continue;
        }

        const item = line.match(/^- (.+)$/);
        if (item) {
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

export const versionId = (version) => `v${version.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
