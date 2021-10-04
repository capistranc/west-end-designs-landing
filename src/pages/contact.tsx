import Head from "next/head";
import { Layout } from "../layouts/Layout";
import { NextPage } from "next";
import { ContactForm } from "../components/Forms/ContactForm";
import { Background } from "../layouts/Services/styledSectionComponent";
import { StickyNavHeader } from "../components/Header";
import { theme } from "../theme";
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
  Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { MdHeadsetMic } from "react-icons/md";

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

import {
  DiamondDecoratorTopDown,
  DiamondDecoratorBottomUp,
} from "../components/Decorators";
import { BorderedIconOffset } from "../components/Icons/BorderedIconOffset";
import { CallWriteReview } from "../layouts/Contact/CallWriteReview";
import { DashedLine } from "../components/svg/DashedLine";

export const ContactPage: NextPage = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={theme.bg[colorMode]}
      color={theme.fg[colorMode]}
      position="relative"
    >
      <StickyNavHeader id="sticky-nav-bar" position="fixed" color="white" />
      <Box height={{ base: "25vh", md: "40vh" }} top="0" w="100%">
        <Banner h="100%" color="white">
          <Heading fontWeight="600" py="10" fontSize="4xl">
            <b className="thing">Contact Us</b>
          </Heading>
        </Banner>
      </Box>

      <Box className="decorator" position="relative" align="center">
        <Box
          className="content"
          align="center"
          position="relative"
          py="1rem"
          zIndex="10"
        >
          <Box
            position="relative"
            my="0rem"
            bg={theme.bg2[colorMode]}
            color={theme.fg2[colorMode]}
          >
            <DiamondDecoratorTopDown bg={theme.bg[colorMode]} />
            <DiamondDecoratorBottomUp bg={theme.bg[colorMode]} />
            {/* <DashedLine /> */}
            <DashedLine />
            <CallWriteReview py="8rem" />
            <DashedLine />
            <DashedLine />
          </Box>

          <Flex
            justify="space-evenly"
            align="center"
            mt="8"
            direction={["column", "column", "row-reverse", "row-reverse"]}
          >
            <Box
              maxWidth="20rem"
              textAlign="left"
              my="12"
              align="center"
              // justify="center"
            >
              <Heading variant="h2">24/7 Customer Support</Heading>
              <Text>
                At West End Designs, we don't leave anyone hanging. You are
                always one call or text away from reaching one of us directly.
                Send us an email and we promise to get back to you as soon as
                humanly possible.
              </Text>

              <BorderedIconOffset m="2rem auto" icon={MdHeadsetMic} />
            </Box>
            <ContactForm
              flex="1"
              d="inline-block"
              maxWidth="52rem"
              color={theme.fg[colorMode]}
              bg={theme.bg4[colorMode]}
            />
          </Flex>
        </Box>
      </Box>
      <FooterContent
        color={theme.fg2[colorMode]}
        bg={theme.bg2[colorMode]}
        width="100%"
      />
    </Box>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default ContactPage;
