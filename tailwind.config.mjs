/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
const config = {
	content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/pages/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["light", "dark"],
	},
};

export default config;
