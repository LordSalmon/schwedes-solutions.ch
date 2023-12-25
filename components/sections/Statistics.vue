<script lang="ts" setup>

const { t } = useI18n();
const statistics = useFetch("/api/statistics").data.value;

</script>

<template>
    <GraphicalFullSection id="statistics" :titlePrefix="t('statistics.titlePrefix')" :title="t('statistics.title')">
        <span>statistics</span>
        <pre>{{ statistics }}</pre>
    </GraphicalFullSection>
</template>