import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Stack,
  Flex,
  Text,
  Heading,
  Button,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";

import { bgColor, fgColor } from "../theme/colors";
import { StickyNavHeader } from "../components/Header";
import { FooterContent } from "../components/Footer";

export const Parallax5 = ({ components, bgImages }) => {
  const ParallaxBox = ({ children, ...props }) => {
    function renderChild() {
      if (props.bgImage) {
        //If bgImage, render diagonal lines overlay
        return (
          // <Box
          //   height="100%"
          //   width="100%"
          //   backgroundImage="url('/images/diagonalLine.png')"
          // >
          <Box position="relative" h="100%" w="100%">
            {children}
          </Box>
          // </Box>
        );
      } else {
        return <>{children}</>;
      }
    }
    return (
      <Box
        className="parallaxSection"
        // position="relative"
        backgroundAttachment="fixed"
        backgroundPosition="center"
        background-repeat="no-repeat"
        backgroundSize="cover"
        height="calc(var(--vh, 1vh))"
        width="calc(var(--vw, 1vw))"
        {...props}
      >
        {renderChild()}
      </Box>
    );
  };

  const { colorMode } = useColorMode();
  return (
    <Box>
      <StickyNavHeader
        id="sticky-nav-bar"
        // bg={bgColor[colorMode]}
        position="fixed"
        color={fgColor[colorMode]}
      />
      <Stack top="0" as="main">
        <ParallaxBox bgImage={bgImages[0]}>{components[0]}</ParallaxBox>
        <ParallaxBox position="relative">{components[1]}</ParallaxBox>
        <ParallaxBox bgImage={bgImages[1]}>{components[2]}</ParallaxBox>
        <ParallaxBox position="relative">{components[3]}</ParallaxBox>
        <ParallaxBox bgImage={bgImages[2]}>{components[4]}</ParallaxBox>
        <FooterContent bgColor="gray.700" width="100%" color="white" />
      </Stack>
    </Box>
  );
};
