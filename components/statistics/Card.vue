<script lang="ts" setup>

type Props = {
    number: number;
    title: string;
}

defineProps<Props>();

</script>

<template>
    <div class="flex items-center justify-start w-full">
        <div class="aspect-square w-40 flex justify-center items-center">
            <span class="text-3xl font-semibold">{{ $props.number }}+</span>
        </div>
        <div>
            <span class="text-2xl">{{ $props.title }}</span>
        </div>
    </div>
</template>