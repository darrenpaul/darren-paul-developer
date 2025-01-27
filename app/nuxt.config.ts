import { loginRoute } from './constants/routes'
import settings from './constants/settings'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ignore: [
		process.env.NODE_ENV === 'production' ? '/app/pages/admin/index.vue' : '',
		process.env.NODE_ENV === 'production'
			? '/server/api/v1/admin/experience/index.patch.ts'
			: '',
	],
	compatibilityDate: '2024-11-01',
	future: {
		compatibilityVersion: 4,
	},
	devtools: { enabled: true },
	nitro: {
		compressPublicAssets: { gzip: true, brotli: true },
		prerender: {
			routes: ['/sitemap.xml', '/robots.txt'],
		},
		minify: true,
	},
	modules: [
		'@nuxt/eslint',
		'@nuxtjs/supabase',
		'@nuxtjs/tailwindcss',
		'@nuxt/fonts',
		'@nuxtjs/seo',
		'@nuxt/scripts',
		'@vueuse/nuxt',
		'nuxt-svgo',
		'@nuxt/image',
		'nuxt-tiptap-editor',
		'nuxt-og-image',
		'@nuxtjs/plausible',
	],
	typescript: {
		strict: true,
	},
	runtimeConfig: {
		public: {
			domain: process.env.NUXT_PUBLIC_DOMAIN,
			siteName: process.env.NUXT_PUBLIC_SITE_NAME,
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
		},
	},
	eslint: {
		config: {
			standalone: false,
		},
	},
	css: ['~/assets/css/main.css'],
	supabase: {
		url: process.env.NUXT_PUBLIC_SUPABASE_PROJECT_URL,
		key: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
		serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
		redirectOptions: {
			login: loginRoute.path,
			callback: '/confirm',
			include: ['/account(/*)?'],
			cookieRedirect: false,
			exclude: [],
		},
	},
	routeRules: {
		'/': { isr: 3600 },
	},
	site: {
		url: settings.siteUrl,
		name: settings.siteName,
		defaultLocale: 'en',
	},
	sitemap: {
		gzip: true,
		exclude: ['/confirm/**', '/auth/**', '/account/**', '/logout'],
		sources: [],
	},
	schemaOrg: {
		identity: {
			type: 'Organization',
			name: settings.siteName,
			url: settings.siteUrl,
			logo: `${settings.siteUrl}/favicon.png`,
		},
	},
	robots: {
		blockNonSeoBots: true,
		blockAiBots: true,
	},

})
