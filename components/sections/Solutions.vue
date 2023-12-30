<script lang="ts" setup>

const { t } = useI18n();
const solutionData = await useSolutionData();

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
        id="solutions" 
        data-id="solutions"
        :titlePrefix="t('solutions.titlePrefix')" 
        :title="t('solutions.title')"
        :full="false"
    >
        <div>
            <div class="flex flex-col items-start justify-start gap-y-6 px-6 overflow-x-hidden py-2 relative">
                <div class="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent z-10" />
                <div class="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent z-10" />
                <div class="flex items-center justify-start flex-nowrap gap-x-6 animation__infiniteScrollLeft">
                    <SolutionsTool
                    class="w-full"
                    v-for="framework in duplicate(shiftArray(solutionData.data, 0))"
                    :key="framework.id"
                    :solution="framework"
                    />
                </div>
                <div class="-translate-x-[calc(100%_-_100vw)]">
                    <div class="relative flex items-center justify-start flex-nowrap gap-x-6 animation__infiniteScrollRight">
                        <SolutionsTool
                        class="w-full"
                        v-for="framework in duplicate(shiftArray(solutionData.data, solutionData.data.length / 3 * 2))"
                        :key="framework.id"
                        :solution="framework"
                        />
                    </div>
                </div>
                    <div class="flex items-center justify-start flex-nowrap gap-x-6 animation__infiniteScrollLeft">
                    <SolutionsTool
                    class="w-full"
                    v-for="framework in duplicate(shiftArray(solutionData.data, solutionData.data.length / 3 * 2))"
                    :key="framework.id"
                    :solution="framework"
                    />
                </div>
            </div>
        </div>
    </GraphicalFullSection>
</template>

<style lang="scss">

:root {
    --animation-time: 120s;
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