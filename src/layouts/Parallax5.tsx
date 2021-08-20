import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Stack,
  Flex,
  Text,
  Heading,
  Button,
  Spacer,
} from "@chakra-ui/react";

import { BannerHeader, StickyNavHeader } from "../components/Header";
import { FooterContent } from "../components/Footer";

const AnimatedBanner = ({ text, ...props }) => {
  const texts = ["CONNECT", "INSPIRE", "CREATE"];
  return (
    <Heading as="h1" variant="banner-with-border">
      {text}
    </Heading>
  );
};

export const Parallax5 = ({ components, bgImages }) => {
  const ParallaxBox = ({ children, ...props }) => {
    function renderChild() {
      if (props.bgImage) {
        //If bgImage, render diagonal lines overlay
        return (
          <Box
            height="100%"
            width="100%"
            backgroundImage="url('/images/diagonalLine.png')"
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
      <Box
        className="parallaxSection"
        position="relative"
        backgroundAttachment="fixed"
        backgroundPosition="center"
        background-repeat="no-repeat"
        backgroundSize="cover"
        // height="100vh"
        // width="100vw"
        height="calc(var(--vh, 1vh))"
        width="calc(var(--vw, 1vw))"
        // height="var(--vh)"
        // width="var(--vw)"
        // height={window.innerHeight}
        // width={window.innerWidth}
        {...props}
      >
        {renderChild()}
      </Box>
    );
  };

  const [headerColor, setHeaderColor] = useState("white");

  return (
    <Box>
      <StickyNavHeader
        position="fixed"
        color={headerColor}
        id="sticky-nav-bar"
      />
      <Stack
        top="0"
        as="main"
        // height="calc(var(--vh, 1vh) * 100)"
        // width="calc(var(--vw, 1vw) * 100)"
      >
        <ParallaxBox bgImage={bgImages[0]} minHeight="100%" minWidth="100%">
          <Flex
            h="100%"
            w="100%"
            flexDir="column"
            align="center"
            justify="center"
            color="white"
          >
            <Heading
              fontFamily="Raleway"
              fontWeight="900"
              fontSize="3xl"
              py="10"
            >
              <b>WE HELP BUSINESSES</b>
            </Heading>
            <AnimatedBanner text="CONNECT" />
            <Heading fontFamily="Raleway" fontSize="3xl" py="5">
              with clients
            </Heading>
            <Flex flexDirection={["column", "column", "row", "row"]}>
              <Button
                px="5px"
                borderRadius="0px"
                variant="solid"
                bg="black"
                color="white"
              >
                LEARN MORE
              </Button>
              <Spacer px="2" />
              <Button
                px="5px"
                borderRadius="0px"
                variant="solid"
                bg="white"
                color="black"
              >
                CONNECT WITH US
              </Button>
            </Flex>
          </Flex>
        </ParallaxBox>
        <ParallaxBox position="relative" data-header="black">
          {components[1]}
        </ParallaxBox>
        <ParallaxBox bgImage={bgImages[1]} height="100%" data-header="white">
          {components[2]}
        </ParallaxBox>
        <ParallaxBox position="relative" data-header="black">
          {components[3]}
        </ParallaxBox>
        <ParallaxBox bgImage={bgImages[2]} height="100%" data-header="white">
          {components[4]}
        </ParallaxBox>
        <FooterContent bgColor="gray.300" color="white" />
      </Stack>
    </Box>
  );
};
