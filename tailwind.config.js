/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        screens: {
            xs: '350px',
            sm: '450px',
            md: '650px',
            lg: '960px',
            xl: '1200px',
            '2xl': '1440px'
        }
    },
    plugins: []
};
