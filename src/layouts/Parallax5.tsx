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
import { bgColor, fgColor } from "../styles/colors";

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
      <StickyNavHeader color={fgColor[colorMode]} position="fixed" />
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
