import { Flex, Heading, Box, Text, Link, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion<BoxProps>(Box);
export const section4 = (
  <Box>
    <Flex
      h="100%"
      w="100%"
      color="white"
      justify="center"
      alignItems="center"
      height="450px"
      flexDir={["column", "column", "row", "row"]}
    >
      <MotionBox
        initial={false}
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          rotate: 365,
        }}
      >
        <Text color="black">SAY WHAT YOU NEED TO SAY ALREADY</Text>
      </MotionBox>
    </Flex>
  </Box>
);
