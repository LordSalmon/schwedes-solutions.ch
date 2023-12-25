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
            href: "#projects"
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
    <div class="h-28 w-full flex justify-between items-center px-12 gap-x-4">
        <div>
            <NuxtLink to="/" v-if="$route.path !== '/'">
                <span class="text-2xl font-light">Simon Schwedes</span>
            </NuxtLink>
        </div>
        <div class="flex justify-end items-center">
            <div v-for="navButton of navbar.links" :key="navButton.name">
                <NuxtLink :to="navButton.href" class="px-4 py-2 transition-colors duration-100 hover:text-gray-200 font-light">
                    {{ navButton.name }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

</style>