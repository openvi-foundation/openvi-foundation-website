<script setup lang="ts">
import Tag from 'openvue/tag';

/**
 * The version badge. Severity carries the release status: stable and release
 * candidate are the stages we want people to pick up, so they get colour;
 * anything earlier stays quiet rather than advertising itself.
 */
const props = defineProps<{
    version: string;
    status: string;
    label: string;
    note: string;
}>();

const severityByStatus: Record<string, string> = {
    stable: 'success',
    rc: 'info',
    beta: 'warn'
};

const severity = severityByStatus[props.status] ?? 'secondary';
</script>

<template>
    <Tag :severity="severity" :title="`${label}. ${note}.`">
        <!-- Colour carries the status visually; spell it out for screen
             readers, which cannot see it. -->
        <span class="visually-hidden">{{ label }}, version</span>
        <span>v{{ version }}</span>
    </Tag>
</template>
