<script setup>
import Card from 'openvue/card';
import Chip from 'openvue/chip';
import StatusTag from './StatusTag.vue';

/**
 * One row of the project registry, built from an OpenVue Card and rendered to
 * HTML at build time. No `client:*` directive, so this ships no JavaScript.
 *
 * The Card is retuned to nothing in `global.css` — no surface, no border, no
 * radius — and its three slots become the row's three columns: identity on the
 * left, description in the middle, release metadata right-aligned in the
 * monospaced column. The rules between rows belong to the list, not the card.
 */
const props = defineProps({
    project: { type: Object, required: true },
    status: { type: Object, required: true },
    /** The row title is an h2 on its own page and an h3 inside a list. */
    headingLevel: { type: String, default: 'h2' }
});

const links = [
    { label: 'Source', href: props.project.repo },
    { label: 'Docs', href: props.project.docs },
    { label: 'npm', href: props.project.npm }
].filter((link) => link.href);
</script>

<template>
    <Card class="registry-row">
        <template #title>
            <component :is="headingLevel" class="registry-name">
                <a :href="`/projects/${project.slug}`">{{ project.name }}</a>
            </component>
            <!-- The continuation is the point of the project, so it sits with
                 the name rather than down in the facts. -->
            <p class="registry-continues">
                continues <s>{{ project.continues }}</s>
            </p>
        </template>

        <template #content>
            <p class="registry-summary">{{ project.summary }}</p>
            <div class="registry-links">
                <a v-for="link in links" :key="link.label" :href="link.href" rel="noopener">
                    {{ link.label }}
                </a>
            </div>
        </template>

        <template #footer>
            <div class="registry-meta">
                <StatusTag
                    :version="project.version"
                    :status="project.status"
                    :label="status.label"
                    :note="status.note"
                />
                <div class="registry-facts">
                    <Chip :label="project.language" />
                    <Chip :label="project.license" />
                </div>
            </div>
        </template>
    </Card>
</template>
