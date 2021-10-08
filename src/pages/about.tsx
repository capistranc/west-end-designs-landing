import Head from "next/head";
import { Layout } from "../layouts/Layout";
import { NextPage } from "next";
import { ContactForm } from "../components/Forms/ContactForm";
import { StickyNavHeader, WhiteStickyNavHeader } from "../components/Header";
import { BannerSectionAbout } from "../layouts/About/bannersectionabout";
import { theme } from "../theme";

import React, { useRef, useEffect, useState } from "react";

import {
  Flex,
  Box,
  Text,
  Center,
  Image,
  Heading,
  Button,
  Spacer,
  useColorMode,
  SimpleGrid,
} from "@chakra-ui/react";

export const About: NextPage = ({}) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <WhiteStickyNavHeader
        id="sticky-nav-bar"
        position="fixed"
        // color={theme.fg[colorMode]}
        color="gray.900"
      />
      <Flex top="0" as="main" flexDirection="column" backgroundColor="white">
        <Box height={{ base: "40rem", md: "25rem" }}>
          <BannerSectionAbout />
        </Box>

        <Box
          w="100%"
          h={{ base: "40rem", md: "30rem" }}
          backgroundColor="rgba(111,157,171, .05)"
        >
          <Flex w="100%" h="100%" align="center">
            <Text
              h="40%"
              w="70%"
              position="relative"
              // top="50%"
              // transform="translateY(-50%)"
              color="gray.700"
              margin="auto"
              fontWeight="bold"
              // bg="red"
            >
              At West End Designs, we believe that you deserve a well designed
              website that is affordable. A more valuable way where customers
              are earned rather than bought. We're obsessively passionate about
              it, and our mission is to help people achieve it. We focus on
              search engine optimization. It's one of the least understood and
              least transparent aspects of great marketing, and we see that as
              an opportunity. We're excited to simplify SEO for everyone through
              our software, education, and community.
            </Text>
          </Flex>
        </Box>
        <Box
          w="100%"
          h={{ base: "40rem", md: "30rem" }}
          backgroundColor="rgba(111,157,171, .3)"
        ></Box>
        <Box
          w="100%"
          h={{ base: "40rem", md: "30rem" }}
          backgroundColor="rgba(111,157,171, .05)"
        ></Box>
        <Box
          w="100%"
          h={{ base: "40rem", md: "30rem" }}
          backgroundColor="rgba(111,157,171, .3)"
        >
          {/* <Image
            width={{ base: "20rem", md: "20rem" }}
            src="/images/swirlyoval.svg"
            alt="Swirly oval svg"
            position="relative"
            // top="50%"
            // transform="translateY(-50%)"
            margin="auto"
          /> */}
          <Box
            backgroundImage="/images/swirlyoval.svg"
            h="50%"
            w="50%"
            background-repeat="no-repeat"
            background-size="contain"
          ></Box>
        </Box>
      </Flex>
    </>
  );
};

export default About;
