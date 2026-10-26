const ORG = 'openvi-foundation';

async function getJson(url, { headers, log } = {}) {
    try {
        const res = await fetch(url, { headers, signal: AbortSignal.timeout(10_000) });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.json();
    } catch (error) {
        log?.(`[stats] ${url}: ${error.message}`);
        return null;
    }
}

async function weeklyDownloads(pkg, options) {
    const data = await getJson(`https://api.npmjs.org/downloads/point/last-week/${pkg}`, options);
    return data?.downloads ?? null;
}

async function orgStars(options) {
    const data = await getJson(
        `https://api.github.com/orgs/${ORG}/repos?per_page=100&type=public`,
        options
    );
    if (!Array.isArray(data)) return null;
    return Object.fromEntries(data.map((repo) => [repo.full_name, repo.stargazers_count]));
}

async function contributors(repos, options) {
    const lists = await Promise.all(
        repos.map((repo) =>
            getJson(`https://raw.githubusercontent.com/${repo}/HEAD/.all-contributorsrc`, options)
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

export async function fetchStats({ repos, packages, token, log }) {
    const github = {
        log,
        headers: {
            Accept: 'application/vnd.github+json',
            ...(token && { Authorization: `Bearer ${token}` })
        }
    };

    const [starsByRepo, downloadCounts, contributorCount] = await Promise.all([
        orgStars(github),
        Promise.all(packages.map((pkg) => weeklyDownloads(pkg, { log }))),
        contributors(repos, { log })
    ]);

    return {
        stars: starsByRepo ?? {},
        downloads: Object.fromEntries(packages.map((p, i) => [p, downloadCounts[i]])),
        contributors: contributorCount,
        totalStars: starsByRepo ? sum(Object.values(starsByRepo)) : null,
        totalDownloads: sum(downloadCounts)
    };
}
