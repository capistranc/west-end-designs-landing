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
import NextImage from "next/image";

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.8,
};

export const Parallax5 = ({ sections, bgImages }) => {
  const ParallaxBox = ({ children, ...props }) => {
    // if (props.bgImage) {
    //   return (
    //     <Box
    //       className="parallaxSection"
    //       h="100vh"
    //       w="100vw"
    //       // h="100%"
    //       // w="100%"
    //       overflow="hidden"
    //       backgroundAttachment="fixed"
    //       background-repeat="no-repeat"
    //       backgroundPosition="center"
    //       backgroundSize="cover"
    //       positon="relative"
    //       {...props}
    //     >
    //       <Box
    //         position="sticky"
    //         top="0"
    //         bot="0"
    //         left="0"
    //         right="0"
    //         h="100vh"
    //         w="100vw"
    //         objectFit="cover"
    //       >
    //         <NextImage
    //           src={props.bgImage}
    //           layout="fill"
    //           objectFit="cover"
    //           objectPosition="center"
    //         />
    //       </Box>
    //       <Box position="relative">{children}</Box>
    //     </Box>
    //   );
    // }

    return (
      <Box
        position="relative"
        className="parallaxSection"
        overflow="hidden"
        backgroundAttachment="fixed"
        background-repeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        // h="100%"
        // w="100%"
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

  // const { colorMode } = useColorMode();

  return (
    <>
      <StickyNavHeader
        id="sticky-nav-bar"
        position="fixed"
        w="100vw"
        color="white"
      />
      <Box position="relative" as="main" color="white" zIndex="1">
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
          <SunOverlay />
          {sections[0]}
        </ParallaxBox>

        <ParallaxBox
          // bg={bgColor[colorMode]}
          // color={fgColor[colorMode]}
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
          // bg={bgColor[colorMode]}
          // color={fgColor[colorMode]}
          bgColor="gray.600"
          position="relative"
          data-header="Pricing"
          id="section3"
        >
          {sections[3]}
        </ParallaxBox>
        <ParallaxBox bgImage={bgImages[2]} data-header="Packages" id="section4">
          {sections[4]}
        </ParallaxBox>

        <ParallaxBox bg="gray.800">
          <ContactForm bg="gray.800" color="white" />
        </ParallaxBox>
        <FooterContent bg="gray.900" width="100%" color="white" />
      </Box>
    </>
  );
};
