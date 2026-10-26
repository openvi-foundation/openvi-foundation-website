<script setup lang="ts">
import Button from 'openvue/button';

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
