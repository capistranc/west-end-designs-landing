import {
  Flex,
  Spacer,
  Box,
  Icon,
  Heading,
  Text,
  BoxProps,
  FlexProps,
  IconProps,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MotionBox = motion<BoxProps>(Box);
const MotionFlex = motion<FlexProps>(Flex);
const MotionIcon = motion<IconProps>(Icon);

import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdMoneyOff,
  MdAllInclusive,
  MdDescription,
} from "react-icons/md";

const iconData = [
  {
    CardIcon: MdMoneyOff,
    header: "$0 DOWN",
    subText: `$0 Down to start. We sell our software as a services on a
    subscription based plan starting from as little as $150 a month.`,
  },
  {
    CardIcon: MdDescription,
    header: "NO CONTRACT!",
    subText: `We don't believe in trapping people in contracts. We believe that the quality of our content should be enough to keep you as a customer. 
  
    Cancel anytime for any reason.`,
  },

  ,
  {
    CardIcon: MdAllInclusive,
    header: "UNLIMITED UPDATES",
    subText: `Updates to the content of the website will be quick and easy. We respond to all update requests in a timely manner`,
  },
];

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

const hoverVariant = {
  rest: {
    color: "#f5f5f5",
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    color: "#E6E1C5",
    scale: 1.1,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const buttonHover = {
  rest: {
    backgroundColor: "transparent",
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

export const AnimatedCarousel = ({ ...props }) => {
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
            <AnimatedIconCard {...iconData[page]} />
          </Flex>
        </MotionBox>
      </AnimatePresence>
      <MotionFlex
        key="left"
        opacity="0"
        position="absolute"
        borderRadius="36"
        left="0"
        top="0"
        bg="blue.900"
        justify="center"
        align="center"
        h="90%"
        w="35%"
        onClick={() => paginate(-1)}
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={buttonHover}
      >
        <MotionIcon
          variants={hoverLeft}
          as={MdKeyboardArrowLeft}
          left="0"
          minHeight="5em"
          minWidth="5em"
        />
      </MotionFlex>
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
        onClick={() => paginate(1)}
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={buttonHover}
      >
        <MotionIcon
          minHeight="5em"
          minWidth="5em"
          variants={hoverRight}
          as={MdKeyboardArrowRight}
        />
      </MotionFlex>
    </MotionBox>
  );
};

export const AnimatedIconCard = ({ header, subText, CardIcon, ...props }) => {
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
        <Box position="relative">
          <MotionBox
            position="absolute"
            top="0"
            h="100%"
            w="100%"
            borderTop="4px solid"
            borderColor="blue.500"
            borderRadius="360"
            animate={{ rotate: 360, borderColor: "#E6E1C5" }}
            transition={{ duration: 6, repeat: Infinity }}
          ></MotionBox>
          <MotionIcon
            zIndex="10"
            border="2px solid gray "
            borderRadius="360"
            as={CardIcon}
            p="8"
            alignSelf="center"
            minHeight="8em"
            minWidth="8em"
            variants={hoverVariant}
          />
        </Box>

        <Heading py="8" fontSize="3xl" align="center" flexWrap="wrap">
          {header}
        </Heading>
      </Flex>
      <Text mb="4">{subText}</Text>
    </MotionFlex>
  );
};
