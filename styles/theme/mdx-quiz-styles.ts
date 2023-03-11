import { ChakraTheme, ColorMode } from '@chakra-ui/react';
import { SystemStyleObject } from '@chakra-ui/styled-system';
import { injectColorMode } from './mdx-styles';

const overrideColorMode = (colorMode: ColorMode, theme: ChakraTheme): SystemStyleObject => ({
    p: {
        lineHeight: 1.7,
        'blockquote &': {
            mt: 0,
            lineHeight: 1.7
        },
        fontSize: '1rem',
        [`@media (min-width: ${theme.breakpoints.lg})`]: {
            fontSize: '1.125rem'
        }
    }
});

export const getMDXQuizStyles = (colorMode: ColorMode, theme: ChakraTheme): SystemStyleObject => {
    return {
        ...injectColorMode(colorMode, theme),
        ...overrideColorMode(colorMode, theme)
    };
};
