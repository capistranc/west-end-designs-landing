import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Spacer,
  useColorMode,
  SimpleGrid,
} from "@chakra-ui/react";

import { theme } from "../../theme/";
import { StickyNavHeader } from "../../components/Header";

export * from "./section1";
export * from "./section2";
export * from "./section3";
export * from "./section4";
export * from "./section5";
export * from "./section6";
export * from "./section7";
export * from "./section8";
export * from "./section9";
export * from "./section10";

export const Services5 = ({ sections }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex top="0" as="main" flexDirection="column" backgroundColor="white">
        {sections[0]}
        <Box height={{ md: "150px" }} w="100%"></Box>

        <SimpleGrid display={{ md: "inline-flex" }} base={{ base: 2, md: 2 }}>
          {sections[1]}
          {sections[2]}
        </SimpleGrid>
        <Box height={{ md: "150px" }} w="100%"></Box>

        <SimpleGrid
          display={{ md: "inline-flex" }}
          base={{ base: 2, md: 2 }}
          flexDirection={{ md: "row-reverse" }}
        >
          {sections[3]}
          {sections[4]}
        </SimpleGrid>
        <Box height={{ md: "150px" }} w="100%"></Box>

        <SimpleGrid display={{ md: "inline-flex" }} base={{ base: 2, md: 2 }}>
          {sections[5]}
          {sections[6]}
        </SimpleGrid>
        <Box height={{ md: "150px" }} w="100%"></Box>
        <SimpleGrid
          display={{ md: "inline-flex" }}
          base={{ base: 2, md: 2 }}
          justifyContent={{ md: "center" }}
        >
          {sections[7]}
          {sections[8]}
          {sections[9]}
        </SimpleGrid>
        <Box height="30px" w="100%"></Box>
      </Flex>
    </>
  );
};
