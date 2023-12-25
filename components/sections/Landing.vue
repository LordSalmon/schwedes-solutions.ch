<script lang="ts" setup>

const { t } = useI18n();
const contactData = await useContactData();

</script>

<template>
    <GraphicalLandingSection id="">
        <div class="relative h-full w-full">
            <div class="absolute top-0 left-0 w-full h-full px-16">
                <div class="mt-40">
                    <h1 class="text-5xl">{{ t('landing.title') }}</h1>
                    <h2 class="text-2xl mt-4 w-[50vw]">{{ t('landing.subtitle') }}</h2>
                </div>
            </div>
            <div class="w-full absolute bottom-0 flex flex-col gap-y-6 justify-end items-center h-40">
                <NuxtLink to="#projects">
                    <span>Scroll down</span>
                </NuxtLink>
                <div class="w-[0.5px] h-24 bg-fontColor" />
            </div>
            <div class="w-full absolute bottom-0 h-28 flex items-center justify-between px-16">
                <div class="flex items-center gap-x-2 group">
                    <Icon name="material-symbols:location-on-rounded" class="text-2xl group-hover:text-red-500  transition-all duration-200" />
                    <span>{{ t('landing.location') }}</span>
                </div>
                <div class="text-2xl flex items-center justify-end gap-x-4">
                    <NuxtLink 
                        :to="contactData.data.value?.data?.github ?? ''" class="cursor-pointer" title="Github"
                        target="_blank"
                    >
                        <Icon name="mdi:github" />
                    </NuxtLink>
                    <NuxtLink 
                        :to="contactData.data.value?.data?.linkedin ?? ''" class="cursor-pointer" title="LinkedIn"
                        target="_blank"
                    >
                        <Icon name="mdi:linkedin" />
                    </NuxtLink>
                    <NuxtLink 
                        :to="contactData.data.value?.data?.private_site ?? ''" class="cursor-pointer" title="Personal site"
                        target="_blank"
                    >
                        <Icon name="material-symbols:web" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </GraphicalLandingSection>
</template>