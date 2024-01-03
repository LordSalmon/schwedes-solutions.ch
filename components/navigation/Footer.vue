<script lang="ts" setup>

type ComplexFooter = {
    sections: {
        title: string;
        links: {
            name: string;
            href: string;
        }[];
    }[];
};

type SimpleFooter = {
    links: {
        name: string;
        href: string;
    }[];
}

const { t } = useI18n();
const useComplexFooter = ref(false);

const complexFooter = ref<ComplexFooter>({
    sections: [
        {
            title: t("footer.sections.data.title"),
            links: [
                {
                    name: t("footer.sections.data.links.imprint"),
                    href: "/imprint"
                },
                {
                    name: t("footer.sections.data.links.privacy"),
                    href: "/privacy"
                }
            ]
        }
    ]
});

const simpleFooter = computed<SimpleFooter>(() => ({
    links: [
        {
            name: t("footer.sections.general.links.home"),
            href: "/"
        },
        {
            name: t("footer.sections.general.links.peripheral"),
            href: "/peripheral"
        },
        {
            name: t("footer.sections.general.links.projects"),
            href: "/projects"
        },
        {
            name: t("footer.sections.general.links.blog"),
            href: "/blog"
        },
        {
            name: t("footer.sections.data.links.imprint"),
            href: "/imprint"
        },
        {
            name: t("footer.sections.data.links.privacy"),
            href: "/privacy"
        }
    ]
}));

</script>

<template>
    <div>
        <div class="border-t-[0.25px] border-t-gray-500 py-4 w-full flex justify-evenly items-start">   
            <div v-if="useComplexFooter">
                <div
                    v-for="section of complexFooter.sections"
                    :key="section.title"
                >
                    <h4 class="text-xl font-medium mb-4">{{ section.title }}</h4>
                    <div class="flex flex-col items-start justify-start gap-y-2">

                        <NuxtLink
                        v-for="link of section.links"
                        :key="link.href"
                        :to="link.href"
                        >
                        <span>{{ link.name }}</span>
                    </NuxtLink>
                </div>
                </div>
            </div>
            <div
                v-else
                class="flex flex-wrap md:flex-nowrap md:flex-row gap-3 items-center justify-evenly w-full"
            >
                <div
                    v-for="link of simpleFooter.links"
                    :key="link.href"
                    class="w-1/3"
                >
                    <span>&lt;</span>
                    <NuxtLink 
                        :to="link.href" 
                        class="hover:text-underline"
                    >
                        <span>{{ link.name }}</span>
                    </NuxtLink>
                    <span>&gt;</span>
                </div>
            </div>
        </div>
        <div class="border-t-[0.25px] border-t-gray-500 h-20 md:h-16 w-full px-8 flex items-center justify-center">
            <p class="font-light text-center">{{ t("footer.text", {
                year: new Date().getFullYear()
            }) }}</p>
        </div>
    </div>
</template>