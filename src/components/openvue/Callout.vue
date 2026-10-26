<script setup lang="ts">
import Panel from 'openvue/panel';

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
