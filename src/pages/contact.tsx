import Head from "next/head";
import { Layout } from "../layouts/Layout";
import { NextPage } from "next";
import { ContactForm } from "../components/Forms/ContactForm";
import { Banner } from "../components/Header";
import { theme } from "../theme";
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
  Icon,
} from "@chakra-ui/react";

import { MdHeadsetMic } from "react-icons/md";
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
    <Layout title="Contact Us" description="Contact Form">
      <Box
        bg={theme.bg[colorMode]}
        color={theme.fg[colorMode]}
        position="relative"
      >
        <Box height={{ base: "25vh", md: "50vh" }} top="0" w="100%">
          <Banner h="100%" color="white">
            <Heading fontWeight="600" py="10" fontSize="4xl">
              <b className="thing">Contact Us</b>
            </Heading>
          </Banner>
        </Box>
        <DashedLine position="absolute" top="-5rem" />

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
              <DiamondDecoratorTopDown zIndex="1" bg={theme.bg3[colorMode]} />
              <DiamondDecoratorBottomUp bg={theme.bg[colorMode]} />

              <DashedLine />
              <CallWriteReview py="8rem" />
              <DashedLine />
              <DashedLine />
            </Box>

            <Flex
              justify="space-evenly"
              align="center"
              mt="8"
              direction={["column-reverse", "column-reverse", "row", "row"]}
            >
              <ContactForm
                flex="1"
                maxWidth="52rem"
                minWidth={{ md: "28rem" }}
                color={theme.fg[colorMode]}
                bg={theme.bg4[colorMode]}
              />
              <Box
                maxWidth="28rem"
                textAlign="left"
                my="12"
                align="center"
                // justify="center"
              >
                <Heading variant="h2" mb="4">
                  24/7 Customer Support
                </Heading>
                <Text>
                  At West End Designs, we don't leave anyone hanging. You are
                  always one call or text away from reaching one of us directly.
                  Send us an email and we promise to get back to you as soon as
                  humanly possible.
                </Text>

                <BorderedIconOffset m="2rem auto" icon={MdHeadsetMic} />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default ContactPage;
