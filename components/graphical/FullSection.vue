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
        'h-screen': $props.full
    }">
        <div class="h-28">
            <div class="flex items-center justify-start gap-x-6 mb-2">
                <div class="h-[1px] w-20 bg-backgroundInverse" />
                <span class="text-sm font-light">{{ $props.titlePrefix }}</span>
            </div>
            <h2 class="text-5xl font-light">{{ $props.title }}</h2>
        </div>
        <slot />
    </div>
</template>