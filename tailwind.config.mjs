/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primmary: '#1e3932',
				secondary: '#d4e9e2',
				tertiary: '#008248',
			}
		},
	},
	plugins: [],
}
