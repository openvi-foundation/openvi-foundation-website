<script setup lang="ts">
import Button from 'openvue/button';

/**
 * Icon-only OpenVue Button rendered statically, for controls driven by the
 * site's own inline scripts rather than by Vue. It ships no JavaScript of its
 * own; whoever renders it wires up behaviour by `id`.
 */
withDefaults(defineProps<{ id: string; label: string; type?: string }>(), { type: 'button' });
</script>

<template>
    <Button
        :id="id"
        :type="type"
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
