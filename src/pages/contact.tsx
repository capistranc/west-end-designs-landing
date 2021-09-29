import Head from "next/head";
import { Layout } from "../layouts/Layout";
import { NextPage } from "next";
import { ContactForm } from "../components/Forms/ContactForm";
import { Background } from "../layouts/Services/styledSectionComponent";
import { StickyNavHeader } from "../components/Header";
import { bgColor, fgColor } from "../theme/colors";
import React, { useRef, useEffect, useState } from "react";
import { FooterContent } from "../components/Footer";

import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Spacer,
  useColorMode,
  SimpleGrid,
} from "@chakra-ui/react";

import NextImage from "next/image";

const Banner = ({ children, ...props }) => {
  const bgImage = "url('/images/cliffEdge2.jpeg')";
  return (
    <Background bgImage={bgImage}>
      <Flex justify="center" align="center" {...props} color="white">
        {children}
      </Flex>
    </Background>
  );
};

export const ContactPage: NextPage = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <StickyNavHeader
        id="sticky-nav-bar"
        position="fixed"
        color={fgColor[colorMode]}
      />
      {/* <Box height={{ base: "35vh", md: "40vh" }} top="0" w="100%">
        <Banner h="100%" color="white">
          <Heading fontWeight="600" py="10" fontSize="4xl">
            <b className="thing">Contact Us</b>
          </Heading>
        </Banner>
      </Box> */}

      <Box position="relative">
        <Box
          position="absolute"
          h="100%"
          w="100%"
          top="0"
          bot="0"
          left="0"
          right="0"
        >
          <NextImage
            src="/images/cliffEdge2.jpeg"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box position="relative">
          <Heading color="red" fontSize="30rem">
            {" "}
            WHAT HAPPEN
          </Heading>
        </Box>
      </Box>
      <ContactForm position="relative" />
      <FooterContent bgColor="gray.700" width="100%" color="white" />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default ContactPage;
