<script lang="ts" setup>

useLocaleCookie().value ??= "en";
const { t, setLocale, locale } = useI18n();
setLocale(useLocaleCookie().value!);
watch(locale, (newLocale) => {
    useLocaleCookie().value = newLocale;
});


useSeoMeta({
    title: t("landing.pageTitle"),
    description: t("landing.pageDescription"),
});

useHead({
    titleTemplate: (title) => `${title} - Schwedes-solutions.ch`,
    htmlAttrs: {
        lang: "en",
    },
    script: [
        {
            defer: true,
            src: "https://analytics.schwedes-solutions.ch/js/script.js",
            "data-domain": "schwedes-solutions.ch",
        }
    ]
});

</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style lang="scss">
@import "@/assets/global.scss";
</style>