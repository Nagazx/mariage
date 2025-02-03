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
		themes: [
			{
			  terracotta: {
				"primary": "#E8C6A7",
				"secondary": "#D88C74",
				"accent": "#B56557",
				"neutral": "#5A3E36",
				"base-100": "#FFFFFF",
				"info": "#3B82F6",
				"success": "#2E7D32",
				"warning": "#E9C46A",
				"error": "#D72638",
			  },
			},
		  ],
	},
	plugins: [require('daisyui')],
}
