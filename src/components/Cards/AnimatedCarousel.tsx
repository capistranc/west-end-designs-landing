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
  AllInclusive,
  MoneyOff,
  Description,
  Block,
  Directions,
} from "@material-ui/icons";

const iconData = [
  {
    CardIcon: MoneyOff,
    header: "$0 DOWN",
    subText: `$0 Down to start. We sell our software as a services on a
    subscription based plan starting from as little as $150 a month.`,
  },
  {
    CardIcon: Description,
    header: "NO CONTRACT!",
    subText: `We don't believe in trapping people in contracts. We believe that the quality of our content should be enough to keep you as a customer. 
  
    Cancel anytime for any reason.`,
  },
  {
    CardIcon: AllInclusive,
    header: "UNLIMITED UPDATES",
    subText: `Updates to the content of the website will be quick and easy. We respond to all update requests in a timely manner`,
  },
];

// export const AnimatedCarousel = ({ ...props }) => {
//   const [i, setI] = useState(2);
//   const [cardData, useCardData] = useState(iconData[i]);

//   const numCards = iconData.length;

//   function swapNextCard() {
//     setI((i + 1) % numCards);
//     useCardData(iconData[i]);
//   }

//   useEffect(() => {
//     // const timerId = setTimeout(() => swapNextCard(), 4000);
//     // return () => clearTimeout(timerId);
//   });

//   function renderIconCard({ CardIcon, header, subText }) {
//     return (
//       <AnimatedIconCard
//         {...props}
//         CardIcon={CardIcon}
//         header={header}
//         subText={subText}
//       />
//     );
//   }

//   return (
//     <MotionFlex direction="row" justifyContent="stretch" w="100%">
//       {iconData.map((iconData, i) => {
//         return <AnimatedIconCard key={i} {...iconData}></AnimatedIconCard>;
//       })}
//     </MotionFlex>
//   );
// };

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

export const AnimatedCarousel = ({ ...props }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    const len = iconData.length;

    const newPage = (page + newDirection) % len;

    setPage([newPage, newDirection]);
  };

  return (
    <Box h="100%" w="100%" position="relative">
      <AnimatePresence custom={direction} exitBeforeEnter>
        <MotionBox
          key={page}
          custom={direction}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          variants={containerVariant}
        >
          <Flex>
            <AnimatedIconCard {...iconData[page]} />
          </Flex>
        </MotionBox>
      </AnimatePresence>
      {/* <MotionBox
        className="FINDMEE"
        key="left"
        //   initial={{ opacity: 0 }}
        opacity="0"
        position="absolute"
        left="0"
        top="0"
        bg="blue.900"
        h="100%"
        w="40%"
        whileHover={{ opacity: 0.3 }}
      >
        LEFT
      </MotionBox>
      <MotionBox
        className="FINDMEE"
        key="right"
        initial={{ opacity: 0 }}
        position="absolute"
        opacity="0"
        right="0"
        top="0"
        bg="blue.900"
        h="100%"
        w="40%"
        whileHover={{ opacity: 0.3 }}
      >
        RIGHT
      </MotionBox> */}
    </Box>
  );
};

const childVariant = {
  hidden: {
    rotate: 0,
  },
  visible: {
    rotate: 360,
    duration: 3.5,
  },
};

export const AnimatedIconCard = ({ header, subText, CardIcon, ...props }) => {
  return (
    <MotionFlex
      direction="column"
      justify="space-between"
      align="center"
      p="4"
      m="4"
      py="8"
      border="4px solid"
      borderColor="rgba(111,111,111,0.3)"
      borderRadius="36"
      whileHover={{ scale: 1.1 }}
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
            initial="hidden"
            animate="visible"
            variants={childVariant}
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
            whileHover={{ scale: 1.1 }}
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
