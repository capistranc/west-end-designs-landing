import {
  Flex,
  FlexProps,
  Heading,
  HeadingProps,
  Spacer,
  Button,
  ButtonProps,
  Link,
  Text,
  TextProps,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import NextLink from "next/link";

import { motion, useSpring } from "framer-motion";
import { ModeComment } from "@material-ui/icons";
const MotionFlex = motion<FlexProps>(Flex);
const MotionHeading = motion<HeadingProps>(Heading);
const MotionButton = motion<ButtonProps>(Button);
const MotionText = motion<TextProps>(Text);

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

const containerVariants = {
  init: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      stiffness: 500,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const slideVariants = {
  initLeft: {
    x: "-100vw",
    opacity: 0,
  },
  center: {
    x: 0,
    y: 0,
    opacity: 100,
    transition: {
      delay: 1,
      type: "tween",
    },
  },

  centerSpring: {
    x: 0,
    y: 0,
    opacity: 100,
    transition: {
      delay: 0,
      type: "spring",
    },
  },
  initRight: { x: "15vw", opacity: 0 },
  initBottom: { y: "100vh" },
  initTop: { y: "-100vh" },
};

const growVariants = {
  init: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      delay: 0.75,
      duration: 0.5,
    },
  },
};

export const section1 = () => {
  return (
    <MotionFlex
      variants={containerVariants}
      initial="init"
      animate="visible"
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

      <MotionFlex variants={growVariants} initial="init" animate="visible">
        <AnimatedBanner text="CONNECT" />
      </MotionFlex>
      <MotionText
        variants={slideVariants}
        initial="initBottom"
        animate="center"
        textStyle="h2"
        fontSize="3xl"
        py="5"
      >
        with clients
      </MotionText>
      <Flex flexDirection={["column", "column", "row", "row"]}>
        <MotionButton
          variants={slideVariants}
          initial="initLeft"
          animate="center"
          px="5px"
          borderRadius="0px"
          variant="solid"
          bg="black"
          color="white"
        >
          <NextLink href="#" passHref>
            <Link>LEARN MORE</Link>
          </NextLink>
        </MotionButton>
        <Spacer px="2" />
        <MotionButton
          variants={slideVariants}
          initial="initRight"
          animate="center"
          px="5px"
          borderRadius="0px"
          variant="solid"
          bg="white"
          color="black"
        >
          <NextLink href="#contact-form" passHref>
            <Link>CONNECT WITH US</Link>
          </NextLink>
        </MotionButton>
      </Flex>
    </MotionFlex>
  );
};
