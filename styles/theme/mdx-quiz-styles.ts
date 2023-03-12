import { ChakraTheme, ColorMode } from '@chakra-ui/react';
import { SystemStyleObject } from '@chakra-ui/styled-system';
import { injectColorMode } from './mdx-styles';

export const getMDXQuizStyles = (colorMode: ColorMode, theme: ChakraTheme): SystemStyleObject => {
    return {
        ...injectColorMode(colorMode, theme)
    };
};
