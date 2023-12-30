<script lang="ts" setup>

const locale = useI18n();

</script>

<template>
    <div>
        <div class="border-t-[0.25px] border-t-gray-500 py-4 w-full flex justify-evenly items-start">
            <span>footer brer</span>
        </div>
        <div class="border-t-[0.25px] border-t-gray-500 h-20 md:h-16 w-full px-8 flex items-center justify-center">
            <p class="font-light text-center">{{ locale.t("footer.text", {
                year: new Date().getFullYear()
            }) }}</p>
        </div>
    </div>
</template>