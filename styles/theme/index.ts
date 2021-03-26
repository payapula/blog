import { extendTheme, ThemeOverride, ColorMode, ChakraProps } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    brand: {
        900: '#9d8dbf',
        800: '#153e75',
        700: '#2a69ac'
    }
};

const breaks = [350, 450, 650, 960, 1200, 1440];

const mq = breaks.map((bp) => `@media (min-width: ${bp}px)`);

const BREAKPOINTS = {
    xs: '350px',
    sm: '450px',
    md: '650px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1440px'
};

const mdx = {
    h1: {
        mt: '2rem',
        mb: '.25rem',
        lineHeight: 1.2,
        fontWeight: 'bold',
        fontSize: '1.875rem',
        letterSpacing: '-.025em'
    },
    h2: {
        mt: '4rem',
        mb: '0.5rem',
        lineHeight: 1.3,
        fontWeight: 'semibold',
        fontSize: '1.5rem',
        letterSpacing: '-.025em',
        '& + h3': {
            mt: '1.5rem'
        }
    },
    h3: {
        mt: '3rem',
        // mb: "0.5rem",
        lineHeight: 1.25,
        fontWeight: 'semibold',
        fontSize: '1.25rem',
        letterSpacing: '-.025em'
    },
    h4: {
        mt: '3rem',
        lineHeight: 1.375,
        fontWeight: 'semibold',
        fontSize: '1.125rem'
    },
    a: {
        color: 'teal.500',
        fontWeight: 'semibold',
        transition: 'color 0.15s',
        transitionTimingFunction: 'ease-out',
        _hover: {
            color: 'teal.600'
        }
    },
    p: {
        mt: '1.25rem',
        lineHeight: 1.7,
        'blockquote &': {
            mt: 0
        }
    },
    hr: {
        my: '4rem'
    },
    blockquote: {
        bg: 'orange.100',
        borderWidth: '1px',
        borderColor: 'orange.200',
        rounded: 'lg',
        px: '1.25rem',
        py: '1rem',
        my: '1.5rem'
    },
    ul: {
        mt: '1.5rem',
        ml: '1.25rem',
        'blockquote &': { mt: 0 },
        '& > * + *': {
            mt: '0.25rem'
        }
    },
    code: {
        rounded: 'sm',
        px: '1',
        fontSize: '0.875em',
        py: '2px',
        whiteSpace: 'nowrap',
        lineHeight: 'normal'
    }
};

const breakpoints = createBreakpoints(BREAKPOINTS);

const config = {
    initialColorMode: 'light' as ColorMode,
    useSystemColorMode: false
};

const overrides: ThemeOverride & { mdx: Record<string, unknown> } = {
    colors,
    breakpoints,
    config,
    mdx
};

const theme = extendTheme(overrides);

export { BREAKPOINTS, mq };

export default theme;
