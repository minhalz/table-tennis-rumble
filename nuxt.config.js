import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    meta: {
        title: 'Table Tennis Rumble',
        htmlAttrs: {
            lang: 'en',
        },
        bodyAttrs: {
            class: 'bg-gradient-to-r from-[#fc466b] to-[#3f5efb]',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            {
                hid: 'description',
                name: 'description',
                content: 'Play table tennis with random modifiers and have fun!',
            },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxt/image-edge', '@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/google-fonts'],

    tailwindcss: {
        cssPath: '@/assets/scss/main.scss',
    },

    vite: {
        server: {
            watch: {
                usePolling: true,
            },
        },
    },

    googleFonts: {
        families: {
            'Open Sans': {
                wght: [300 + '..' + 800],
            },
        },
        subsets: 'latin',
        preload: true,
    },
})
