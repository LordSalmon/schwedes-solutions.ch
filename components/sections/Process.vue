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
        <div class="bg-neutral-500 rounded-xl p-6 m-6">
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