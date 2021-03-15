import { extendTheme, ThemeOverride, ColorMode } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#9d8dbf",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const BREAKPOINTS = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1440px",
};

const breakpoints = createBreakpoints(BREAKPOINTS);

const config = {
  initialColorMode: "light" as ColorMode,
  useSystemColorMode: false,
};

const overrides: ThemeOverride = {
  colors,
  breakpoints,
  config,
};

const theme = extendTheme(overrides);

export { BREAKPOINTS };

export default theme;
