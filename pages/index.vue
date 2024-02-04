<script lang="ts" setup>

const { t, locale } = useI18n();

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
        <SectionsProcess :key="locale" />
        <SectionsContact />
    </div>
</template>