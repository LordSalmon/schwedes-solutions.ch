<script lang="ts" setup>
import type { ProgrammingTool } from '~/composables/useSolutionData';

type Props = {
    solution: ProgrammingTool;
} 

const props = defineProps<Props>();
const isMouseOver = ref(false);

const color = ref((props.solution.color ?? "#ffffff") + "9A");

const styles = computed(() => {
    if (isMouseOver.value) {
        return {
            borderColor: color.value,
            boxShadow: '0px 0px 12px 4px ' + color.value,
        }
    }
    return {
        borderColor: color.value,
        boxShadow: '0px 0px 7px 3px ' + color.value,
    }
});

const contrastColor = ref(props.solution.contrast_color ?? "#000000");

const imageStyles = computed(() => {
    return {
        backgroundImage: `url(${useAssetUrl(props.solution.icon?.id ?? "")})`,
        backgroundSize: "contain",
        boxShadow: `0px 0px 10px 3px ${contrastColor.value}`,
        backgroundPosition: "center",
    };
});

</script>

<template>
    <NuxtLink
        :to="solution.url ?? ''"
        target="_blank"
        class="py-1 px-2 md:py-2 md:px-4 rounded-full flex items-center gap-x-2 md:gap-x-4 border-2 transition-all duration-50 outline-none w-max"
        :style="styles"
        @mouseenter="isMouseOver = true"
        @mouseleave="isMouseOver = false"
    >
        <img 
            loading="lazy" 
            class="h-6" 
            :src="useAssetUrl(solution.icon?.id ?? '', {quality: 10})"
            :alt="solution.title + ' icon'"
        />
        <span class="md:text-xl font-medium whitespace-nowrap">{{ solution.title }}</span>
    </NuxtLink>
</template>