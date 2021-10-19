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

import { FormSupport } from "../layouts/Contact/FormSupport";
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
              pt="24"
            >
              <Box align="left" p="4">
                <Heading
                  color={theme.heading[colorMode]}
                  variant="h2"
                  as="div"
                  fontSize="5xl"
                  d="inline"
                >
                  Connect{" "}
                </Heading>
                <Heading
                  color={theme.fg2[colorMode]}
                  variant="h2"
                  as="div"
                  fontSize="5xl"
                  d="inline"
                >
                  with us today
                </Heading>
              </Box>
              <DiamondDecoratorBottomUp bg={theme.bg[colorMode]} />

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

            <FormSupport
              color={theme.fg[colorMode]}
              bg={theme.bg4[colorMode]}
            />
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
