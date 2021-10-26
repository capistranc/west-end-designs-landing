import { theme } from "..";
export const Button = {
  // 1. We can update the base styles
  baseStyle: (props) => ({
    // fontWeight: "bold", // Normally, it is "semibold"
    _hover: {
      bgColor: theme.border1[props.colorMode],
    },
  }),
  // 2. We can add a new button size or extend existing
  sizes: {
    // xl: {
    //   h: "56px",
    //   fontSize: "lg",
    //   px: "32px",
    // },
  },
  // 3. We can add a new visual variant
  variants: {
    square: {
      borderRadius: "4px",
    },
    // 4. We can override existing variants
    solid: (props) => ({
      color: "white",
      borderRadius: 4,
      bg: props.colorMode === "dark" ? "teal.700" : "teal.500",
    }),
    btow: (props) => ({
      color: props.colorMode == "light" ? "white" : "black",
      bg: props.colorMode == "light" ? "black" : "white",
      borderRadius: 4,
    }),
    bb: {
      color: "white",
      borderRadius: 4,
      bg: "#000000",
    },
    bw: {
      color: "black",
      borderRadius: 4,
      bg: "#FFFFFF",
    },
  },
};
