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
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                blue: {
                    light: '#90cdf4',
                    dark: '#2b6cb0'
                },
                gray: {
                    chakra: '#1A202C' //chakra's gray-800
                }
            },
            data: {
                checked: "state~='checked'"
            }
        }
    },
    plugins: [require('tailwindcss-animate')]
};
