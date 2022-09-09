const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './nuxt.config.js',
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            fontFamily: {
                sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}
