<script lang="ts" setup>
import useLocaleCookie from "./composables/useLocaleCookie";


const localeCookie = useLocaleCookie();
localeCookie.value ??= "en";

</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style lang="scss">
@import "@/assets/global.scss";
</style>