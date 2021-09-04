import { extendTheme, ThemeOverride, ColorMode } from '@chakra-ui/react';
import { colors } from './colors';
import { breakpoints } from './breakpoints';
import { general, fonts, styles } from './styles';

const config = {
    initialColorMode: 'light' as ColorMode,
    useSystemColorMode: false
};

const overrides: ThemeOverride & {
    general: Record<string, unknown>;
} = {
    colors,
    fonts,
    breakpoints,
    config,
    styles,
    general
};

const theme = extendTheme(overrides);

export default theme;
