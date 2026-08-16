<script setup lang="ts">
import Message from 'openvue/message';

/**
 * A static OpenVue Message. `closable` is off so it needs no JavaScript: a
 * close button that cannot close anything is worse than no button.
 */
withDefaults(defineProps<{ severity?: string }>(), { severity: 'info' });
</script>

<template>
    <Message :severity="severity" :closable="false">
        <slot />
    </Message>
</template>
