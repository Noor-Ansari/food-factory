const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false,
	theme: {
		screens: {
			xxs: "400px",
			xs: "534px",
			...defaultTheme.screens,
		},
	},
	variants: {},
	plugins: [],
};
