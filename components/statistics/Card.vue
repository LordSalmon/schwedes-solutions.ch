<script lang="ts" setup>

type Props = {
    number: number;
    title: string;
}

defineProps<Props>();

</script>

<template>
    <div class="flex justify-center items-end gap-x-2 bg-white bg-opacity-10 p-8 w-full rounded border-[0.5px] border-fontColor shadow-xl shadow-slate-600 hover:shadow-2xl">
        <div class="flex items-center">
            <span class="font-extrabold text-6xl">{{ $props.number }}</span>
            <span class="text-4xl">+</span>
        </div>
        <span class="font-normal text-2xl">{{ $props.title }}</span>
    </div>
</template>