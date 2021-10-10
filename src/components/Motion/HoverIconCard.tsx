import { Flex, Box, Heading, Text, Icon } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { MotionFlex, MotionBox } from "./index";
import { hoverGrow } from "./variants";
import { LoadingIcon } from "./LoadingIcon";

export const HoverIconCard = ({ header, subText, CardIcon, ...props }) => {
  return (
    <MotionFlex
      direction="column"
      justify="space-between"
      align="center"
      p="4"
      m="4"
      minHeight="32rem"
      py="8"
      border="4px solid"
      borderColor="rgba(111,111,111,0.3)"
      borderRadius="36"
      initial="rest"
      whileHover="hover"
      animate="rest"
      {...props}
    >
      <Flex direction="column" align="center">
        <LoadingIcon CardIcon={CardIcon} iconVariants={hoverGrow} />
        <Heading py="8" fontSize="3xl" align="center" flexWrap="wrap">
          {header}
        </Heading>
      </Flex>
      <Text mb="4">{subText}</Text>
    </MotionFlex>
  );
};
