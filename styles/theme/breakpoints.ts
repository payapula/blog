export const breakpoints = {
    /**
     * Chakra was adding base as 0 to the values
     *
     * Refer - https://v2.chakra-ui.com/docs/styled-system/responsive-styles#the-array-syntax
     *
     * Array syntax has following mapping
     *
     * [0,    1,    2,      3,     4,     5,     6   ]
     * [0, 350px, 450px, 650px, 960px, 1200px, 1440px]
     */
    base: '0em',
    xs: '350px',
    sm: '450px',
    md: '650px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1440px'
};
