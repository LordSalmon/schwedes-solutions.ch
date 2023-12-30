<script lang="ts" setup>

const { t } = useI18n();
const processData = await useProcessData();

</script>

<template>
    <GraphicalFullSection 
        id="process" 
        data-id="process"
        :titlePrefix="t('process.titlePrefix')" 
        :title="t('process.title')"
    >
        <div class="md:bg-neutral-500 rounded-xl md:p-6 md:m-6 w-full flex flex-col gap-y-8 md:gap-y-0">
            <div
                v-for="(element, index) in processData.data"
                :key="element.id"
                class="h-full flex"
            >
                <ProcessElement 
                    :first="index === 0"
                    :last="index === processData.data.length - 1"
                    :number="index + 1"
                    :process="element" 
                />
            </div>
        </div>
    </GraphicalFullSection>
</template>

<style lang="scss" scoped>
</style>