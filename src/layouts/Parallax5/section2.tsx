import {
  Flex,
  Heading,
  Box,
  Text,
  Link,
  Spacer,
  Image,
  SimpleGrid,
  SimpleGridProps,
  Icon,
  FlexProps,
  BoxProps,
  IconProps,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import { AnimatedIconSwap } from "../../components/Cards/AnimatedIconSwap";
import { MoneyOff } from "@material-ui/icons";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useOnScreen } from "../../lib/hooks";
import { AnimatedCarousel } from "../../components/Cards/AnimatedCarousel";
import { SlideListItem } from "../../components/Motion";

export const section2 = () => {
  const listData = [
    {
      header: "Hosting Fees Included",
      subText: `Hosting fees are included in your monthly payments`,
    },
    {
      header: "24/7 Customer Service",
      subText: `Call direct. No automated response. Talk to one of us directly.`,
    },
    {
      header: "Unlimited Edits",
      subText: `We provide unlimited edits to your website anytime. See something you want updated, we will change it that day.`,
    },
    {
      header: "Web Design & Development",
      subText: `Our websites are hand designed from scratch and will be tested for mobile devices, tabets, and pcs.`,
    },
    {
      header: "Google Analytics",
      subText: `We will install  google analytics for free so you can measure  the traffic on your website.`,
    },
    {
      header: "Citations and Listings",
      subText: `It's important to have your website backlinked from other websites`,
    },
  ];

  function renderContent() {
    return (
      <Flex direction="column" h="100%" w="100%" mb="8">
        <Flex
          p="4"
          direction="row"
          justify="flex-start"
          align="flex-start"
          mb="4rem"
          className="stickyHeader"
          h="100%"
          w="100%"
        >
          <Heading variant="h2" fontWeight="light" color="white">
            What We Do
          </Heading>
        </Flex>

        <Flex direction="column" h="100%" w="100%">
          <Flex justify="center" px="20" p="4" marginBottom="8">
            <Heading color="white" size="3xl">
              SEO Optimized Web Design
            </Heading>
          </Flex>

          <Flex
            p="2" //4 spacing units is 1rem in chakra
            flexDirection={["column", "column", "row", "row"]}
            color="white"
            // h="100%"
            // w="100%"
            justify="space-around"
            align="space-around"
          >
            <Flex
              flex="1"
              flexDirection={["column", "column", "row", "row"]}
              p="2em"
              align="center"
              justify="center"
            >
              <AnimatedCarousel
                minHeight="36em"
                flex="1"
                p="4"
                maxWidth="32em"
              />
            </Flex>

            <Flex
              flex="2"
              direction="column"
              borderLeft={{
                base: "none",
                md: "2px solid rgba(255,255,255, 0.5)",
              }}
              borderTop={{
                base: "2px solid rgba(255,255,255, 0.5)",
                md: "none",
              }}
              pl="8"
              pt="8"
            >
              <Heading as="h4"> $0 Down, Starting at $150 a month. </Heading>
              <Text py="4" textStyle="subText" color="gray.300" maxWidth="56em">
                We also offer logo and graphic design services via our own
                in-house graphic designer. If you have an existing logo that
                needs a touch up or need a completely new one we can help build
                your business's brand.
              </Text>

              <SimpleGrid columns={[1, 1, 2, 2]} gap="4" mt="8" maxWidth="56em">
                {listData.map((item, i) => {
                  return <SlideListItem {...item} key={i} delay={i} />;
                })}
              </SimpleGrid>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  }

  return (
    <Box bg="#1E1E1E" minHeight="100vh" height="100%" width="100%">
      {renderContent()}
    </Box>
  );
};
