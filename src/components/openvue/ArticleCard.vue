<script setup>
import Card from 'openvue/card';
import Chip from 'openvue/chip';
import Tag from 'openvue/tag';

/**
 * One row of the article registry, built from an OpenVue Card and rendered to
 * HTML at build time. No `client:*` directive, so this ships no JavaScript.
 *
 * Same three-column row as the project registry — identity left, description
 * middle, metadata right-aligned in the monospaced column — so a reader who has
 * seen /projects already knows how to read this list.
 *
 * The formatted date and reading time are passed in rather than computed here:
 * the helpers live with the data, and the card should not own a second copy of
 * the formatting rules.
 */
defineProps({
    article: { type: Object, required: true },
    kind: { type: Object, required: true },
    /** Human-readable date, e.g. "29 August 2026". */
    dateLabel: { type: String, required: true },
    minutes: { type: Number, required: true },
    /** The row title is an h2 on its own page and an h3 inside a list. */
    headingLevel: { type: String, default: 'h2' }
});
</script>

<template>
    <Card class="registry-row">
        <template #title>
            <component :is="headingLevel" class="registry-name">
                <a :href="`/articles/${article.slug}`">{{ article.title }}</a>
            </component>
            <!-- Where it first ran. For the reddit posts that is also where the
                 replies are, so it belongs with the title rather than the
                 footnotes. -->
            <p class="registry-continues">
                first published on <span class="registry-source">{{ article.source.name }}</span>
            </p>
        </template>

        <template #content>
            <p class="registry-summary">{{ article.summary }}</p>
            <div class="registry-links">
                <a :href="`/articles/${article.slug}`">Read</a>
                <a :href="article.source.url" rel="noopener">
                    Original on {{ article.source.short }}
                </a>
            </div>
        </template>

        <template #footer>
            <div class="registry-meta">
                <Tag
                    :severity="article.kind === 'article' ? 'info' : 'secondary'"
                    :title="kind.note"
                >
                    {{ kind.label }}
                </Tag>
                <div class="registry-facts">
                    <time :datetime="article.date">{{ dateLabel }}</time>
                    <span>{{ minutes }} min read</span>
                </div>
                <div class="registry-facts registry-tags">
                    <Chip v-for="tag in article.tags.slice(0, 2)" :key="tag" :label="tag" />
                </div>
            </div>
        </template>
    </Card>
</template>
