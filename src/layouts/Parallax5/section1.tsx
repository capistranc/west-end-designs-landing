import {
  Flex,
  Button,
  Heading,
  Spacer,
  BoxProps,
  Box,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import NextLink from "next/link";

import { motion } from "framer-motion";

const AnimatedBanner = ({ text, ...props }) => {
  const texts = ["CONNECT", "INSPIRE", "CREATE"];

  const [bannerText, setBannerText] = useState(texts[0]);
  const [count, setCount] = useState(0);
  const [inTransition, setTransition] = useState(false);

  return (
    <Heading as="h1" variant="banner-with-border">
      {bannerText}
    </Heading>
  );
};

export const section1 = () => {
  return (
    <Flex
      mt="8"
      mb="8"
      // h="100vh"
      // w="100vw"
      flexDir="column"
      align="center"
      justify="center"
      color="white"
    >
      <Heading fontFamily="Raleway" fontWeight="900" fontSize="3xl" py="10">
        We help businesses
      </Heading>
      <AnimatedBanner text="CONNECT" />
      <Text textStyle="h2" fontSize="3xl" py="5">
        with clients
      </Text>
      <Flex flexDirection={["column", "column", "row", "row"]}>
        <Button
          px="5px"
          borderRadius="0px"
          variant="solid"
          bg="black"
          color="white"
        >
          <NextLink href="#" passHref>
            <Link>LEARN MORE</Link>
          </NextLink>
        </Button>
        <Spacer px="2" />
        <Button
          px="5px"
          borderRadius="0px"
          variant="solid"
          bg="white"
          color="black"
        >
          <NextLink href="#contact-form" passHref>
            <Link>CONNECT WITH US</Link>
          </NextLink>
        </Button>
      </Flex>
    </Flex>
  );
};
