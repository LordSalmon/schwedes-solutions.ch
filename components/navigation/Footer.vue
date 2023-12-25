<script lang="ts" setup>

const locale = useI18n();

</script>

<template>
    <div>
        <div class="border-t-[0.5px] border-t-gray-300 h-16 w-full flex items-center justify-center">
            <span class="font-light">{{ locale.t("footer.text", {
                year: new Date().getFullYear()
            }) }}</span>
        </div>
    </div>
</template>