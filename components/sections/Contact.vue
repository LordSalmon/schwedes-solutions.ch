<script lang="ts" setup>

const { t } = useI18n();

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const message = ref("");

type SelectOption = {
    label: string;
    value: string;
    disabled?: () => boolean;
};

const options = ref<SelectOption[]>([
    {
        label: t("contact.options.websiteCreation"),
        value: "websiteCreation"
    },
    {
        label: t("contact.options.websiteMaintenance"),
        value: "websiteMaintenance"
    },
    {
        label: t("contact.options.websiteOptimization"),
        value: "websiteOptimization"
    },
    {
        label: t("contact.options.websiteHosting"),
        value: "websiteHosting"
    },
    {
        label: t("contact.options.other"),
        value: "websiteOther"
    }
]);

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
                        required
                        name="firstName"
                        class="w-full bg-background rounded border-[0.5px] border-fontColor outline-none p-3 px-5" 
                        :placeholder="t('contact.firstName')"
                    >
                    <input 
                        required
                        name="lastName"
                        class="w-full bg-background rounded border-[0.5px] border-fontColor outline-none p-3 px-5" 
                        :placeholder="t('contact.lastName')"
                    >
                </div>
                <div class="flex items-center justify-between">
                    <input 
                        required
                        name="email"
                        class="w-full bg-background rounded border-[0.5px] border-fontColor outline-none p-3 px-5" type="email" :placeholder="t('contact.email')">
                </div>
                <div class="flex items-center justify-between w-full">
                    <select 
                        required
                        name="category"
                        class="w-full bg-background rounded border-[0.5px] border-fontColor outline-none p-3 px-5"
                        :placeholder="t('contact.options.select')"
                        value=""
                    >
                        <option v-for="option in options" :value="option.value">
                            {{ option.label }}
                        </option>
                    </select>
                </div>
                <div>
                    <textarea 
                    required
                    name="message"
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