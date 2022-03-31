import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const DiagonalDecoratorTopRightMinus = ({ ...props }) => {
  return (
    <Box
      _before={{
        position: "absolute",
        top: "-12rem",
        right: "0",

        transform: "skewY(4deg)",
        h: "12rem",
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
        bottom: "-12rem",
        right: "0",
        transform: "skewY(4deg)",
        h: "12rem",

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
        bottom: "-6rem",
        right: "0",
        transform: "skewY(-4deg)",
        h: "12rem",

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
        top: "-12rem",
        right: "0",

        transform: "skewY(-4deg)",
        h: "12.1rem",
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
        h: "12rem",
        w: "100%",
        content: `""`,
        ...props,
      }}
    />
  );
};
