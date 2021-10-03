import { Box } from "@chakra-ui/react";

export const DiamondDecorator = ({ ...props }) => {
  return (
    <Box {...props} bg="white">
      <Box
        position="absolute"
        top="-5rem"
        right="0"
        zIndex="1"
        transform="skewY(5deg)"
        bg={props.bg || props.bgColor}
        h="10rem"
        w="100%"
      />
      <Box
        position="absolute"
        top="-5rem"
        right="0"
        zIndex="1"
        bg={props.bg || props.bgColor}
        h="10rem"
        w="100%"
      ></Box>
      <Box
        position="absolute"
        top="-5rem"
        right="0"
        zIndex="1"
        transform="skewY(-5deg)"
        bg={props.bg || props.bgColor}
        h="10rem"
        w="100%"
      />
    </Box>
  );
};
