/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  	brown: {
					500: '#cb6843', // Vous pouvez ajuster la valeur de la couleur marron ici
			  	},
			},
		},
	},
	daisyui: {
		themes: ["autumn"],
	},
	plugins: [require('daisyui')],
}
