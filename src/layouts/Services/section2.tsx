// import {
//   Flex,
//   Button,
//   Heading,
//   Spacer,
//   BoxProps,
//   Box,
//   Text,
// } from "@chakra-ui/react";
// import React, { useState, useEffect } from "react";

// import { motion } from "framer-motion";

// export const section2 = (
//   <Flex
//     height="40vh"
//     width="100%"
//     flexDir="column"
//     align="center"
//     justify="center"
//     color="white"
//     backgroundColor="black"
//   >
//     <Heading fontWeight="900" fontSize="7xl" py="10">
//       <b>Our Services</b>
//     </Heading>
//   </Flex>
// );

import { Flex, Box, Heading, Text, Image, Link } from "@chakra-ui/react";

export const section2 = () => {
  const bgImage = "url('/images/guyStandingNextToGraph.svg')";

  return (
    <>
      <Box p={10} display={{ lg: "inline" }}>
        <Box flexShrink={0}>
          <Image
            borderRadius="lg"
            // width={{ sm: "50%" }}
            src="/images/guyStandingNextToGraph.svg"
            alt="Guy standing next to graph"
          />
        </Box>
      </Box>
    </>
  );
};
