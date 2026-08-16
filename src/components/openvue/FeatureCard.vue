<script setup lang="ts">
import Card from 'openvue/card';

/** A titled OpenVue Card for prose blocks. Statically rendered, no JavaScript. */
withDefaults(defineProps<{ title: string; headingLevel?: string }>(), { headingLevel: 'h3' });
</script>

<template>
    <Card class="feature-card">
        <template #title>
            <component :is="headingLevel" class="feature-card-title">{{ title }}</component>
        </template>
        <template #content>
            <slot />
        </template>
    </Card>
</template>
