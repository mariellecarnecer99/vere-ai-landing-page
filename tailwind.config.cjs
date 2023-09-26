/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				navBtn: ['14px', '16px'],
				popular: ['14px', '20px'],
				sm: ['16px', '18.4px'],
				prices: ['16px', '21.28px'],
				nav: ['18px', '20.7px'],
				base: ['18px', '28.74px'],
				heroBtn: ['20px', '16px'],
				pricing: ['20px', '26.6px'],
				footerText: ['32px', '36.8px'],
				lg: ['32px', '42.56px'],
				xl: ['40px', '46px'],
				'2xl': ['48px', '63.84px'],
				'3xl': ['56px', '74.48px']
			},
			colors: {
				'orange': '#FF6B35',
				'green': '#06D6A0',
				'dark-blue': '#032946',
				'footer': '#011526',
				'logo': '#011526',
				'black': '#141414',
				'z-black': 'rgba(20, 20, 20, 0.8)'
			},
		},
	},
	plugins: [],
}
