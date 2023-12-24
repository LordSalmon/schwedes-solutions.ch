<script lang="ts" setup>
</script>

<template>
    <div>
        <NavigationBar />
        <slot />
        <NavigationFooter />
    </div>
</template>

<style lang="scss">



:root #__nuxt *, body {
    background: var(--background);
    color: var(--font-color);
}

</style>