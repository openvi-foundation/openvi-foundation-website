/**
 * The numbers that say the projects are alive: GitHub stars, weekly npm
 * downloads and the people who have contributed since the forks. Fetched once
 * per build, so the site stays static and the figures are as fresh as the last
 * deploy.
 *
 * Every request is allowed to fail. A stat that cannot be fetched is `null` and
 * the page leaves it out, because a deploy should never break on a rate limit
 * and a made-up fallback number is worse than no number.
 *
 * GitHub allows 60 unauthenticated requests an hour per IP, and build machines
 * share IPs. Set GITHUB_TOKEN in the build environment to lift that; a token
 * with no scopes is enough, everything read here is public.
 */
import { projects } from './projects.js';

const ORG = 'openvi-foundation';

const githubHeaders = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'openvi.dev-build',
    ...(process.env.GITHUB_TOKEN && { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` })
};

async function getJson(url, headers) {
    try {
        const res = await fetch(url, { headers, signal: AbortSignal.timeout(10_000) });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.json();
    } catch (error) {
        console.warn(`[stats] ${url}: ${error.message}`);
        return null;
    }
}

async function weeklyDownloads(pkg) {
    const data = await getJson(`https://api.npmjs.org/downloads/point/last-week/${pkg}`);
    return data?.downloads ?? null;
}

/**
 * Stars for every public repository in the organization, in one request
 * rather than one per project, which also keeps the build well inside the
 * unauthenticated rate limit.
 */
async function orgStars() {
    const data = await getJson(
        `https://api.github.com/orgs/${ORG}/repos?per_page=100&type=public`,
        githubHeaders
    );
    if (!Array.isArray(data)) return null;
    return Object.fromEntries(data.map((repo) => [repo.full_name, repo.stargazers_count]));
}

/**
 * People credited since the forks, from the all-contributors list each
 * repository keeps, counted once however many repositories they worked on.
 * GitHub's own contributor count would include the whole upstream history the
 * forks inherited, which is not the number this site is making a claim about.
 */
async function contributors(repos) {
    const lists = await Promise.all(
        repos.map((repo) =>
            getJson(`https://raw.githubusercontent.com/${repo}/HEAD/.all-contributorsrc`)
        )
    );
    const found = lists.filter((l) => Array.isArray(l?.contributors));
    if (found.length === 0) return null;
    return new Set(found.flatMap((l) => l.contributors.map((c) => c.login.toLowerCase()))).size;
}

const sum = (values) => {
    const known = values.filter((v) => v != null);
    return known.length > 0 ? known.reduce((a, b) => a + b, 0) : null;
};

async function load() {
    const repos = [...new Set(projects.map((p) => p.githubRepo))];
    const packages = projects.map((p) => p.npmPackage);

    const [starsByRepo, downloadCounts, contributorCount] = await Promise.all([
        orgStars(),
        Promise.all(packages.map(weeklyDownloads)),
        contributors(repos)
    ]);

    const downloadsByPackage = Object.fromEntries(packages.map((p, i) => [p, downloadCounts[i]]));

    return {
        stars: starsByRepo ?? {},
        downloads: downloadsByPackage,
        contributors: contributorCount,
        /** Every public repository in the organization, not only the libraries. */
        totalStars: starsByRepo ? sum(Object.values(starsByRepo)) : null,
        /** Each project's main package; a package npm has no figure for yet is skipped. */
        totalDownloads: sum(downloadCounts)
    };
}

let cached;

/** One fetch per build, however many pages ask. */
export function getStats() {
    cached ??= load();
    return cached;
}

export const formatCount = (n) => new Intl.NumberFormat('en-US').format(n);
