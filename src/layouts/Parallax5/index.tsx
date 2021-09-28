import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Flex,
  useColorMode,
  Stack,
  Link,
  useMediaQuery,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { bgColor, fgColor } from "../../theme/colors";
import { StickyNavHeader } from "../../components/Header";
import { FooterContent } from "../../components/Footer";

export * from "./section0";
export * from "./section1";
export * from "./section2";
export * from "./section3";
export * from "./section4";
import { ContactForm } from "../../components/Forms/ContactForm";
import { SunOverlay } from "../../components/Motion/SunOverlay";

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.8,
};

export const Parallax5 = ({ sections, bgImages }) => {
  const ParallaxBox = ({ children, ...props }) => {
    return (
      <Box
        className="parallaxSection"
        overflow="hidden"
        backgroundAttachment="fixed"
        background-repeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        m="auto"
        // height="calc(var(--vh, 1vh))"
        // width="calc(var(--vw, 1vw))"
        {...props}
      >
        {children}
      </Box>
    );
  };

  let mobileHeight = 0;

  useEffect(() => {
    mobileHeight =
      window.outerHeight > mobileHeight ? window.outerHeight : mobileHeight;
  });

  const { colorMode } = useColorMode();

  return (
    <>
      <StickyNavHeader
        id="sticky-nav-bar"
        position="fixed"
        w="100vw"
        color={fgColor[colorMode]}
      />
      <Box top="0" as="main" color="white">
        <ParallaxBox
          bgImage={bgImages[0]}
          height={{
            base: mobileHeight > 0 ? mobileHeight : "100vh",
            md: "100vh",
          }}
          w="100vw"
          backgroundPosition={{ base: "-40px 0", md: "center" }}
          backgroundSize={{ base: "140vh 100vh", md: "cover" }}
          id="section0"
        >
          {sections[0]}
          <SunOverlay />
        </ParallaxBox>

        <ParallaxBox
          bg="gray.800"
          position="relative"
          data-header="What We Do"
          id="section1"
        >
          {sections[1]}
        </ParallaxBox>
        <ParallaxBox
          bgImage={bgImages[1]}
          data-header="Who we are"
          id="section2"
        >
          {sections[2]}
        </ParallaxBox>
        <ParallaxBox
          bg="gray.700"
          position="relative"
          data-header="Pricing"
          id="section3"
        >
          {sections[3]}
        </ParallaxBox>
        <ParallaxBox bgImage={bgImages[2]} data-header="Packages" id="section5">
          {sections[4]}
        </ParallaxBox>

        <ParallaxBox bgColor="gray.800">
          <ContactForm />
        </ParallaxBox>
        <FooterContent bgColor="gray.900" width="100%" color="white" />
      </Box>
    </>
  );
};
