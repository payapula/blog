import { extendTheme, ThemeOverride, ColorMode } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#9d8dbf",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const config = {
  initialColorMode: "light" as ColorMode,
  useSystemColorMode: true,
};

const overrides: ThemeOverride = {
  colors,
  config,
};

const theme = extendTheme(overrides);

export default theme;
