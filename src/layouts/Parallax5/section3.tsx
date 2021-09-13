import {
  Flex,
  Button,
  Heading,
  Box,
  Text,
  Link,
  Icon,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { SlideIn } from "../../components/Motion/SlideIn";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import NextLink from "next/link";

const companies = [
  {
    name: "G&J Flower Distributors",
    location: "Los Angeles, CA",
    imageSource: `/images/profile.jpg`,
    description: `G&J Flower Distributors is the largest privately held construction
  supply company in Seattle, WA for over 35 years`,
  },
  {
    name: "New Veganings",
    location: "Los Angeles, CA",
    imageSource: `/images/profile.jpg`,
    description: `New Vegnaings is the largest privately held construction
  supply company in Seattle, WA for over 35 years`,
  },
  {
    name: "Jupiter Yoga",
    location: "Aliso Viejo, CA",
    imageSource: `/images/profile.jpg`,
    description: `Jupiter Yoga is the largest privately held construction
  supply company in Seattle, WA for over 35 years`,
  },
];

import { TitledAvatar } from "../../components/Cards/TitledAvatar";

export const section3 = () => {
  return (
    <Flex
      h="100%"
      w="100vw"
      p="4"
      position="relative"
      color="white"
      direction="column"
      // bg="linear-gradient(45deg, #6303B1, #ff0099)"
      // transform="skewY(-11deg)"
      _before={
        {
          // position: "absolute",
          // top: 0,
          // right: 0,
          // left: 0,
          // bottom: 0,
          // zIndex: 0,
          // bg: "linear-gradient(10deg, rgba(0.4,0.4,0.4,0.7), rgba(0,0,0,0.2))",
          // transform: "skewY(8deg)",
          // content: `" "`,
        }
      }
    >
      <Heading p="4" mb="3em" variant="h2">
        Who we are
      </Heading>

      <Flex justify="space-around" direction={{ base: "column", md: "row" }}>
        <SlideIn
          width={{ md: "35%" }}
          minHeight={{ base: "24rem", md: "none" }}
          my="1em"
        >
          <Box bg="rgba(0.4,0.4,0.4,0.4)" h="100%" borderRadius="16" p="4">
            <TitledAvatar
              name="Chris Capistran"
              title="Lead Developer/Co-founder"
              src=""
            />
            <Text mt="3em">
              Hi, my name is Chris. I'm a huge design nerd in all areas of
              science and practitioner of Brazilian Jsujitsu.
            </Text>
          </Box>
        </SlideIn>

        <SlideIn
          width={{ md: "35%" }}
          minHeight={{ base: "24rem", md: "none" }}
          from="right"
          my="1em"
        >
          <Box bg="rgba(0.4,0.4,0.4,0.4)" h="100%" borderRadius="16" p="4">
            <TitledAvatar
              name="Michael Esfahani"
              title="Lead Developer/Co-founder"
              src=""
            />
            <Text mt="3em">
              Hey, I'm Michael. I do fish stuff and fish accessories.
            </Text>
          </Box>
        </SlideIn>
      </Flex>
      <Box
        bg="rgba(0.4,0.4,0.4,0.4)"
        // border="2px solid"
        // borderColor="rgba(255,255,255,0.8)"
        borderRadius="0"
        my="2rem"
        alignSelf="center"
        align="center"
        w={{ base: "90%", md: "70%" }}
        position="relative"
      >
        <Icon
          left="0"
          boxSize="2em"
          top="-1em"
          color="blue.500"
          as={ImQuotesLeft}
          position="absolute"
        />
        <Text p="4">
          Together we are West End Designs. An up and coming SEO Web Development
          company based in Orange County. After years of working for large
          companies in the tech industry, we decided that we could use all that
          we have learned to help local businesses around the world compete in
          the SEO game. With the goal of working as we travel and traveling as
          we work, we aim to bring the style of the West End every where we go.
        </Text>

        <NextLink href="/about" passHref>
          <Link
            ml="4"
            textStyle="h1"
            mb="2"
            fontWeight="extrabold"
            color="blue.300"
          >
            LEARN MORE
          </Link>
        </NextLink>
        <Icon
          as={ImQuotesRight}
          position="absolute"
          right="0"
          color="blue.500"
          boxSize="2em"
          bottom="-1em"
        />
      </Box>
    </Flex>
  );
};
