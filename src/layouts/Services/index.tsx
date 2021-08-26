import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";

import { bgColor, fgColor } from "../../theme/colors";
import { StickyNavHeader } from "../../components/Header";
import { FooterContent } from "../../components/Footer";

export * from "./section1";
export * from "./section2";
export * from "./section3";
export * from "./section4";
export * from "./section5";

export const Services5 = ({ sections }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <StickyNavHeader
        id="sticky-nav-bar"
        // bg={bgColor[colorMode]}
        position="sticky"
        color={fgColor[colorMode]}
      />
      <Flex top="0" as="main" flexDirection="column" backgroundColor="white">
        {sections[0]}
        {sections[1]}
        {sections[2]}
        {sections[3]}
        {sections[4]}
        <FooterContent bgColor="gray.700" width="100%" color="white" />
      </Flex>
    </>
  );
};
