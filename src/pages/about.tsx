import Head from "next/head";
import { Layout } from "../layouts/Layout";
import { NextPage } from "next";
import { ContactForm } from "../components/Forms/ContactForm";
import { Background } from "../layouts/Services/styledSectionComponent";

import React, { useRef, useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import Image from "next/image";

import {
  Flex,
  Box,
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
    <Layout
      title="Hey! nice to meet you"
      description="Chris and Mike started West End Designs to help small and medium sized businesses compete in todays modern world of rapidly advancing technology."
    >
      <Box height={{ base: "20rem", md: "30rem" }} top="0" w="100%" bg="white">
        <Banner h="100%" color="white">
          <Heading fontWeight="600" py="10" fontSize="4xl">
            <b className="thing">About The Team</b>
          </Heading>
        </Banner>
      </Box>
      <Box position="fixed" top="0" width="100%" zIndex="10" bg="white"></Box>
      {/* <Box>The Team</Box> */}
      <Box height="70rem" bg="white">
        <SimpleGrid
          height="50%"
          w="100%"
          display={{ md: "inline-flex" }}
          base={{ base: 2, md: 2 }}
          padding={{ base: 6 }}
          mb={{ base: "0", md: "0" }}
          mt={{ base: "0", md: "0" }}
        >
          <Box
            height={{ base: "70%", md: "100%" }}
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

          <Box w={{ base: "100%", md: "40%" }} margin="auto">
            Chris Capistran is Co-Owner and a developer at West End Designs.
            Chris majored in Math and Computer Science at UCLA and has numerous
            years experience working in tech as a developer.
          </Box>
        </SimpleGrid>
        <SimpleGrid
          // bg="red"
          height="50%"
          w="100%"
          display={{ md: "inline-flex" }}
          base={{ base: 2, md: 2 }}
          padding={{ base: 6 }}
          mb={{ base: "0", md: "0" }}
          mt={{ base: "0", md: "0" }}
        >
          <Box
            height={{ base: "70%", md: "100%" }}
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

          <Box w={{ base: "100%", md: "40%" }} margin="auto">
            Chris Capistran is Co-Owner and a developer at West End Designs.
            Chris majored in Math and Computer Science at UCLA and has numerous
            years experience working in tech as a developer.
          </Box>
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default About;
