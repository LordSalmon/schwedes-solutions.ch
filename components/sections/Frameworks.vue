<script lang="ts" setup>

const { t } = useI18n();
const frameworkData = await useFrameworkData();

function shiftArray<T = any>(array: T[], shift: number): T[] {
    const newArray = [...array];
    for (let i = 0; i < shift; i++) {
        newArray.push(newArray.shift()!);
    }
    return newArray;
}

function duplicate<T = any>(array: T[]): T[] {
    return [...array, ...array];
}

</script>

<template>
    <GraphicalFullSection 
        id="frameworks" 
        data-id="frameworks"
        :titlePrefix="t('frameworks.titlePrefix')" 
        :title="t('frameworks.title')"
        :full="false"
    >
        <div>
            <div class="flex flex-col items-start justify-start gap-y-6 px-6 overflow-hidden relative">
                <div class="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent z-10" />
                <div class="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent z-10" />
                <div class="flex items-center justify-start flex-nowrap gap-x-6 animation__infiniteScrollLeft">
                    <FrameworksTool
                    class="w-full"
                    v-for="framework in duplicate(shiftArray(frameworkData.data, 0))"
                    :key="framework.id"
                    :framework="framework"
                    />
                </div>
                <div class="-translate-x-[calc(100%_-_100vw)]">
                    <div class="relative flex items-center justify-start flex-nowrap gap-x-6 animation__infiniteScrollRight">
                        <FrameworksTool
                        class="w-full"
                        v-for="framework in duplicate(shiftArray(frameworkData.data, frameworkData.data.length / 3 * 2))"
                        :key="framework.id"
                        :framework="framework"
                        />
                    </div>
                </div>
                    <div class="flex items-center justify-start flex-nowrap gap-x-6 animation__infiniteScrollLeft">
                    <FrameworksTool
                    class="w-full"
                    v-for="framework in duplicate(shiftArray(frameworkData.data, frameworkData.data.length / 3 * 2))"
                    :key="framework.id"
                    :framework="framework"
                    />
                </div>
            </div>
        </div>
    </GraphicalFullSection>
</template>

<style lang="scss">

:root {
    --animation-time: 80s;
}

@keyframes infiniteScrollLeft {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

@keyframes infiniteScrollRight {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(50%);
    }
}

.animation__infiniteScrollLeft {
    animation: infiniteScrollLeft var(--animation-time) linear infinite;
}

.animation__infiniteScrollRight {
    animation: infiniteScrollRight var(--animation-time) linear infinite;
}

</style>