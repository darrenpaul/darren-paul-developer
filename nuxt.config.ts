import { SITE_OWNER_COPY } from './constants/copy'
import sitemapRoute from './helpers/sitemapRoute'

export default defineNuxtConfig({
    ssr: true,
    css: ['~/assets/css/global.scss'],
    runtimeConfig: {
        SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
        SANITY_DATASET: process.env.SANITY_DATASET,
        EMAIL_SERVER: process.env.EMAIL_SERVER,
        SEND_TO_EMAIL: process.env.SEND_TO_EMAIL,
        sanity: {
            token: process.env.NUXT_SANITY_TOKEN
        }
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sanity', '@funken-studio/sitemap-nuxt-3',],
    sanity: {
        projectId: process.env.SANITY_PROJECT_ID
    },
    app: {
        head: {
            ...SITE_OWNER_COPY.meta
        },
    },
    sitemap: {
        hostname: SITE_OWNER_COPY.domain,
        routes: sitemapRoute,
        gzip: true,
        exclude: ['/admin']
        // cacheTime: 1,
    }
})
