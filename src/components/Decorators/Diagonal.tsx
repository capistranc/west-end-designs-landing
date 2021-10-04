import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const DiagonalDecorator = ({ ...props }) => {
  return (
    <Box position="relative">
      <Box
        position="absolute"
        top="-10rem"
        right="0"
        zIndex="1"
        transform="skewY(5deg)"
        h="10rem"
        w="100%"
        {...props}
      />
    </Box>
  );
};

export const DiagonalDecorator2 = ({ ...props }) => {
  return (
    <Box position="relative">
      <Box
        position="absolute"
        bottom="-10rem"
        right="0"
        zIndex="1"
        transform="skewY(-5deg)"
        bg={useColorModeValue("blue.50", "teal.900")}
        h="10rem"
        w="100%"
      />
      <Box
        position="absolute"
        bottom="-0rem"
        right="0"
        zIndex="1"
        transform="skewY(-5deg)"
        backgroundColor={useColorModeValue("blue.400", "teal.800")}
        h="10rem"
        w="100%"
      />
    </Box>
  );
};
