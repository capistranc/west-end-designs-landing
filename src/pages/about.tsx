import Head from "next/head";
import { Layout } from "../layouts/Layout";
import { NextPage } from "next";
import { ContactForm } from "../components/Forms/ContactForm";
import { Background } from "../layouts/Services/styledSectionComponent";
import { StickyNavHeader } from "../components/Header";
import { bgColor, fgColor } from "../theme/colors";
import React, { useRef, useEffect, useState } from "react";
import { FooterContent } from "../components/Footer";
import Image from "next/image";

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

export const About: NextPage = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <StickyNavHeader
        id="sticky-nav-bar"
        position="fixed"
        color={fgColor[colorMode]}
      />
      <Box height={{ base: "35vh", md: "40vh" }} top="0" w="100%">
        <Banner h="100%" color="white">
          <Heading fontWeight="600" py="10" fontSize="4xl">
            <b className="thing">About The Team</b>
          </Heading>
        </Banner>
      </Box>
      <Box position="fixed" top="0" width="100%" zIndex="10"></Box>
      {/* <Box>The Team</Box> */}
      <Box height="140vh" mt={4}>
        <SimpleGrid
          height="50%"
          w="100%"
          display={{ md: "inline-flex" }}
          base={{ base: 2, md: 2 }}
          //mr={4}
          //ml={4}
          mb={{ base: "4", md: "0" }}
          mt={{ base: "4", md: "0" }}
        >
          <Box
            height={{ base: "50%", md: "100%" }}
            w={{ base: "100%", md: "50%" }}
            mb={{ base: 5, md: 0 }}
          >
            <Flex
              justify="center"
              w="100%"
              height={{ base: "100%", md: "70%" }}
              position="relative"
              top={{ md: "15%" }}
            >
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/chrisCropped.png"
                alt="Picture of developer"
              />
            </Flex>
          </Box>

          <Box w={{ base: "80%", md: "40%" }} margin="auto">
            Chris Capistran is Co-Owner and a developer at West End Designs.
            Chris majored in Math and Computer Science at UCLA and has numerous
            years experience working in tech as a developer.
          </Box>
        </SimpleGrid>
        <SimpleGrid
          height="50%"
          w="100%"
          display={{ md: "inline-flex" }}
          base={{ base: 2, md: 2 }}
          flexDirection={{ md: "row-reverse" }}
          //mr={4}
          //ml={4}
          mb={{ base: "4", md: "0" }}
          mt={{ base: "4", md: "0" }}
        >
          <Box
            height={{ base: "50%", md: "100%" }}
            w={{ base: "100%", md: "50%" }}
            mb={{ base: 5, md: 0 }}
          >
            <Flex
              justify="center"
              w="100%"
              height={{ base: "100%", md: "70%" }}
              position="relative"
              top={{ md: "15%" }}
            >
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/michaelCropped.png"
                alt="Picture of developer"
              />
            </Flex>
          </Box>

          <Box w={{ base: "80%", md: "40%" }} margin="auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Box>
        </SimpleGrid>
      </Box>
      <FooterContent bgColor="gray.700" width="100%" color="white" />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default About;
