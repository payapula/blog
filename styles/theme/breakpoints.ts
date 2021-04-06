import { createBreakpoints } from '@chakra-ui/theme-tools';

const bpDesktopOnly = `@media (min-width: ${1200 + 1}px)`;

const baseBreakpoints = {
    xs: '350px',
    sm: '450px',
    md: '650px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1440px'
};

const breakpoints = createBreakpoints(baseBreakpoints);

export { breakpoints, bpDesktopOnly };
