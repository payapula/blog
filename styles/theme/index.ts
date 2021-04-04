import { extendTheme, ThemeOverride, ColorMode } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { mdx } from './mdx-styles';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    heading: {
        light: '#3e02ab',
        dark: '#21c54b'
    },
    strong: {
        light: '#ab0202',
        dark: '#ffb256'
    },
    em: {
        light: '#8600d4',
        dark: '#d895ff'
    },
    code: {
        color: {
            light: '#e01e5a',
            dark: '#E8912B'
        },
        bg: {
            light: 'rgba(29, 28, 29, 0.04)',
            dark: 'rgba(232, 232, 232, 0.04)'
        }
    },
    link: {
        color: { light: '#1d612e', dark: '#3ec4c1' },
        hover: {
            light: '#04a82d',
            dark: '#42f1f4'
        }
    }
};

const breaks = [350, 450, 650, 960, 1200, 1440];

const mq = breaks.map((bp) => `@media (min-width: ${bp}px)`);

export const bpDesktopOnly = `@media (min-width: ${1200 + 1}px)`;

const BREAKPOINTS = {
    xs: '350px',
    sm: '450px',
    md: '650px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1440px'
};

const breakpoints = createBreakpoints(BREAKPOINTS);

const config = {
    initialColorMode: 'light' as ColorMode,
    useSystemColorMode: false
};

const general = {
    link: {
        fontWeight: 'semibold',
        transition: 'color 0.15s',
        transitionTimingFunction: 'ease-out',
        _hover: {
            'border-bottom': '1px solid'
        }
    }
};

const overrides: ThemeOverride & { mdx: Record<string, unknown> } & {
    general: Record<string, unknown>;
} = {
    colors,
    fonts: {
        body: 'Roboto, sans-serif, system-ui',
        heading: 'Roboto, sans-serif, system-ui'
    },
    breakpoints,
    config,
    mdx,
    general
};

const theme = extendTheme(overrides);

export { BREAKPOINTS, mq };

export default theme;
