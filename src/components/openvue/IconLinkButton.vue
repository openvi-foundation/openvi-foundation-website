<script setup lang="ts">
import Button from 'openvue/button';

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
