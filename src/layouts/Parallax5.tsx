import React, { useRef, useEffect, useState } from "react";
import { Box, Stack, Flex, Text, Heading } from "@chakra-ui/react";

import { BannerHeader, StickyNavHeader } from "../components/Header";

const BorderedBanner = (text: string) => {
  const BannerText = (text) => {
    return (
      <Heading as="h1" color="white" fontFamily="Oswald">
        {text}
      </Heading>
    );
  };
  return (
    <Flex
      className="BorderedBanner"
      boxSizing="border-box"
      border="1px solid rgba(255, 255, 255, 0.5)"
      justify="center"
      align="center"
      h="100%"
      w="100%"
    >
      {BannerText(text)}
    </Flex>
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
        // minHeight="100vh"
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
      <Stack top="0" as="main" height="100vh" width="100vw">
        <ParallaxBox bgImage={bgImages[0]} minHeight="100%" data-header="white">
          {BorderedBanner("CONNECT")}
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
      </Stack>
    </Box>
  );
};
