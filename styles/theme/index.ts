import { extendTheme, ColorMode } from '@chakra-ui/react';
import { colors } from './colors';
import { breakpoints } from './breakpoints';
import { general, fonts, styles } from './styles';

const config = {
    initialColorMode: 'light' as ColorMode,
    useSystemColorMode: false
};

// Due to a issue in typescript and chakra the following type has been removed
// https://github.com/chakra-ui/chakra-ui/issues/4226#issuecomment-904630320
// const overrides: ThemeOverride & {
//     general: Record<string, unknown>;
// }

const overrides = {
    colors,
    fonts,
    breakpoints,
    config,
    styles,
    general
};

const theme = extendTheme(overrides);

export default theme;
