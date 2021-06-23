import React from "react";
import {
  useColorMode,
  Button,
  Flex,
  Text,
  Box,
  Stack,
  Heading,
} from "@chakra-ui/react";

import { StickyNavHeader } from "../components/Header";

export const Parallax5 = ({ components, bgImages }) => {
  const { colorMode } = useColorMode();

  const ParallaxBox = ({ children, bgImage, ...props }) => {
    return (
      <Box
        bgImage={bgImage}
        position="relative"
        backgroundAttachment="fixed"
        backgroundPosition="center"
        background-repeat="no-repeat"
        backgroundSize="cover"
        {...props}
      >
        {children}
      </Box>
    );
  };

  return (
    <>
      <StickyNavHeader position="fixed" />

      {/* <Box
        position="fixed"
        top="0"
        left="0"
        color="white"
        zIndex="999"
        sx={{ "mix-blend-mode": "difference" }}
      >
        <Heading as="h1" color="white">
          TEESTESTTEESTESTTEESTEST
        </Heading>
      </Box> */}
      <Stack as="main" height="100vh" width="100vw">
        <ParallaxBox bgImage={bgImages[0]} minHeight="100%">
          {components[0]}
        </ParallaxBox>
        <Box position="relative"> {components[1]}</Box>
        <ParallaxBox bgImage={bgImages[1]} height="100%">
          {components[2]}
        </ParallaxBox>
        <Box position="relative">{components[3]}</Box>
        <ParallaxBox bgImage={bgImages[2]} height="100%">
          {components[4]}
        </ParallaxBox>
      </Stack>
    </>
  );
};
