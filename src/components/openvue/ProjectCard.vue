<script setup>
import Card from 'openvue/card';
import Chip from 'openvue/chip';
import StatusTag from './StatusTag.vue';

/**
 * A project card, built from OpenVue components and rendered to HTML at build
 * time. No `client:*` directive, so this ships no JavaScript; its styling comes
 * from the generated stylesheet.
 */
const props = defineProps({
    project: { type: Object, required: true },
    status: { type: Object, required: true },
    /** The card title is an h2 on its own page and an h3 inside a list. */
    headingLevel: { type: String, default: 'h2' }
});

const links = [
    { label: 'Source', href: props.project.repo },
    { label: 'Documentation', href: props.project.docs },
    { label: 'npm', href: props.project.npm }
].filter((link) => link.href);
</script>

<template>
    <Card class="project-card">
        <template #title>
            <div class="project-card-head">
                <component :is="headingLevel" class="project-card-title">
                    <a :href="`/projects/${project.slug}`">{{ project.name }}</a>
                </component>
                <StatusTag
                    :version="project.version"
                    :status="project.status"
                    :label="status.label"
                    :note="status.note"
                />
            </div>
        </template>

        <template #content>
            <p class="project-card-summary">{{ project.summary }}</p>
            <div class="project-card-facts">
                <Chip :label="`Continues ${project.continues}`" />
                <Chip :label="project.language" />
                <Chip :label="project.license" />
            </div>
        </template>

        <template #footer>
            <div class="project-card-links">
                <a v-for="link in links" :key="link.label" :href="link.href" rel="noopener">
                    {{ link.label }}
                </a>
            </div>
        </template>
    </Card>
</template>
