/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dark: {
					background: '#121212',
					surface: '#1C1C1C',
					primary: '#BB86FC',
					variant: '#5A5ABA',
					secondary: '#03DAC6',
					error: '#CF6679',
					text: '#F1F1F1'
				},
				light: {
					background: '#FFFFFF',
					surface: '#F1F1F1',
					primary: '#BB86FC',
					variant: '#3700B3',
					secondary: '#03DAC6',
					error: '#CF6679',
					text: '#1C1C1C'
				}
			}
		},
	},
	plugins: [],
	darkMode: 'class'
}
