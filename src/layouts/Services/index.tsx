import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Center,
  Image,
  Heading,
  Button,
  Spacer,
  useColorMode,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import { Layout } from "..";
import { theme } from "../../theme/";
import { ServicesSixTiles } from "./servicessixtiles";
import { SvgComp } from "./svgComp";
import { HeadingAndBulletPoints } from "./headingwithbulletpoints";
import { BannerSectionServices } from "./bannersection";
import { ServicesPrices } from "./servicesprices";

export const ServicesPage = ({}) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Layout title="Services" description="">
        <Flex top="0" as="main" flexDirection="column" backgroundColor="white">
          <Box height={{ base: "40rem", md: "25rem" }}>
            <BannerSectionServices />
          </Box>
          <ServicesSixTiles />
          <Box
            h="20rem"
            align="center"
            backgroundColor={theme.bg[colorMode]}
            pl={{ base: "1" }}
            pr={{ base: "1" }}
          >
            <Center h="100%">
              <Text
                color={theme.fg[colorMode]}
                fontSize="5xl"
                fontWeight="bold"
              >
                How All These Services Work For You.
              </Text>
            </Center>
          </Box>
          <Box
            backgroundColor={theme.bg[colorMode]}
            height={{ base: "180rem", md: "200rem" }}
          >
            <Flex
              display={{ base: "none", md: "flex" }}
              w="100%"
              h="20rem"
              mb={20}
              id="website-design"
            >
              <Image
                minWidth="20%"
                maxWidth="40%"
                src="/images/leftSvgLines.svg"
                alt="Lines point to the left."
                // pl={20}
                // mb={20}
                ml="auto"
              />
              <Box width="50%"></Box>
            </Flex>
            <SimpleGrid
              display={{ md: "inline-flex" }}
              color={theme.fg[colorMode]}
              height={{ base: "50rem", md: "35rem" }}
              margin="auto"
              justifyContent={{ md: "center" }}
              flexDirection={{ md: "row-reverse" }}
              // mb={20}
            >
              <SvgComp
                img="/images/guyStandingNextToGraph.svg"
                altText="Guy standing next to graph"
                paddingBottom={20}
              />
              <HeadingAndBulletPoints
                headingText="Custom designed websites that load fast and are made for mobile
            browsing."
                bulletPointOne="When we create your website, we Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                bulletPointTwo="When we create your website, we Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                bulletPointThree="When we create your website, we Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                bulletPointFour="When we create your website, we Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
              />
            </SimpleGrid>
            <Flex
              display={{ base: "none", md: "flex" }}
              w="100%"
              h="20rem"
              mb={20}
              id="seo"
            >
              <Box width="50%"></Box>

              <Image
                minWidth="20%"
                maxWidth="40%"
                src="/images/rightSvgLines.svg"
                alt="Lines point to the right."
                // pr={20}
                // mb={20}
                mr="auto"
              />
            </Flex>
            <SimpleGrid
              display={{ md: "inline-flex" }}
              color={theme.fg[colorMode]}
              height={{ base: "50rem", md: "35rem" }}
              margin="auto"
              justifyContent={{ md: "center" }}
            >
              <SvgComp
                img="/images/guyWithClipboard.svg"
                altText="Guy hitting check marks"
              />
              <HeadingAndBulletPoints
                headingText="Search Engine Optimized content on your website."
                bulletPointOne="When we create your website, we Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                bulletPointTwo="When we create your website, we Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                bulletPointThree="When we create your website, we Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                bulletPointFour="When we create your website, we Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
              />
            </SimpleGrid>
            <Flex
              display={{ base: "none", md: "flex" }}
              w="100%"
              h="20rem"
              mb={20}
              id="unlimited-edits"
            >
              <Image
                minWidth="20%"
                maxWidth="40%"
                src="/images/leftSvgLines.svg"
                alt="Lines point to the left."
                // pl={20}
                // mb={20}
                ml="auto"
              />
              <Box width="50%"></Box>
            </Flex>
            <SimpleGrid
              display={{ md: "inline-flex" }}
              color={theme.fg[colorMode]}
              height={{ base: "50rem", md: "35rem" }}
              margin="auto"
              justifyContent={{ md: "center" }}
              flexDirection={{ md: "row-reverse" }}
            >
              <SvgComp
                img="/images/undraw_Job_hunt_re_q203.svg"
                altText="Guy hitting check marks"
                paddingTop={20}
              />
              <HeadingAndBulletPoints
                headingText="Unlimited edits and updating your Google Business Profile..Custom designed websites that load fast and are made for mobile
            browsing."
                bulletPointOne="When we create your website, we Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                bulletPointTwo="When we create your website, we Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                bulletPointThree="When we create your website, we Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                bulletPointFour="When we create your website, we Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
              />
            </SimpleGrid>
          </Box>

          <ServicesPrices />
        </Flex>
      </Layout>
    </>
  );
};
