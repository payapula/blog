import { extendTheme, ThemeOverride, ColorMode } from '@chakra-ui/react';
import { mdx } from './mdx-styles';
import { colors } from './colors';
import { breakpoints } from './breakpoints';
import { general, fonts } from './styles';

const config = {
    initialColorMode: 'light' as ColorMode,
    useSystemColorMode: false
};

const overrides: ThemeOverride & { mdx: Record<string, unknown> } & {
    general: Record<string, unknown>;
} = {
    colors,
    fonts,
    breakpoints,
    config,
    mdx,
    general
};

const theme = extendTheme(overrides);

export default theme;
