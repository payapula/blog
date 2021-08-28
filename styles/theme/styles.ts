import { Styles } from '@chakra-ui/theme-tools';
import { injectColorMode as mdxStylesWithColorInjected } from './mdx-styles';
import { ChakraTheme } from '@chakra-ui/react';

// general can include any number of custom keys
const general = {
    link: {
        fontWeight: 'semibold',
        transition: 'color 0.15s',
        transitionTimingFunction: 'ease-out',
        borderBottom: '1px dashed',
        _hover: {
            borderBottom: '1px solid'
        }
    },
    focus: {
        _focus: {
            outline: '2px dashed teal',
            boxShadow: 'none'
        }
    }
};

const fonts = {
    body: 'Roboto, sans-serif, system-ui',
    heading: 'Roboto, sans-serif, system-ui'
};

/**
 * All the elements under the class `mdx-global-styles` would be styled as specified
 *
 * Idea from Chakra Docs - https://chakra-ui.com/docs/features/global-styles#styling-non-chakra-elements-globally
 */
const styles: Styles = {
    global: ({ colorMode, theme }) => ({
        '.mdx-global-styles': {
            ...mdxStylesWithColorInjected(colorMode, theme as ChakraTheme)
        }
    })
};

export { general, fonts, styles };
