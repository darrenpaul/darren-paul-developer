import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
	content: ['./modules/**/*.{html,js,ts,vue}'],
	theme: {
		extend: {
			colors: {},
			boxShadow: {
				hard: '4px 4px 0px 0px rgba(0, 0, 0, 0.75)',
			},
			zIndex: {
				navigation: 100,
				drawer: 101,
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		darkTheme: 'light',
	},
}
