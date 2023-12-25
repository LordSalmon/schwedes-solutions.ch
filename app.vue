<script lang="ts" setup>

useLocaleCookie().value ??= "en";
const locale = useI18n();
locale.setLocale("en");

</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style lang="scss">
@import "@/assets/global.scss";
</style>