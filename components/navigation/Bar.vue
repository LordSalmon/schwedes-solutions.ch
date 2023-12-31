<script lang="ts" setup>

const { setLocale, locale } = useI18n();

type Navbar = {
    links: {
        name: string,
        href: string
    }[];
}

type Language = {
    emoji: string;
    label: string;
    key: string;
};

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

const languages: Language[] = [
    {
        emoji: "🇬🇧",
        label: "English",
        key: "en"
    },
    {
        emoji: "🇩🇪",
        label: "Deutsch",
        key: "de"
    }
]

</script>

<template>
    <div class="h-28 w-full flex justify-between items-center px-6 md:px-12 gap-x-4">
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
            <div class="ml-4">
                <Menu as="div" class="relative inline-block text-left z-40 bg-background">
                    <div>
                        <MenuButton
                            class="w-8 h-8 rounded border-[0.5px] border-fontColorPassive flex items-center justify-center outline-none group transition-all duration-150"
                            name="language button"
                        >
                            <Icon name="material-symbols:language" class="transition-all duration-150 group-hover:text-lg" />
                        </MenuButton>
                    </div>

                    <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                        <MenuItems
                            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-background shadow-lg ring-1 ring-white/5 focus:outline-none border-[0.5px] border-fontColorPassive">
                            <div class="px-1 py-1">
                                <MenuItem 
                                    v-for="language of languages"
                                    :key="language.key"
                                    v-slot="{ active }"
                                    class="border-b-[0.5px] border-fontColorPassive last:border-b-0"
                                    @click="setLocale(language.key)"
                                >
                                    <div class="w-full flex items-center text-fontColor gap-x-4 text-base py-2 px-2 hover:bg-neutral-900 cursor-pointer">
                                        <span>{{ language.emoji }}</span>    
                                        <span 
                                            class="font-light"
                                            :class="{
                                                'font-medium': locale === language.key
                                            }"
                                        >{{ language.label }}</span>
                                    </div>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>