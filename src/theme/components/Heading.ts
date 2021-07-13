export const Heading = {
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
    "banner-with-border": {
      fontSize: "100px",
      boxSizing: "border-box",
      border: "2px solid rgba(255, 255, 255, 0.5)",
      px: "200",
      py: "50",
    },
    // 4. We can override existing variants
    // solid: (props) => ({
    //   bg: props.colorMode === "dark" ? "red.300" : "red.500",
    // }),
  },
};
