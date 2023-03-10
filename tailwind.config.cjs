/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				primary: '#EA6D27',
				secondary: '#101A24',
				grey: '#5C6574',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				davidLibre: ['David Libre', 'serif'],
			},
		},
		screens: {
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px',
		},
	},
	plugins: [],
};
