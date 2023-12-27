<script lang="ts" setup>
import type { ProgrammingTool } from '~/composables/useFrameworkData';

type Props = {
    framework: ProgrammingTool;
} 

const props = defineProps<Props>();
const isMouseOver = ref(false);

const color = ref((props.framework.color ?? "#ffffff") + "9A");

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

const contrastColor = ref(props.framework.contrast_color ?? "#000000");

const imageStyles = computed(() => {
    return {
        backgroundImage: `url(${useAssetUrl(props.framework.icon?.id ?? "")})`,
        backgroundSize: "contain",
        boxShadow: `0px 0px 10px 3px ${contrastColor.value}`,
        backgroundPosition: "center",
    };
});

</script>

<template>
    <NuxtLink
        :to="framework.url ?? ''"
        target="_blank"
        class="py-2 px-4 rounded-full flex items-center gap-x-4 border-2 transition-all duration-50 outline-none"
        :style="styles"
        @mouseenter="isMouseOver = true"
        @mouseleave="isMouseOver = false"
    >
        <div class="w-6 h-6 bg-no-repeat" :style="imageStyles" />
        <span class="text-xl font-medium whitespace-nowrap">{{ framework.title }}</span>
    </NuxtLink>
</template>