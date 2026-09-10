<script setup lang="ts">
import Card from 'openvue/card';

/**
 * A short note, built from an OpenVue Card. Statically rendered, no
 * JavaScript.
 *
 * `global.css` flattens the Card to nothing, so what marks one note off from
 * the next is the rule between them rather than a border around each.
 */
withDefaults(defineProps<{ title: string; headingLevel?: string }>(), { headingLevel: 'h3' });
</script>

<template>
    <Card class="note">
        <template #title>
            <component :is="headingLevel" class="note-title">{{ title }}</component>
        </template>
        <template #content>
            <slot />
        </template>
    </Card>
</template>
