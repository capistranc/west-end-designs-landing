import Head from "next/head";
import { Layout } from "../layouts/Layout";
import { NextPage } from "next";
import { ContactForm } from "../components/Forms/ContactForm";
import { Background } from "../layouts/Services/styledSectionComponent";
import { StickyNavHeader } from "../components/Header";
import { bgColor, fgColor } from "../theme/colors";
import React, { useRef, useEffect, useState } from "react";

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

export const ContactPage: NextPage = () => {
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
            <b className="thing">Contact Us</b>
          </Heading>
        </Banner>
      </Box>
      <Box position="fixed" top="0" width="100%" zIndex="10"></Box>
      <ContactForm />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default ContactPage;
