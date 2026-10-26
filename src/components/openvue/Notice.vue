<script setup lang="ts">
import Message from 'openvue/message';

withDefaults(defineProps<{ severity?: string }>(), { severity: 'info' });
</script>

<template>
    <Message :severity="severity" :closable="false">
        <slot />
    </Message>
</template>
