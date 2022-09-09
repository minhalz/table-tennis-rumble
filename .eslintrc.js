module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'vue/multi-word-component-names': 0,
        'prettier/prettier': ['error'],
        'vue/html-indent': ['error', 4],
        'vue/singleline-html-element-content-newline': 0,
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/valid-v-slot': [
            'error',
            {
                allowModifiers: true,
            },
        ],
    },
    globals: {
        _: true,
        defineProps: false,
        defineEmits: false,
        ref: false,
        reactive: false,
        computed: false,
        watch: false,
        useState: false,
        useCookie: false,
        definePageMeta: false,
        useHead: false,
    },
}
