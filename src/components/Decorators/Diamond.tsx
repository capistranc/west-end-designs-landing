import { Box } from "@chakra-ui/react";

export const DiamondDecoratorTopDown = ({ ...props }) => {
  return (
    <Box {...props}>
      <Box
        position="absolute"
        top="-5rem"
        right="0"
        zIndex="1"
        transform="skewY(4deg)"
        bg={props.bg || props.bgColor}
        {...props}
        h="10rem"
        w="100%"
      />
      <Box
        position="absolute"
        top="-5rem"
        right="0"
        zIndex="1"
        bg={props.bg || props.bgColor}
        {...props}
        h="10rem"
        w="100%"
      ></Box>
      <Box
        position="absolute"
        top="-5rem"
        right="0"
        zIndex="1"
        transform="skewY(-4deg)"
        bg={props.bg || props.bgColor}
        {...props}
        h="10rem"
        w="100%"
      />
    </Box>
  );
};
export const DiamondDecoratorBottomDown = ({ ...props }) => {
  return (
    <>
      <Box
        position="absolute"
        bottom="-5rem"
        left="0"
        transform="skewY(4deg)"
        h="15rem"
        w="50%"
        zIndex="1"
        {...props}
      />
      <Box
        position="absolute"
        bottom="-5rem"
        right="0"
        transform="skewY(-4deg)"
        h="15rem"
        zIndex="1"
        w="50%"
        {...props}
      />
    </>
  );
};

export const DiamondDecoratorBottomUp = ({ ...props }) => {
  return (
    <>
      <Box
        position="absolute"
        bottom="0rem"
        right="0"
        zIndex="1"
        transform="skewY(4deg)"
        bg={props.bg || props.bgColor}
        h="10rem"
        w="100%"
      />
      <Box
        position="absolute"
        bottom="0rem"
        right="0"
        zIndex="1"
        transform="skewY(-4deg)"
        bg={props.bg || props.bgColor}
        h="10rem"
        w="100%"
      />
      <Box
        position="absolute"
        bottom="0rem"
        right="0"
        zIndex="1"
        bg={props.bg || props.bgColor}
        {...props}
        h="10rem"
        w="100%"
      ></Box>
    </>
  );
};
