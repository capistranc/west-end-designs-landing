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

export * from "./section1";
export * from "./section2";
export * from "./section3";
export * from "./section4";
export * from "./section5";
import { ContactForm } from "../../components/Forms/ContactForm";
import { MotionBox } from "../../components/Motion/";

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
        // position="relative"
        // display="flex"
        overflow="hidden"
        backgroundAttachment="fixed"
        background-repeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        // height="100%"
        // width="100%"
        // align="center"
        // justify="center"
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

  const overlayVariant = {
    hidden: {
      bg: "rgba(0,0,0,0)",
      opacity: 0,
      scale: 10,
      rotateZ: -90,
    },
    show: (colorMode) => {
      if (colorMode === "light") {
        return {
          opacity: 0.7,
          scale: 1,
          rotateZ: 0,
          transition: {
            type: "tween",
            duration: 2,
          },
        };
      } else if (colorMode === "dark") {
        return {
          opacity: 0.7,
          scale: 1,
          rotateZ: 0,
          bg: "rgba(9,59,72,1)",
          transition: {
            type: "tween",
            duration: 2,
          },
        };
      }
    },
  };

  const { colorMode } = useColorMode();

  const overlayProps = {
    light: {
      bg: "url('/images/sunOverlay.png'), rgba(0.4,0.4,0.4,0.2)",
      sx: {
        mixBlendMode: "hard-light",
      },
    },
    dark: {
      bg: "url('/images/sunOverlay.png'), rgba(0.4,0.4,0.4,0.2)",
      sx: {
        mixBlendMode: "color-burn",
      },
      _before: {
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        overflow: "hidden",
        height: "100%",
        width: "100%",
        content: `""`,
        opacity: "70%",
        bgColor: "rgba(9,59,72,1)",
      },
    },
  };

  const OverlayBox = () => (
    <MotionBox
      position="absolute"
      top="0"
      overflow="hidden"
      bottom="0"
      left="0"
      right="0"
      h="100vh"
      w="100vw"
      zIndex="1"
      variants={overlayVariant}
      custom={colorMode}
      opacity="0"
      initial="hidden"
      animate="show"
      exit={overlayVariant.hidden}
      bg="url('/images/sunOverlay.png'), rgba(0.4,0.4,0.4,0.2)"
      {...overlayProps[colorMode]}
      background-repeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="right"
    />
  );

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
          <OverlayBox />
          {sections[0]}
        </ParallaxBox>
        {/* </Box> */}
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
