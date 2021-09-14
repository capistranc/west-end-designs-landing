import {
  Flex,
  Spacer,
  Box,
  Heading,
  Text,
  BoxProps,
  FlexProps,
  Icon,
  IconProps,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { MotionBox, MotionFlex } from ".";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { LoadingIcon } from "./LoadingIcon";

import { hoverGrow } from "./variants";

const containerVariant = {
  hidden: (direction) => ({
    opacity: 0,
    rotateY: direction === 1 ? "-180" : "180",
  }),
  visible: (direction) => ({
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.3,
    },
  }),
};

const buttonHover = {
  rest: {
    backgroundColor: "rgba(0,0,0,0)",
    opacity: 0.2,
    scale: 0.9,
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    backgroundColor: "#333333",
    opacity: 0.6,
    scale: 0.5,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const hoverLeft = {
  rest: {
    x: 0,
  },
  hover: {
    x: -30,
    transition: { duration: 1 },
  },
};

const hoverRight = {
  rest: {
    x: 0,
  },
  hover: {
    x: 30,
    transition: { duration: 1 },
  },
};

export const SwitchableCard = ({ header, subText, CardIcon, ...props }) => {
  return (
    <MotionFlex
      direction="column"
      justify="space-between"
      align="center"
      p="4"
      m="4"
      minHeight="32rem"
      py="8"
      border="4px solid"
      borderColor="rgba(111,111,111,0.3)"
      borderRadius="36"
      initial="rest"
      whileHover="hover"
      animate="rest"
      {...props}
    >
      <Flex direction="column" align="center">
        <LoadingIcon CardIcon={CardIcon} iconVariants={hoverGrow} />
        <Heading py="8" fontSize="3xl" align="center" flexWrap="wrap">
          {header}
        </Heading>
        <Flex> </Flex>
      </Flex>
      <Text mb="4">{subText}</Text>
    </MotionFlex>
  );
};

export const TimedCarousel = ({ iconData, ...props }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  useEffect(() => {
    const timerId = setTimeout(() => paginate(1), 6000);

    return () => clearTimeout(timerId);
  });

  const paginate = (newDirection) => {
    const len = iconData.length;

    let newPage = (page + newDirection) % len;

    newPage = newPage < 0 ? len - 1 : newPage;

    setPage([newPage, newDirection]);
  };

  return (
    <MotionBox h="100%" w="100%" position="relative">
      <AnimatePresence custom={direction} initial={true} exitBeforeEnter>
        <MotionBox
          key={page}
          custom={direction}
          initial="hidden"
          animate="visible"
          exit={{ rotateY: 90, transition: { type: "tween" } }}
          variants={containerVariant}
        >
          <Flex>
            <SwitchableCard {...iconData[page]} />
          </Flex>
        </MotionBox>
      </AnimatePresence>
      <MotionBox
        position="absolute"
        left="0"
        opacity="0"
        borderRadius="36"
        top="0"
        bg="blue.900"
        justify="center"
        align="center"
        h="90%"
        w="35%"
        whileTap="hover"
        initial="rest"
        id="left"
        whileHover="hover"
        animate="rest"
        variants={buttonHover}
        onClick={() => paginate(-1)}
      >
        <MotionBox variants={hoverLeft}>
          <Icon as={ChevronLeftIcon} left="0" minHeight="5em" minWidth="5em" />
        </MotionBox>
      </MotionBox>
      <MotionFlex
        key="right"
        position="absolute"
        opacity="0.3"
        borderRadius="36"
        top="0"
        right="0"
        bg="blue.900"
        h="90%"
        w="35%"
        justify="center"
        align="center"
        _active={{
          color: "white",
        }}
        onClick={() => paginate(1)}
        whileTap="hover"
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={buttonHover}
      >
        <MotionBox variants={hoverRight}>
          <Icon minHeight="5em" minWidth="5em" as={ChevronRightIcon} />
        </MotionBox>
      </MotionFlex>
    </MotionBox>
  );
};
