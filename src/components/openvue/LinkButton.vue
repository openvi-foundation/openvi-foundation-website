<script setup lang="ts">
import Button from 'openvue/button';

withDefaults(
    defineProps<{
        href: string;
        label: string;
        severity?: string | null;
        outlined?: boolean;
        text?: boolean;
        size?: string | null;
        rel?: string | null;
    }>(),
    {
        severity: null,
        outlined: false,
        text: false,
        size: null,
        rel: null
    }
);
</script>

<template>
    <Button
        as="a"
        :href="href"
        :severity="severity"
        :outlined="outlined"
        :text="text"
        :size="size"
        :rel="rel"
        :aria-label="label"
    >
        <slot />
        <span class="p-button-label">{{ label }}</span>
    </Button>
</template>
