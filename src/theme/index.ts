import { theme as chakraTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import components from "./components";
import { colors, theme } from "./colors";

const fonts = {
  ...chakraTheme.fonts,
  body: "Roboto",
  heading: "Oswald",
};

const breakpoints = createBreakpoints({
  sm: "34em",
  md: "52em",
  lg: "62em",
  xl: "80em",
});

const overrides = {
  ...chakraTheme,
  fonts,
  breakpoints,
  textStyles: {
    h1: {
      fontFamily: "Oswald",
    },
    h2: {
      fontFamily: "Raleway",
    },
    description: {},
    subText: {
      fontFamily: "Roboto Condensed",
      fontWeight: "hairline",
      // fontStyle: "italic",
    },
  },
  colors,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  components,
};

export * from "./colors";

export default extendTheme(overrides);
