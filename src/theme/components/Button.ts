export const Button = {
  // 1. We can update the base styles
  baseStyle: (props) => ({
    // fontWeight: "bold", // Normally, it is "semibold"
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
      borderRadius: "0px",
    },
    // 4. We can override existing variants
    solid: (props) => ({
      color: "white",
      borderRadius: 0,
      bg: props.colorMode === "dark" ? "teal.700" : "teal.500",
    }),
  },
};
