<script lang="ts" setup>

const props = defineProps<{
    error: Object
}>();

const { t } = useI18n();
const handleError = () => clearError({ redirect: '/' })

</script>

<template>
    <GraphicalFullSection
        :title="t('error.title')"
        :titlePrefix="t('error.titlePrefix')"
    >
        <div class="text-center">
            <p class="text-2xl font-bold text-red-500">{{ props.error }}</p>
            <Button @click="handleError">
                {{ t('error.backToHome') }}
            </Button>
        </div>
    </GraphicalFullSection>
</template>