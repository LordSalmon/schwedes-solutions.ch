<script lang="ts" setup>

const { t } = useI18n();

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const message = ref("");

const redirectUrl = computed(() => {
    if (process.client) {
        return `${window.location.origin}/thanks`;
    }
    return "";
});

</script>

<template>
    <GraphicalFullSection 
        id="contact" 
        :titlePrefix="t('contact.titlePrefix')" 
        :title="t('contact.title')"
        :full="false"
    >
        <form 
            action="https://submit-form.com/3IvdRWhku"
        >

            <div class="w-full h-full flex flex-col gap-y-6 font-light">
                <input
                    type="hidden"
                    name="_redirect"
                    :value="redirectUrl"
                />
                <div class="flex items-center justify-between gap-x-6">
                    <input 
                        name="firstName"
                        v-model="firstName" 
                        class="w-full bg-background rounded border-[0.5px] border-fontColor outline-none p-3 px-5" 
                        :placeholder="t('contact.firstName')"
                    >
                    <input 
                        name="lastName"
                        v-model="lastName" 
                        class="w-full bg-background rounded border-[0.5px] border-fontColor outline-none p-3 px-5" 
                        :placeholder="t('contact.lastName')"
                    >
                </div>
                <div class="flex items-center justify-between">
                    <input 
                        name="email"
                        v-model="email" 
                        class="w-full bg-background rounded border-[0.5px] border-fontColor outline-none p-3 px-5" type="email" :placeholder="t('contact.email')">
                </div>
                <div>
                    <textarea 
                    name="message"
                    v-model="message"
                    class="w-full h-32 bg-background rounded-xl border-[0.5px] border-fontColor outline-none p-3 px-5 border-opacity-50 max-h-60"
                    :placeholder="t('contact.message')"   
                    />
                </div>
                <div class="flex items-center justify-center">
                    <Button class="uppercase" type="submit">
                        {{ t('contact.sendMessage') }}
                    </Button>
                </div>
            </div>
        </form>
    </GraphicalFullSection>
</template>