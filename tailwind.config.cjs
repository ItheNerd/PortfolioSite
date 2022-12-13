/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
}

module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx,html}",
		"./public/**/*.{vue,js,ts,jsx,tsx,html}",
		"./src/components/**/*.{vue,js,ts,jsx,tsx,html}",
	],
	theme: {
		screens: {
			xs: "350px",
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				primary: withOpacity("--primary"),
				secondary: withOpacity("--secondary"),
				main: withOpacity("--main"),
				background: withOpacity("--background"),
				header: withOpacity("--header"),
				accent: withOpacity("--accent"),
			},
			animation: {
				wiggle: "wiggle 1s ease-in-out infinite",
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
			},
		},
	},
	plugins: [],
};
