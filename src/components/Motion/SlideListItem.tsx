import { motion } from "framer-motion";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import React, { useRef } from "react";
import { useOnScreen } from "../../lib/hooks";

import { MotionFlex } from "./index";

const listVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    opacity: 100,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const SlideListItem = ({ header, subText, ...props }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <Box ref={ref} minHeight="6rem" h="100%" {...props}>
      {isVisible && (
        <MotionFlex
          initial="hidden"
          animate="visible"
          variants={listVariants}
          direction="row"
          {...props}
          p="4"
          _hover={{ boxShadow: "0px 2px rgba(255,255,255,0.2)" }}
        >
          <CheckIcon mt="1" mr="2" color="blue.500" />
          <Flex direction="column" align="flex-start">
            <Heading as="h6" size="medium" mb="1">
              {header}
            </Heading>
            <Text textStyle="subText" color="gray.300">
              {subText}
            </Text>
          </Flex>
        </MotionFlex>
      )}
    </Box>
  );
};
