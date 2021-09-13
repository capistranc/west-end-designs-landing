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

export const SwitchableCard = ({
  header,
  subText,
  CardIcon,
  handleClick,
  ...props
}) => {
  const DirectionContainer = ({ handleClick, children, ...props }) => (
    <MotionBox
      whileTap="hover"
      initial="rest"
      whileHover="hover"
      animate="rest"
      borderRadius="32"
      onClick={(direction) => handleClick(direction)}
      variants={buttonHover}
    >
      {children}
    </MotionBox>
  );
  return (
    <MotionFlex
      direction="column"
      justify="space-between"
      align="center"
      py="4"
      border="4px solid"
      borderColor="rgba(111,111,111,0.3)"
      borderRadius="36"
      initial="rest"
      whileHover="hover"
      animate="rest"
      {...props}
    >
      <Flex direction="column" align="center">
        <LoadingIcon
          boxSize={["8rem", "9rem", "10rem", "11rem"]}
          CardIcon={CardIcon}
          iconVariants={hoverGrow}
        />
        <Heading py="4" fontSize="3xl" align="center" flexWrap="wrap">
          {header}
        </Heading>
      </Flex>
      <Flex justify="space-between" w="100%">
        <DirectionContainer handleClick={() => handleClick(-1)}>
          <MotionBox variants={hoverLeft}>
            <Icon as={ChevronLeftIcon} minHeight="5em" minWidth="5em" />
          </MotionBox>
        </DirectionContainer>

        <DirectionContainer handleClick={() => handleClick(1)}>
          <MotionBox variants={hoverRight}>
            <Icon as={ChevronRightIcon} minHeight="5em" minWidth="5em" />
          </MotionBox>
        </DirectionContainer>
      </Flex>
      <Text p="4">{subText}</Text>
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
    <MotionBox h="100%" w="100%" position="relative" {...props}>
      <AnimatePresence custom={direction} initial={true} exitBeforeEnter>
        <MotionBox
          key={page}
          custom={direction}
          initial="hidden"
          animate="visible"
          exit={{ rotateY: 90, transition: { type: "tween" } }}
          variants={containerVariant}
        >
          <SwitchableCard handleClick={paginate} {...iconData[page]} />
        </MotionBox>
      </AnimatePresence>
    </MotionBox>
  );
};
