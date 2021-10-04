import { theme } from "..";
export const Icon = {
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
    bordered: (props) => ({
      //See Parallax5/section3 for usage

      boxSize: "12rem",
      border: "1rem solid",
      p: "4",
      borderRadius: "full",
      color: theme.border2[props.colorMode],
      borderColor: theme.border2[props.colorMode],
    }),

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
