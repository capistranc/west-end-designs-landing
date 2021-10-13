import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const DiagonalDecoratorTopRightMinus = ({ ...props }) => {
  return (
    <Box
      position="absolute"
      top="-10rem"
      right="0"
      zIndex="1"
      transform="skewY(4deg)"
      h="10rem"
      w="100%"
      {...props}
    />
  );
};

export const DiagonalDecoratorBottomLeftMinus = ({ ...props }) => {
  return (
    <Box
      position="absolute"
      bottom="-10rem"
      right="0"
      transform="skewY(4deg)"
      h="10rem"
      zIndex="1"
      w="100%"
      {...props}
    />
  );
};

export const DiagonalDecoratorTopLeft = ({ ...props }) => {
  return (
    <Box
      position="absolute"
      top="-10rem"
      right="0"
      zIndex="1"
      transform="skewY(-4deg)"
      h="10rem"
      w="100%"
      {...props}
    />
  );
};

export const DiagonalDecoratorTopRight = ({ ...props }) => {
  return (
    <Box
      position="absolute"
      top="-0rem"
      right="0"
      zIndex="1"
      transform="skewY(-4deg)"
      h="10rem"
      w="100%"
      {...props}
    />
  );
};
