<script setup>
import Card from 'openvue/card';
import Chip from 'openvue/chip';
import Tag from 'openvue/tag';
import LinkButton from './LinkButton.vue';

/**
 * One row of the article registry, built from an OpenVue Card and rendered to
 * HTML at build time. No `client:*` directive, so this ships no JavaScript.
 *
 * Unlike the project registry, an article row is stacked rather than columned:
 * the metadata runs as one line across the top, and the title, source and
 * summary read straight down under it at full width. A headline and a summary
 * squeezed into a third of the row is the thing that made this list hard to
 * read, and prose is the whole point of this list.
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
    <Card class="registry-row article-row">
        <template #title>
            <!-- Metadata first, as one line: what kind of piece this is, when
                 it ran, how long it takes. The topic chips sit at the end of
                 the same line and drop below it when there is no room. -->
            <div class="article-meta">
                <Tag
                    :severity="article.kind === 'article' ? 'info' : 'secondary'"
                    :title="kind.note"
                >
                    {{ kind.label }}
                </Tag>
                <span class="article-facts">
                    <time :datetime="article.date">{{ dateLabel }}</time>
                    <span aria-hidden="true">·</span>
                    <span>{{ minutes }} min read</span>
                </span>
                <span class="article-tags">
                    <Chip v-for="tag in article.tags.slice(0, 2)" :key="tag" :label="tag" />
                </span>
            </div>

            <component :is="headingLevel" class="registry-name article-title">
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
            <!-- Two real buttons rather than two lines of small type: the row
                 is the entry point to the piece, and the thing it wants you to
                 do should look like something you can press. The filled one is
                 the copy here; the outlined one leaves the site. -->
            <div class="article-actions">
                <LinkButton :href="`/articles/${article.slug}`" label="Read article" />
                <LinkButton
                    :href="article.source.url"
                    :label="`Original on ${article.source.short}`"
                    severity="secondary"
                    outlined
                    rel="noopener"
                />
            </div>
        </template>
    </Card>
</template>
