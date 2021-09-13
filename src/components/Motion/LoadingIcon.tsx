import { Flex, Box, Heading, Text, Icon } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { MotionFlex, MotionBox } from "./index";

export const LoadingIcon = ({ CardIcon, iconVariants, ...props }) => {
  return (
    <Box position="relative" {...props}>
      <MotionBox
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        borderTop="4px solid"
        borderColor="blue.500"
        borderRadius="360"
        animate={{ rotate: 360, borderColor: "#E6E1C5" }}
        transition={{ duration: 6, repeat: Infinity }}
      ></MotionBox>
      <MotionBox variants={iconVariants} h="100%" w="100%">
        <Icon
          zIndex="10"
          border="2px solid gray "
          borderRadius="360"
          as={CardIcon}
          p="8"
          alignSelf="center"
          h="100%"
          w="100%"
        />
      </MotionBox>
    </Box>
  );
};
