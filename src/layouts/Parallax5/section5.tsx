import {
  Flex,
  Button,
  Heading,
  Spacer,
  BoxProps,
  Box,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AdCard = ({ caption, imageSource, subText, ...props }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      border="2px solid rgba(255,255,255,0.2)"
      bg="rgba(0, 0, 0, 0.6)"
      borderRadius="16"
      {...props}
    >
      <Image
        my="4"
        alignSelf="center"
        src="/images/profile.jpg"
        minHeight="10em"
        minWidth="12em"
      />
      <Heading mb="4">{caption}</Heading>
      <Text textStyle="subText" maxWidth="30em">
        {subText}
      </Text>
    </Flex>
  );
};

function loadAdCards() {
  const adCards = [
    {
      caption: "$0 DOWN",
      imageSource: `/images/profile.jpg`,
      subText: `$0 Down to start. We sell our software as a services on a subscription based plan starting from as little as $150 a month.`,
    },
    {
      caption: "NO CONTRACT!",
      imageSource: `/images/profile.jpg`,
      subText: `We don't believe in trapping people in contracts. We believe that the quality of our content should be enough to keep you as a customer. 

      Cancel anytime for any reason.`,
    },
    {
      caption: "UNLIMITED EDITS",
      imageSource: `/images/profile.jpg`,
      subText: `Updates to the content of the website will be quick and easy. We respond to all update requests in a timely manner
      `,
    },
  ];

  return (
    <Flex
      width="100%"
      height="100%"
      flexDirection={["column", "column", "row", "row"]}
      justify="center"
      align="stretch"
    >
      <AdCard p="8" m="4" {...adCards[0]} />
      <AdCard p="8" m="4" {...adCards[1]} />
      <AdCard p="8" m="4" {...adCards[2]} />
    </Flex>
  );
}

const containerVariants = {
  init: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const growVariants = {
  init: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const section5 = () => {
  return (
    <Flex
      // minWidth="100vw"
      h="100%"
      w="100%"
      flexDir="column"
      color="white"
      bg="linear-gradient(rgba(30,30,30,0.1),rgba(30,30,30,0.8))"
    >
      <Flex
        direction="column"
        justify="center"
        align="center"
        w="100%"
        h="100%"
        mv="8rem"
      >
        <Heading as="h1" my="1.25em" variant="banner-with-border-md">
          Prices
        </Heading>

        {loadAdCards()}
      </Flex>
    </Flex>
  );
};
