import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const DiagonalDecoratorTopRightMinus = ({ ...props }) => {
  return (
    <Box
      _before={{
        position: "absolute",
        top: { base: "-12rem", xxl: "-20rem" },
        right: "0",

        transform: "skewY(4deg)",
        h: { base: "12rem", xxl: "20rem" },
        w: "100%",
        content: `""`,
        ...props,
      }}
    />
  );
};

export const DiagonalDecoratorBottomLeftMinus = ({ ...props }) => {
  return (
    <Box
      _before={{
        position: "absolute",
        bottom: { base: "-12rem", xxl: "-20rem" },
        right: "0",
        transform: "skewY(4deg)",
        h: { base: "12rem", xxl: "20rem" },

        w: "100%",
        content: `""`,
        ...props,
      }}
    />
  );
};
export const DiagonalDecoratorBottomLeft = ({ ...props }) => {
  return (
    <Box
      _before={{
        position: "absolute",
        bottom: { base: "-12rem", xxl: "-20rem" },
        right: "0",
        transform: "skewY(-4deg)",
        h: { base: "12rem", xxl: "20rem" },

        w: "100%",
        content: `""`,
        ...props,
      }}
    />
  );
};
export const DiagonalDecoratorBottomRight = ({ ...props }) => {
  return (
    <Box
      _before={{
        position: "absolute",
        bottom: { base: "-6rem", xxl: "-10rem" },
        right: "0",
        transform: "skewY(-4deg)",
        h: { base: "12rem", xxl: "20rem" },

        w: "100%",
        content: `""`,
        ...props,
      }}
    />
  );
};

export const DiagonalDecoratorBottomRightMinus = ({ ...props }) => {
  return (
    <Box
      _before={{
        position: "absolute",
        bottom: { base: "-6rem", xxl: "-10rem" },
        right: "0",
        transform: "skewY(4deg)",
        h: { base: "12rem", xxl: "20rem" },

        w: "100%",
        content: `""`,
        ...props,
      }}
    />
  );
};

export const DiagonalDecoratorTopLeft = ({ ...props }) => {
  return (
    <Box
      _before={{
        position: "absolute",
        top: { base: "-12rem", xxl: "-20rem" },
        right: "0",

        transform: "skewY(-4deg)",
        h: { base: "12rem", xxl: "20rem" },
        w: "100%",
        content: `""`,
        ...props,
      }}
    />
  );
};

export const DiagonalDecoratorTopRight = ({ ...props }) => {
  return (
    <Box
      _before={{
        position: "absolute",
        top: "-0rem",
        right: "0",

        transform: "skewY(-4deg)",
        h: { base: "12rem", xxl: "20rem" },
        w: "100%",
        content: `""`,
        ...props,
      }}
    />
  );
};
