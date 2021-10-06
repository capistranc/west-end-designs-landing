import { useColorModeValue } from "@chakra-ui/react";

export function toHex(colorStr: string) {
  if (colorStr === "white") return "#FFFFFF";
  if (colorStr === "black") return "#000000";
  if (colorStr.startsWith("#")) return colorStr;
  if (colorStr.startsWith("rgb")) return colorStr;
  const match = colorStr.match(/([a-z]+)\.([0-9]+)/);
  const [cString, color, weight] = match;
  return colors[color][weight];
}

export const colors = {
  teal: {
    50: "#e4f7fa",
    100: "#cae1e7",
    200: "#abccd3",
    300: "#8cb7c1",
    400: "#6ca1ae",
    500: "#548895",
    600: "#3f6a74",
    700: "#2c4c54",
    800: "#162e33",
    900: "#001116",
  },
  gray: {
    50: "#f8f0f2",
    100: "#d9d9d9",
    200: "#bfbfbf",
    300: "#a6a6a6",
    400: "#8c8c8c",
    500: "#737373",
    600: "#595959",
    700: "#404040",
    800: "#262626",
    900: "#120b0d",
  },
  brown: {
    50: "#ffeded",
    100: "#e4d1cf",
    200: "#cdb4b3",
    300: "#b89694",
    400: "#a27876",
    500: "#895f5d",
    600: "#6b4a47",
    700: "#4e3533",
    800: "#311f1e",
    900: "#180803",
  },
  blue: {
    50: "#e4f6fd",
    100: "#c9dfe6",
    200: "#acc9d2",
    300: "#8db3be",
    400: "#6f9dab",
    500: "#558491",
    600: "#416672",
    700: "#2c4952",
    800: "#172d33",
    900: "#001215",
  },
};

const colorSchemes = {
  bg: {
    light: toHex("white"),
    dark: toHex("teal.900"),
  },
  bg2: {
    light: toHex("blue.400"),
    dark: toHex("teal.800"),
  },
  bg3: {
    light: toHex("blue.50"),
    dark: toHex("teal.900"),
  },
  bg4: {
    light: toHex("white"),
    dark: toHex("teal.800"),
  },
  border2: {
    light: toHex("blue.200"),
    dark: toHex("teal.600"),
  },
  border1: {
    light: toHex("blue.500"),
    dark: toHex("teal.700"),
  },
  fg: { light: toHex("gray.700"), dark: toHex("gray.100") },
  fg2: {
    light: toHex("white"),
    dark: toHex("gray.100"),
  },
  heading: {
    light: toHex("teal.600"),
    dark: toHex("teal.600"),
  },
  heading2: {
    light: toHex("teal.600"),
    dark: toHex("teal.600"),
  },
  line: {
    light: toHex("teal.500"),
    dark: "rgba(255,255,255,0.8",
  },
  bw: {
    light: toHex("black"),
    dark: toHex("white"),
  },
  wb: {
    light: toHex("white"),
    dark: toHex("black"),
  },
};

const scheme = {
  bw: {
    bg: () => useColorModeValue(toHex("black"), toHex("white")),
    color: () => useColorModeValue(toHex("white"), toHex("black")),
  },
};

export const theme = {
  scheme,
  ...colorSchemes,
  toHex,
  ...colors,
};
