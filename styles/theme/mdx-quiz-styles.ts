import { ChakraTheme, ColorMode } from '@chakra-ui/react';
import { SystemStyleObject } from '@chakra-ui/styled-system';
import { injectColorMode } from './mdx-styles';

const overrides = (colorMode: ColorMode): SystemStyleObject => {
    return {
        // th: {
        //     backgroundColor: colorMode === 'light' ? 'gray.50' : 'whiteAlpha.100',
        //     fontWeight: 'semibold',
        //     padding: ['1', '2', '4', '5', '6'],
        //     fontSize: 'md'
        // },
        // td: {
        //     padding: ['1', '2', '4', '5', '6']
        // }
    };
};

export const getMDXQuizStyles = (colorMode: ColorMode, theme: ChakraTheme): SystemStyleObject => {
    return {
        // ...injectColorMode(colorMode, theme),
        ...overrides(colorMode)
    };
};
