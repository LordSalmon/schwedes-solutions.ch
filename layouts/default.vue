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

body {
    background-color: var(--background);
    color: var(--font-color);
}

</style>