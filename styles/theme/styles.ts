import { Styles } from '@chakra-ui/theme-tools';
import { getMDXPostStyles } from './mdx-post-styles';
import { getMDXQuizStyles } from './mdx-quiz-styles';
import { ChakraTheme } from '@chakra-ui/react';

// general can include any number of custom keys
const general = {
    link: {
        fontWeight: 'semibold',
        transition: 'color 0.15s',
        transitionTimingFunction: 'ease-out',
        borderBottom: '1px dashed',
        '&:hover': {
            borderBottom: '1px solid'
        }
    },
    focus: {
        '&:focus': {
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
            ...getMDXPostStyles(colorMode, theme as ChakraTheme)
        },
        '.quiz-global-styles': {
            ...getMDXQuizStyles(colorMode, theme as ChakraTheme)
        },
        '.posts-container': {
            // Article Hover styles - https://codepen.io/sdthornton/pen/wBZdXq
            article: {
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                '&:hover': {
                    boxShadow:
                        colorMode === 'light'
                            ? '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)'
                            : '0 14px 28px rgba(255, 130, 47, 0.25), 0 10px 10px rgba(95, 83, 76, 0.22)'
                }
            }
        },
        svg: {
            verticalAlign: 'middle'
        }
    })
};

export { general, fonts, styles };
