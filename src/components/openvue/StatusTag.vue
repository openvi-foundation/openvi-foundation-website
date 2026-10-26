<script setup lang="ts">
import Tag from 'openvue/tag';

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
        <span class="visually-hidden">{{ label }}, version</span>
        <span>v{{ version }}</span>
    </Tag>
</template>
