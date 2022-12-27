import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const GOOGLE_ANALYTICS_ID = config.GOOGLE_ANALYTICS_ID
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: GOOGLE_ANALYTICS_ID
    }
  })
})
