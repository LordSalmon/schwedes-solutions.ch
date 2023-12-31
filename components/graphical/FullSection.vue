<script lang="ts" setup>

type Props = {
    titlePrefix: string;
    title: string;
    full?: boolean
    dataId?: string;
}

withDefaults(defineProps<Props>(), {
    full: true
});

</script>

<template>
    <div class="w-full p-12 overflow-auto" :class="{
        'min-h-svh md:min-h-screen': $props.full
    }">
        <GraphicalSectionTitle 
            :id="$props.dataId"
            :title="$props.title" 
            :titlePrefix="$props.titlePrefix" 
        />
        <slot />
    </div>
</template>