<script lang="ts" setup>
import type { Process } from '~/composables/useProcessData';


type Props = {
    number: number;
    process: Process;
    first?: boolean;
    last?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    first: false,
    last: false,
});

const title = computed(() => {
    return props.process.translations?.[0].title;
});

const content = computed(() => {
    return props.process.translations?.[0].content;
});

const imageAlt = computed(() => {
    return `Process ${props.process.translations?.[0].title} - ${props.process.image?.title}`;
});

</script>

<template>
    <div class="flex">
        <div class="relative min-w-[15rem] max-w-[25vw] flex justify-center items-center h-full">
            <div 
                v-if="!props.first" 
                class="absolute top-0 left-1/2 h-[calc(50%_-_0.875rem)] w-[0.5px] bg-primary"
            />
            <div class="flex items-center justify-center h-7 w-7 rounded-full border-[0.5px] border-primary">
                <span>{{ props.number }}</span>
            </div>
            <div 
                v-if="!props.last" 
                class="absolute bottom-0 left-1/2 h-[calc(50%_-_0.875rem)] w-[0.5px] bg-primary" 
            />
        </div>
        <div class="rounded-lg bg-background p-4 flex items-center justify-between gap-x-6 m-4">
            <img 
                :alt="imageAlt" 
                :src="useAssetUrl(props.process.image?.id ?? '')"
                class="h-52 aspect-square"
            >
            <div class="h-full p-4">
                <div class="h-full w-[0.5px] bg-neutral-400" />
            </div>
            <div class="flex flex-col items-start justify-start gap-y-6">
                <h3 class="text-xl">{{ props.process.translations?.[0].title }}</h3>
                <p>{{ props.process.translations?.[0].content }}</p>
            </div>
        </div>
    </div>
</template>