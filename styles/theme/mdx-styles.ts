import { ChakraTheme } from '@chakra-ui/react';
import { SystemStyleObject } from '@chakra-ui/styled-system';

const listStyles = {
    mt: '1rem',
    ml: '1.25rem',
    lineHeight: 1.6,
    'blockquote &': { mt: 0 },
    '& > * + *': {
        mt: '0.25rem'
    }
};

type ColorMode = 'light' | 'dark';

const headingColor = (colorMode: ColorMode) =>
    colorMode === 'light' ? 'heading.light' : 'heading.dark';

const injectColorMode = (colorMode: ColorMode, theme: ChakraTheme): SystemStyleObject => ({
    h2: {
        mt: '2rem',
        mb: '0.5rem',
        lineHeight: 1.3,
        fontWeight: 'semibold',
        fontSize: '1.5rem',
        letterSpacing: '-.025em',
        '& + h3': {
            mt: '1.5rem'
        },
        color: headingColor(colorMode),
        [`@media (min-width: ${theme.breakpoints.lg})`]: {
            mt: '3rem',
            fontSize: '4xl'
        }
    },
    h3: {
        mt: '3rem',
        lineHeight: 1.25,
        fontWeight: 'semibold',
        fontSize: '1.15rem',
        letterSpacing: '-.025em',
        color: headingColor(colorMode),
        [`@media (min-width: ${theme.breakpoints.lg})`]: {
            fontSize: '1.25rem'
        }
    },
    h4: {
        mt: '3rem',
        lineHeight: 1.375,
        fontWeight: 'semibold',
        fontSize: '1.125rem',
        color: headingColor(colorMode)
    },
    p: {
        mt: '1.25rem',
        lineHeight: 1.7,
        'blockquote &': {
            mt: 0,
            lineHeight: 1.7
        },
        fontSize: '1rem',
        [`@media (min-width: ${theme.breakpoints.lg})`]: {
            fontSize: '1.125rem'
        }
    },
    ul: {
        ...listStyles
    },
    ol: {
        ...listStyles
    },
    li: {
        fontSize: '1rem',
        paddingBottom: '4px',
        [`@media (min-width: ${theme.breakpoints.lg})`]: {
            fontSize: '1.15rem'
        }
    },
    strong: {
        color: colorMode === 'light' ? 'strong.light' : 'strong.dark'
    },
    em: {
        color: colorMode === 'light' ? 'em.light' : 'em.dark',
        marginRight: '0.25rem'
    }
});

export { injectColorMode };
