import { MotionBox } from "../../components/Motion";
import { Box, useColorMode, Flex, Text } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

const switchVariant = {
  rest: { x: 0, y: 0 },
  hover: (direction) => {
    const variant = {
      left: {
        x: "-100%",
      },
      right: {
        x: "100%",
      },
      bottom: {
        y: "-100%",
      },
      top: {
        y: "100%",
      },
    };

    return {
      ...variant[direction],
      transition: {
        type: "linear",
      },
    };
  },
};

export const SwapChildPosition = ({
  child1,
  child2,
  child1Props = undefined,
  child2Props = undefined,
  ...props
}) => {
  return (
    <AnimatePresence>
      <MotionBox
        position="relative"
        whileHover="hover"
        animate="rest"
        boxSize="20rem"
        {...props}
      >
        <MotionBox
          position="absolute"
          variants={switchVariant}
          custom="top"
          boxSize="10rem"
          top="0"
          bg="blue"
          {...child1Props}
        >
          {child1}
        </MotionBox>
        <MotionBox
          position="absolute"
          custom="bottom"
          variants={switchVariant}
          boxSize="10rem"
          bottom="0"
          bg="red"
          {...child2Props}
        >
          {child2}
        </MotionBox>
      </MotionBox>
    </AnimatePresence>
  );
};
