<script setup lang="ts">
import Button from 'openvue/button';

/**
 * An OpenVue Button rendered as an anchor, for the site's navigational
 * "buttons". `as="a"` keeps it a real link — right-clickable, middle-clickable,
 * crawlable — while OpenVue styles it. Statically rendered, no JavaScript.
 *
 * The default slot is for an icon; `label` carries the text so it still lands
 * in the element OpenVue styles.
 */
withDefaults(
    defineProps<{
        href: string;
        label: string;
        severity?: string | null;
        outlined?: boolean;
        text?: boolean;
        size?: string | null;
        rel?: string | null;
    }>(),
    {
        severity: null,
        outlined: false,
        text: false,
        size: null,
        rel: null
    }
);
</script>

<template>
    <Button
        as="a"
        :href="href"
        :severity="severity"
        :outlined="outlined"
        :text="text"
        :size="size"
        :rel="rel"
        :aria-label="label"
    >
        <slot />
        <span class="p-button-label">{{ label }}</span>
    </Button>
</template>
