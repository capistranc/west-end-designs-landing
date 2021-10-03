import { Box } from "@chakra-ui/react";

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
