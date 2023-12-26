
import type { mergeProps } from 'vue';

import type { mergeProps } from 'vue';

import type { mergeProps } from 'vue';
<script lang="ts" setup>

type Props = {
    title: string;
    url: string;
    target?: string;
    icon: string;
}

const props = withDefaults(defineProps<Props>(), {
    target: "_blank"
});

</script>

<template>
    <NuxtLink 
        :to="props.url" 
        :title="props.title"
        :target="props.target"
        class="cursor-pointer" 
    >
        <Icon 
            :name="props.icon" 
            class="hover:text-fontColorPassive hover:scale-110 transition-all duration-100"
        />
    </NuxtLink>
</template>