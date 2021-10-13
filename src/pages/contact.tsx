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
  useColorModeValue,
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
    <Layout
      title="Drop us as line and get in touch"
      description="At West End Designs, we don't leave anyone hanging. You are always one call or text away from reaching one of us directly. Send us an email and we promise to get back to you as soon as humanly possible."
    >
      <Box
        bg={theme.bg[colorMode]}
        color={theme.fg[colorMode]}
        position="relative"
      >
        <Box className="decorator" position="relative" align="center">
          <Box
            className="content"
            align="center"
            position="relative"
            zIndex="10"
          >
            <Box
              position="relative"
              my="0rem"
              bg={theme.bg2[colorMode]}
              color={theme.fg2[colorMode]}
              pt="36"
            >
              <DiamondDecoratorBottomUp bg={theme.bg[colorMode]} />

              {/* <DashedLine strokeColor={theme.bg[colorMode]} />
              <DashedLine strokeColor={theme.bg[colorMode]} /> */}
              <CallWriteReview
                py="2rem"
                borderTop="5px dashed"
                borderColor={theme.bg[colorMode]}
              />

              <DashedLine strokeColor={theme.bg[colorMode]} />
              <Box mb="-4" zIndex="11" position="relative">
                <svg viewBox="0 0 100 100" height="25px" width="25px">
                  <circle
                    cx="50"
                    fill={useColorModeValue(theme.toHex("teal.500"), "white")}
                    cy="50"
                    r="50"
                  />{" "}
                </svg>
              </Box>
              <DashedLine />
              <DashedLine />
            </Box>

            <Flex
              justify="space-evenly"
              align="center"
              mt="20"
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
                <Text as="div">
                  At{" "}
                  <Text as="h1" d="inline">
                    {" "}
                    West End Designs{" "}
                  </Text>
                  , we don't leave anyone hanging. You are always one call or
                  text away from reaching one of us directly. Send us an email
                  and we promise to get back to you as soon as humanly possible.
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
