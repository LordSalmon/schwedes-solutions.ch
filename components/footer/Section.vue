<script lang="ts" setup>

    type FooterButton = {
        title: string;
        href: string;
    }

    type Props = {
        title: string;
        buttons: FooterButton[];
    }

    defineProps<Props>();

</script>

<template>
    <div>
        <div class="mb-4">
            <h4 class="text-lg font-medium">{{ $props.title }}</h4>
        </div>
        <div class="flex flex-col items-start justify-start flex-nowrap gap-y-2">
            <div
                v-for="button in $props.buttons"
                :key="button.title"
            >
                <NuxtLink :to="button.href">
                    <span class="text-sm font-light">{{ button.title }}</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>