/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'selector',
    theme: {
        screens: {
            xs: '350px',
            sm: '450px',
            md: '650px',
            lg: '960px',
            xl: '1200px',
            '2xl': '1440px'
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            blue: {
                light: '#90cdf4',
                dark: '#2b6cb0',
                ...colors.blue
            },
            teal: {
                ...colors.teal
            },
            gray: {
                chakra: '#1A202C', //chakra's gray-800
                ...colors.gray
            }
        }
    },
    plugins: []
};
