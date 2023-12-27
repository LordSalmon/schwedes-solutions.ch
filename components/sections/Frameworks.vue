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

</script>

<template>
    <GraphicalFullSection 
        id="frameworks" 
        :titlePrefix="t('frameworks.titlePrefix')" 
        :title="t('frameworks.title')"
        :full="false"
    >
        <div>
            <div class="flex flex-col items-start justify-start gap-y-6 px-6">
                <div class="flex items-center justify-start flex-nowrap gap-x-6">
                    <FrameworksTool
                    class="w-full"
                    v-for="framework in shiftArray(frameworkData.data, 0)"
                    :key="framework.id"
                    :framework="framework"
                    />
                </div>
                <div class="flex items-center justify-start flex-nowrap gap-x-6">
                    <FrameworksTool
                    class="w-full"
                    v-for="framework in shiftArray(frameworkData.data, frameworkData.data.length / 3)"
                    :key="framework.id"
                    :framework="framework"
                    />
                </div>
                <div class="flex items-center justify-start flex-nowrap gap-x-6">
                    <FrameworksTool
                    class="w-full"
                    v-for="framework in shiftArray(frameworkData.data, frameworkData.data.length / 3 * 2)"
                    :key="framework.id"
                    :framework="framework"
                    />
                </div>
            </div>
        </div>
        <!-- <div class="flex justify-start items-start flex-wrap gap-4">
            <FrameworksTool
                v-for="framework in frameworkData.data"
                :key="framework.id"
                :framework="framework"
            />
        </div> -->
    </GraphicalFullSection>
</template>