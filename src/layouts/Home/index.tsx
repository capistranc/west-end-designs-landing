import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Stack,
  Link,
  useColorMode,
  useMediaQuery,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { bgColor, fgColor } from "../../theme/colors";
import { StickyNavHeader } from "../../components/Header";
import { FooterContent } from "../../components/Footer";

import { ContactForm } from "../../components/Forms/ContactForm";
import { SunOverlay } from "../../components/Motion/SunOverlay";
import NextImage from "next/image";

import { Intro } from "./Intro";
import { Prices } from "./Prices";
import { Services } from "./Services";
import { Roadmap } from "./Roadmap";
import { Services2 } from "./Services2";
import { Landing } from "./Landing";
import { AboutUs } from "./AboutUs";
import { Portfolio } from "./Portfolio";
import { Parallax } from "../../components/Wrappers/Parallax";

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.8,
};

export const Home = () => {
  let mobileHeight = 0;

  useEffect(() => {
    mobileHeight =
      window.outerHeight > mobileHeight ? window.outerHeight : mobileHeight;
  });

  const device = useBreakpointValue({
    base: "mobile",
    md: "browser",
    xl: "hq",
  });

  let bgImages = [
    `url('/images/${device || "mobile"}/cliffEdge.jpeg')`,
    `url('/images/${device || "mobile"}/cliffStanding.jpeg')`,
    `url('/images/${device || "mobile"}/cliffBottom.jpeg')`,
  ];

  return (
    <>
      <StickyNavHeader
        id="sticky-nav-bar"
        position="fixed"
        w="100vw"
        color="white"
      />
      <Box position="relative" as="main" color="white" zIndex="1">
        <Parallax
          bgImage={bgImages[0]}
          height={{
            base: mobileHeight > 0 ? mobileHeight : "110vh",
            md: "110vh",
          }}
          backgroundPosition={{ base: "-40px 0", md: "center" }}
          backgroundSize={{ base: "140vh 110vh", md: "cover" }}
          id="section0"
        >
          <SunOverlay />
          <Landing />
        </Parallax>
        <Intro />
        <Services />
        <Roadmap />

        <Parallax
          bgColor="teal.900"
          position="relative"
          data-header="Pricing"
          id="section3"
        >
          <Prices />
        </Parallax>
        <Parallax data-header="Packages" id="section4">
          <Services2 />
        </Parallax>
        <Parallax bgImage={bgImages[2]} data-header="Who we are" id="section2">
          <SunOverlay />
          <AboutUs />
        </Parallax>

        <Parallax bg="gray.800">
          <ContactForm bg="gray.800" color="white" />
        </Parallax>
        <FooterContent bg="gray.900" width="100%" color="white" />
      </Box>
    </>
  );
};
