<script lang="ts" setup>

type Props = {
    id?: string;
    title: string;
    titlePrefix: string;
}

defineProps<Props>();

</script>

<template>
    <div class="h-28">
        <div class="flex items-center justify-start gap-x-6 mb-2">
            <div class="h-[1px] w-20 bg-backgroundInverse" />
            <span class="text-sm font-light">{{ $props.titlePrefix }}</span>
        </div>
        <component 
            :is="$props.id ? 'a' : 'div'" 
            :href="`#${$props.id}` ?? null" 
            class="outline-none"
        >
            <h2 class="text-5xl font-light">{{ $props.title }}</h2>
        </component>
    </div>
</template>