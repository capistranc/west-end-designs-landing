export const FormLabel = {
  // 1. We can update the base styles
  baseStyle: {
    // fontWeight: "bold", // Normally, it is "semibold"
  },
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
    inlineLabel: {
      display: "inline",
      ml: "0.5rem",
      px: "0.25rem",
      position: "absolute",
      bg: "1E1E1E",
      zIndex: "2",
      fontWeight: "bold",
      top: "0.75rem",
    },
    // 4. We can override existing variants
    // solid: (props) => ({
    //   bg: props.colorMode === "dark" ? "red.300" : "red.500",
    // }),
  },
};
