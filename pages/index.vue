<script lang="ts" setup>

const { t } = useI18n();
useHead({
    title: t('landing.pageTitle')
});

useSeoMeta({
    title: t("landing.pageTitle"),
    description: t("landing.pageDescription")
});

</script>

<template>
    <div>
        <SectionsLanding />
        <SectionsProjects />
        <SectionsSolutions />
        <SectionsStatistics />
        <SectionsContact />
    </div>
</template>