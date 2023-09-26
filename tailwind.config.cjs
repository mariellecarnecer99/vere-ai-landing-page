/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'orange': '#FF6B35',
				'green': '#06D6A0',
				'dark-blue': '#032946',
				'footer': '#011526'
			},
		},
	},
	plugins: [],
}
