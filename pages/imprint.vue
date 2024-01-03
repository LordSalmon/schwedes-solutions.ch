<script lang="ts" setup>

const { t } = useI18n();
const contactData = await useContactData();

</script>

<template>
    <GraphicalFullSection
        :title="t('imprint.title')"
        :titlePrefix="t('imprint.titlePrefix')"
    >
        <div>
            <h2 class="font-semibold text-xl mb-4">{{ t('imprint.responsibleTitle') }}</h2>
            <div>
                <p>{{ contactData.data.value?.data.name }}</p>
                <p>{{ contactData.data.value?.data.address }}</p>
                <p>{{ contactData.data.value?.data.city }}</p>
                <p>{{ contactData.data.value?.data.country }}</p>
                <p>{{ t('imprint.email') }} {{ contactData.data.value?.data.email }}</p>
                <p>{{ t('imprint.phone') }} {{ contactData.data.value?.data.phone }}</p>
            </div>
        </div>
    </GraphicalFullSection>
</template>