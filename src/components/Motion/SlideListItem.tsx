import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { MotionFlex, MotionBox } from "./index";
import React, { useRef } from "react";
import { AnimatePresence } from "framer-motion";

import { useOnScreen, useHasRendered } from "../../lib/hooks";

export const SlideListItem = ({ header, subText, ...props }) => {
  const listVariants = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    show: {
      opacity: 100,
      x: 0,
      transition: {
        duration: 0.3,
        delay: (props.delay || 0) * 0.1,
      },
    },
  };

  const ref = useRef();
  const isVisible = useHasRendered(ref);
  return (
    <Box ref={ref} minHeight="6em" h="100%" {...props}>
      <AnimatePresence>
        {isVisible && (
          <MotionFlex
            initial="hidden"
            animate="show"
            variants={listVariants}
            direction="row"
            {...props}
            p="4"
            _hover={{ boxShadow: "0px 2px rgba(255,255,255,0.2)" }}
          >
            <CheckIcon mt="1" mr="2" color="blue.500" />
            <Box direction="column" textAlign="left">
              <Heading as="h6" size="medium" mb="1">
                {header}
              </Heading>
              <Text textStyle="subText">{subText}</Text>
            </Box>
          </MotionFlex>
        )}
      </AnimatePresence>
    </Box>
  );
};
