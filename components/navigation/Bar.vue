<script lang="ts" setup>

type Navbar = {
    links: {
        name: string,
        href: string
    }[];
}

const navbar: Navbar = {
    links: [
        {
            name: "Work",
            href: "#work"
        },
        {
            name: "About",
            href: "#about"
        },
        {
            name: "Contact",
            href: "#contact"
        }
    ]
}

</script>

<template>
    <div class="h-28 w-full flex justify-end items-center px-12 gap-x-4">
        <div v-for="navButton of navbar.links" :key="navButton.name">
            <NuxtLink :to="navButton.href" class="px-4 py-2 text-black transition-colors duration-100 hover:text-gray-200 font-light">
                {{ navButton.name }}
            </NuxtLink>
        </div>
    </div>
</template>

<style lang="scss">

</style>