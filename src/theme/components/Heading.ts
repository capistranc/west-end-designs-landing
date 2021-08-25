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
      //See Parallax5/section3 for usage
      fontSize: ["5xl", "6xl", "8xl", "9xl"],
      boxSizing: "border-box",
      border: "2px solid rgba(255, 255, 255, 0.5)",
      px: ["3rem", "8rem", "10rem", "12rem"],
      py: ["1rem", "1.5rem", "1.75rem", "2rem"],
    },

    "banner-with-border-md": {
      //See Parallax5/section3 for usage
      fontSize: ["4xl", "5xl", "6xl", "7xl"],
      boxSizing: "border-box",
      border: "2px solid rgba(255, 255, 255, 0.5)",
      px: ["3rem", "8rem", "10rem", "10rem"],
      py: [".75rem", "1rem", "1.25rem", "1.5rem"],
    },
    h2: {
      fontFamily: "Raleway",
    },
    // 4. We can override existing variants
    // solid: (props) => ({
    //   bg: props.colorMode === "dark" ? "red.300" : "red.500",
    // }),
  },
};
