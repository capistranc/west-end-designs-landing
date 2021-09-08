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
import { motion } from "framer-motion";

const MotionBox = motion<BoxProps>(Box);
const MotionFlex = motion<FlexProps>(Flex);
const MotionIcon = motion<IconProps>(Icon);
import { AllInclusive, MoneyOff, Description, Block } from "@material-ui/icons";

const iconCards = [
  {
    CardIcon: MoneyOff,
    header: "$0 Down",
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
    subText: `Updates to the content of the website will be quick and easy. We respond to all update requests in a timely manner
    `,
  },
];

export const AnimatedIconSwap = ({ ...props }) => {
  const [i, setI] = useState(0);
  const [cardData, useCardData] = useState(iconCards[i]);

  const numCards = iconCards.length;

  function swapNextCard() {
    setI((i + 1) % numCards);
    useCardData(iconCards[i]);
  }

  useEffect(() => {
    const timerId = setTimeout(() => swapNextCard(), 4000);

    return () => clearTimeout(timerId);
  });

  function renderIconCard({ CardIcon, header, subText }) {
    return (
      <AnimatedIconCard
        {...props}
        CardIcon={CardIcon}
        header={header}
        subText={subText}
      />
    );
  }

  return (
    <MotionBox
      layout
      animate={{ rotateY: 360 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
      }}
      {...props}
    >
      {renderIconCard(cardData)}
      <MotionBox />
    </MotionBox>
  );
};



export const AnimatedIconCard = ({ header, subText, CardIcon, ...props }) => {
  return (
    <Flex
      direction="column"
      justify="space-evenly"
      align="center"
      p="4"
      m="4"
      py="8"
      height="100%"
      border="4px solid"
      borderColor="rgba(111,111,111,0.3)"
      borderRadius="36"
      {...props}
    >
      <Spacer />
      <Box position="relative">
        <MotionBox
          position="absolute"
          top="0"
          h="100%"
          w="100%"
          borderTop="4px solid"
          borderColor="blue.500"
          borderRadius="360"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity }}
        ></MotionBox>
        <MotionIcon
          zIndex="10"
          border="2px solid gray "
          borderRadius="360"
          as={CardIcon}
          p="12"
          alignSelf="center"
          minHeight="10em"
          minWidth="10em"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </Box>
      <Heading py="8"> {header}</Heading>
      <Spacer />
      <Text align="center">{subText}</Text>
      <Spacer />
    </Flex>
  );
};
