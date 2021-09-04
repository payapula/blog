import { createBreakpoints } from '@chakra-ui/theme-tools';

const baseBreakpoints = {
    xs: '350px',
    sm: '450px',
    md: '650px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1440px'
};

// Should align with baseBreakpoints above
const bpTabletsOnly = `@media (min-width: ${960 + 1}px)`;

// Should align with baseBreakpoints above
const bpDesktopOnly = `@media (min-width: ${1200 + 1}px)`;

const breakpoints = createBreakpoints(baseBreakpoints);

export { breakpoints, bpDesktopOnly, bpTabletsOnly };
