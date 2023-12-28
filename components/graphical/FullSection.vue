<script lang="ts" setup>

type Props = {
    titlePrefix: string;
    title: string;
    full?: boolean
}

withDefaults(defineProps<Props>(), {
    full: true
});

</script>

<template>
    <div class="w-full p-12 overflow-auto" :class="{
        'min-h-screen': $props.full
    }">
        <GraphicalSectionTitle :title="$props.title" :titlePrefix="$props.titlePrefix" />
        <slot />
    </div>
</template>