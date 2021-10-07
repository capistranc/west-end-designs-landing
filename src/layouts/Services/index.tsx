import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Center,
  Heading,
  Button,
  Spacer,
  useColorMode,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import { theme } from "../../theme/";
import { StickyNavHeader, WhiteStickyNavHeader } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SixTiles } from "../Home/SixTiles";
import { SvgComp } from "./svgComp";
import { HeadingAndBulletPoints } from "./headingwithbulletpoints";
import { SectionOne } from "./section1";

export const ServicesPage = ({}) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <WhiteStickyNavHeader
        id="sticky-nav-bar"
        position="fixed"
        // color={theme.fg[colorMode]}
        color="gray.900"
      />
      <Flex top="0" as="main" flexDirection="column" backgroundColor="white">
        <Box height={{ base: "35rem", md: "25rem" }}>
          <SectionOne />
        </Box>
        <SixTiles />
        <Box
          h="20rem"
          align="center"
          backgroundColor={theme.bg[colorMode]}
          pl={{ base: "1" }}
          pr={{ base: "1" }}
        >
          <Center h="100%">
            <Text color={theme.fg[colorMode]} fontSize="4xl">
              How All These Services Work For You.
            </Text>
          </Center>
        </Box>

        <SimpleGrid
          display={{ md: "inline-flex" }}
          color={theme.fg[colorMode]}
          height={{ base: "50rem", md: "25rem" }}
          margin="auto"
          justifyContent={{ md: "center" }}
        >
          <HeadingAndBulletPoints
            headingText="Custom designed websites that load fast and are made for mobile
            browsing."
            bulletPointOne="asdf"
            bulletPointTwo="bsdf"
            bulletPointThree="csdf"
            bulletPointFour="dsdf"
          />
          <SvgComp
            img="/images/guyStandingNextToGraph.svg"
            altText="Guy standing next to graph"
          />
        </SimpleGrid>

        {/* <SimpleGrid
          display={{ md: "inline-flex" }}
          color={theme.fg[colorMode]}
          height={{ base: "50rem", md: "25rem" }}
          margin="auto"
          justifyContent={{ md: "center" }}
        >
          {sections[3]}
          {sections[4]}
        </SimpleGrid> */}
        {/* <SimpleGrid
          display={{ md: "inline-flex" }}
          base={{ base: 2, md: 2 }}
          flexDirection={{ md: "row-reverse" }}
        >
          {sections[3]}
          {sections[4]}
        </SimpleGrid> */}
        {/* <Box height={{ md: "150px" }} w="100%"></Box> */}

        {/* <SimpleGrid display={{ md: "inline-flex" }} base={{ base: 2, md: 2 }}>
          {sections[5]}
          {sections[6]}
        </SimpleGrid> */}
        {/* <Box height={{ md: "150px" }} w="100%"></Box> */}
        {/* <SimpleGrid
          display={{ md: "inline-flex" }}
          base={{ base: 2, md: 2 }}
          justifyContent={{ md: "center" }}
        >
          {sections[7]}
          {sections[8]}
          {sections[9]}
        </SimpleGrid> */}
        {/* <Box height="30px" w="100%"></Box> */}
        {/* </SimpleGrid> */}
      </Flex>
    </>
  );
};
