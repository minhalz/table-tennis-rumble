import { createNuxtPersistedState } from 'pinia-plugin-persistedstate/nuxt'

const myPlugin = ({ $pinia }) => {
    $pinia.use(createNuxtPersistedState(useCookie))
}

export default myPlugin
