<script lang="ts" setup>

const { t } = useI18n();

</script>

<template>
    <div class="w-full h-[calc(100vh_-_7rem_-_4rem)] max-h-[calc(100vh_-_7rem_-_4rem)] flex flex-col items-center justify-center gap-y-6">
            <h1 class="text-4xl">{{ t('thanks.title') }}</h1>
            <h2 class="text-2xl">{{ t('thanks.subtitle') }}</h2>
            <NuxtLink to="/">
                <Button>
                    {{ t('thanks.backToHome') }}
                </Button>
            </NuxtLink>
    </div>
</template>