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

import { SlideListItem } from "../../components/Motion";

export const section2 = () => {
  function renderContent() {
    return (
      <Flex direction="column" h="100%" width="100%">
        <Flex
          p="4"
          direction="row"
          justify="flex-start"
          align="flex-start"
          mb="24"
          className="stickyHeader"
        >
          <Heading variant="h2" fontWeight="light" color="white">
            What We Do
          </Heading>
        </Flex>

        <Flex direction="column">
          <Flex justify="center" px="20" p="4" marginBottom="8">
            <Heading color="white" size="3xl">
              SEO Optimized Web Design
            </Heading>
          </Flex>

          <Flex
            p="2" //4 spacing units is 1rem in chakra
            flexDirection={["column", "column", "row", "row"]}
            color="white"
            height="100%"
            justify="space-around"
            align="space-around"
            mb="4em"
          >
            <Flex
              flex="1"
              flexDirection={["column", "column", "row", "row"]}
              p="2em"
              align="center"
              justify="center"
            >
              {/* <AnimatedIconSwap flex="1" p="4" maxWidth="32em" /> */}
              <Box
                width={["100%", "100%", "8px", "8px"]}
                height={["8px", "8px", "100%", "100%"]}
                m="1"
                border="2px solid rgba(255, 255, 255, 0.5)"
              />
            </Flex>
            <Flex flex="2" direction="column">
              <Heading as="h4"> $0 Down, Starting at $150 a month. </Heading>
              <Text py="4" textStyle="subText" color="gray.300" maxWidth="56em">
                We also offer logo and graphic design services via our own
                in-house graphic designer. If you have an existing logo that
                needs a touch up or need a completely new one we can help build
                your business's brand.
              </Text>

              <SimpleGrid
                columns={[1, 1, 2, 2]}
                gap="4"
                mt="12"
                maxWidth="56em"
              >
                <SlideListItem
                  header="Hosting Fees Included"
                  subText={`Hosting fees are included in your monthly payments`}
                />
                <SlideListItem
                  header="24/7 Customer Service"
                  subText={`Call direct. No automated response. Talk to one of us directly.`}
                />
                <SlideListItem
                  header="Unlimited Edits"
                  subText={`We provide unlimited edits to your website anytime. See something you want updated, we will change it that day.`}
                />
                <SlideListItem
                  header={"Web Design & Development"}
                  subText={`Our websites are hand designed from scratch and will be tested for mobile devices, tabets, and pcs.`}
                />
                <SlideListItem
                  header="Google Analytics"
                  subText={`We will install  google analytics for free so you can measure  the traffic on your website.`}
                />
                <SlideListItem
                  header="Citations and Listings"
                  subText={`It's important to have your website backlinked from other websites`}
                />
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
