<script lang="ts" setup>
import { Application } from '@splinetool/runtime';
import { useIntersectionObserver } from "@vueuse/core";

const { t } = useI18n();
const contactData = await useContactData();
const splineBackground = ref<HTMLCanvasElement>();
const app = ref<Application>();
const intersectionObserver = useIntersectionObserver(splineBackground, (events: IntersectionObserverEntry[]) => {
    const event = events[0];
    if (event.isIntersecting) {
        if (splineBackground.value) {
            app.value?.play();
        }
    } else {
        if (splineBackground.value) {
            app.value?.stop();
        }
    }
});


onMounted(() => {
    if (splineBackground.value) {   
        app.value = new Application(splineBackground.value);
        app.value.load("/waveform.splinecode");
    }   
});

onBeforeUnmount(() => {
    if (app.value) {
        app.value.stop();
    }
    intersectionObserver.stop();
})

</script>

<template>
    <GraphicalLandingSection id="">
        <div class="relative h-full w-full">
            <div class="absolute top-0 left-0 w-full h-full px-8 md:px-16 z-20">
                <div class="mt-12 md:mt-40">
                    <NuxtLink to="/">
                        <h1 class="text-4xl md:text-5xl">{{ t('landing.title') }}</h1>
                    </NuxtLink>
                    <h2 class="text-xl md:text-2xl mt-12 md:mt-4 md:w-[50vw]">{{ t('landing.subtitle') }}</h2>
                </div>
            </div>
            <ClientOnly>
                <canvas 
                class="absolute top-0 left-0 w-full h-full z-10"
                id="spline-background"
                ref="splineBackground"
                />
            </ClientOnly>
            <div class="w-full absolute bottom-0 flex flex-col gap-y-6 justify-end items-center h-40 z-30">
                <NuxtLink to="#projects">
                    <span>Scroll down</span>
                </NuxtLink>
                <div class="w-[0.5px] h-16 md:h-24 bg-fontColor" />
            </div>
            <div class="w-full absolute bottom-0 flex items-center justify-between px-8 md:px-16 h-20 md:h-28 z-30">
                <NuxtLink 
                    :to="contactData.data.value?.data.location_url ?? ''"
                    target="_blank"
                >
                    <div class="flex items-center group">
                        <Icon 
                            name="material-symbols:location-on-rounded" 
                            class="text-2xl group-hover:text-red-500 transition-all duration-200 mr-2" 
                        />
                        <span class="hidden md:block">{{ t('landing.location') }}</span>
                        <span class="block md:hidden">{{ t('landing.mobileLocation') }}</span>
                        <span class="text-3xl">🇨🇭</span>
                    </div>
                </NuxtLink>
                <div class="text-2xl flex items-center justify-end gap-x-4">
                    <LandingSocialButton 
                        :title="t('landing.social.github')" 
                        :url="contactData.data.value?.data?.github ?? ''" 
                        icon="mdi:github"
                    />
                    <LandingSocialButton 
                        :title="t('landing.social.linkedin')" 
                        :url="contactData.data.value?.data?.linkedin ?? ''" 
                        icon="mdi:linkedin"
                    />
                    <LandingSocialButton 
                        :title="t('landing.social.personalSite')" 
                        :url="contactData.data.value?.data?.private_site ?? ''" 
                        icon="material-symbols:web"
                    />
                </div>
            </div>
        </div>
    </GraphicalLandingSection>
</template>