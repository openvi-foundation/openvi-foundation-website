<script setup lang="ts">
import Panel from 'openvue/panel';

/**
 * An OpenVue Panel used for the site's callouts. `toggleable` is left off, so
 * it needs no JavaScript and renders to static HTML like everything else.
 */
withDefaults(defineProps<{ header: string; headingLevel?: string; headingId?: string | null }>(), {
    headingLevel: 'h2',
    headingId: null
});
</script>

<template>
    <Panel class="callout-panel">
        <template #header>
            <component :is="headingLevel" :id="headingId" class="callout-panel-title">
                {{ header }}
            </component>
        </template>
        <slot />
    </Panel>
</template>
