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

import { Flex, Box, Heading, Text } from "@chakra-ui/react";

export const section2 = () => {
  const bgImage = "url('/images/guyStandingNextToGraph.svg')";

  return (
    <>
      <Box height="35vh" w="100%" backgroundColor="white">
        <Box
          height="90%"
          w="80%"
          flexDir="column"
          align="center"
          justify="center"
          bgImage={bgImage}
          backgroundPosition="center"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          // paddingRight="30px"
          marginLeft="8%"
        ></Box>
      </Box>
    </>
  );
};
