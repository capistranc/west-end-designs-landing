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

import { bgColor, fgColor } from "../../theme/colors";
import { StickyNavHeader } from "../../components/Header";
import { FooterContent } from "../../components/Footer";

export * from "./section1";
export * from "./section2";
export * from "./section3";
export * from "./section4";
export * from "./section5";
import { ContactUs } from "./ContactUs";
export const Parallax5 = ({ sections, bgImages }) => {
  const ParallaxBox = ({ children, ...props }) => {
    function renderChild() {
      if (props.bgImage) {
        //If bgImage, render diagonal lines overlay
        return (
          <Box
          // backgroundImage="url('/images/diagonalLine.png')"
          >
            <Box position="relative" h="100%" w="100%">
              {children}
            </Box>
          </Box>
        );
      } else {
        return <>{children}</>;
      }
    }
    return (
      <Flex
        className="parallaxSection"
        // position="relative"
        // display="flex"
        backgroundAttachment="fixed"
        backgroundPosition="center"
        background-repeat="no-repeat"
        backgroundSize="cover"
        minHeight="100vh"
        minWidth="100vw"
        height="100%"
        width="100%"
        align="center"
        justify="center"
        // height="calc(var(--vh, 1vh))"
        // width="calc(var(--vw, 1vw))"
        {...props}
      >
        {renderChild()}
      </Flex>
    );
  };

  const { colorMode } = useColorMode();
  return (
    <>
      <StickyNavHeader
        id="sticky-nav-bar"
        // bg={bgColor[colorMode]}
        position="fixed"
        color={fgColor[colorMode]}
      />
      <Flex
        top="0"
        as="main"
        direction="column"
        align="center"
        height="100%"
        width="100%"
      >
        <ParallaxBox bgImage={bgImages[0]}>{sections[0]}</ParallaxBox>
        <ParallaxBox position="relative">{sections[1]}</ParallaxBox>
        <ParallaxBox bgImage={bgImages[1]}>{sections[2]}</ParallaxBox>
        <ParallaxBox position="relative">{sections[3]}</ParallaxBox>
        <ParallaxBox bgImage={bgImages[2]}>{sections[4]}</ParallaxBox>

        <ContactUs />
        <FooterContent bgColor="black" width="100%" color="white" />
      </Flex>
    </>
  );
};
