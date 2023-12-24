// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        "nuxt-icon",
        "nuxt-directus",
        ['@nuxtjs/robots', { /* module options */ }]
    ],
    runtimeConfig: {
        directus: {
            url: "https://api.schwedes-solutions.ch"
        }
    }
})