import {
  Flex,
  Button,
  Heading,
  Spacer,
  BoxProps,
  Box,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

const AnimatedBanner = ({ text, ...props }) => {
  const texts = ["CONNECT", "INSPIRE", "CREATE"];

  const [bannerText, setBannerText] = useState(texts[0]);
  const [count, setCount] = useState(0);
  const [inTransition, setTransition] = useState(false);

  // function updateText() {
  //   setCount(count + 1);

  //   setTransition(true);
  //   setBannerText(texts[count % texts.length]);
  // }

  // useEffect(() => {
  //   const interval = setInterval(updateText, 3000);
  //   return () => clearInterval(interval);
  // });

  return (
    <Heading as="h1" variant="banner-with-border">
      {bannerText}
    </Heading>
  );
};

export const component1 = (
  <Flex
    h="100%"
    w="100%"
    flexDir="column"
    align="center"
    justify="center"
    color="white"
  >
    <Heading fontFamily="Raleway" fontWeight="900" fontSize="3xl" py="10">
      <b>WE HELP BUSINESSES</b>
    </Heading>
    <AnimatedBanner text="CONNECT" />
    <Heading fontFamily="Raleway" fontSize="3xl" py="5">
      with clients
    </Heading>
    <Flex flexDirection={["column", "column", "row", "row"]}>
      <Button
        px="5px"
        borderRadius="0px"
        variant="solid"
        bg="black"
        color="white"
      >
        LEARN MORE
      </Button>
      <Spacer px="2" />
      <Button
        px="5px"
        borderRadius="0px"
        variant="solid"
        bg="white"
        color="black"
      >
        CONNECT WITH US
      </Button>
    </Flex>
  </Flex>
);
