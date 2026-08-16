<script setup lang="ts">
import Button from 'openvue/button';

/**
 * Icon-only OpenVue Button rendered as a link, for the header actions.
 * `label` is not drawn: it names the control for screen readers.
 */
withDefaults(defineProps<{ href: string; label: string; rel?: string | null }>(), { rel: null });
</script>

<template>
    <Button
        as="a"
        :href="href"
        :rel="rel"
        :title="label"
        :aria-label="label"
        severity="secondary"
        text
        rounded
    >
        <slot />
        <span class="visually-hidden">{{ label }}</span>
    </Button>
</template>
