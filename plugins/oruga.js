import { defineNuxtPlugin } from '#app';
import Oruga from '@oruga-ui/oruga-next';
import { bulmaConfig } from '@oruga-ui/theme-bulma'

// import '@oruga-ui/theme-bulma/dist/bulma.css'.
import 'assets/scss/app.scss'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Oruga, bulmaConfig)
});
