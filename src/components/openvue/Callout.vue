<script setup lang="ts">
import Panel from 'openvue/panel';

/**
 * An OpenVue Panel used for the site's callouts. `toggleable` is left off, so
 * it needs no JavaScript and renders to static HTML like everything else.
 *
 * The Panel's frame is removed in `global.css`; what marks the callout out from
 * the prose around it is the band rule above it and the accent bar on its code
 * block, not a border drawn around the whole thing.
 */
withDefaults(defineProps<{ header: string; headingLevel?: string; headingId?: string | null }>(), {
    headingLevel: 'h2',
    headingId: null
});
</script>

<template>
    <Panel class="callout">
        <template #header>
            <component :is="headingLevel" :id="headingId" class="callout-title">
                {{ header }}
            </component>
        </template>
        <slot />
    </Panel>
</template>
