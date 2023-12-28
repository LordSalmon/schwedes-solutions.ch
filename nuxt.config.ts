// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        "nuxt-icon",
        "nuxt-directus",
        "@nuxtjs/i18n",
        "@vueuse/nuxt",
        ["nuxt-headlessui", {
            prefix: ""
        }],
        ['@nuxtjs/robots', { /* module options */ }]
    ],
    runtimeConfig: {
        public: {
            directus: {
                url: "https://api.schwedes-solutions.ch"
            }
        },
        githubToken: "",
    },
    i18n: {
        vueI18n: "./i18n.config.ts",
    }
})