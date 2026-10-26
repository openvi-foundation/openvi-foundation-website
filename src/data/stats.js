import { projects } from './projects.js';
import { fetchStats } from './stats-fetch.js';

export const statSources = {
    repos: [...new Set(projects.map((p) => p.githubRepo))],
    packages: projects.map((p) => p.npmPackage)
};

let cached;

export function getStats() {
    cached ??= fetchStats({
        ...statSources,
        token: process.env.GITHUB_TOKEN,
        log: console.warn
    });
    return cached;
}

export const formatCount = (n) => new Intl.NumberFormat('en-US').format(n);
