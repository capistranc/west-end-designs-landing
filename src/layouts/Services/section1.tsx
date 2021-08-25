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
// import { useMediaQuery } from "@chakra-ui/media-query";

// const imageURL = "url('/images/cliffEdge2.jpeg')";
// export const section1 = () => {
//   const [minWidthGreater1920, isDisplayingInBrowser, isLandScape] =
//     useMediaQuery([
//       "(min-width: 1920px)",
//       "(display-mode: browser)",
//       "(orientation: landscape)",
//     ]);

//   console.log("MEDIA QUERIES");
//   console.log(
//     "minWidth",
//     minWidthGreater1920,
//     "\nisDisplay",
//     isDisplayingInBrowser,
//     "\nisLandScape: ",
//     isLandScape
//   );

//   return (
//     <Box width="100vw" height="25vh">
//       <Box
//         width="100vw"
//         height="100%"
//         position="absolute"
//         bgImage={imageURL}
//         backgroundAttachment="fixed"
//         backgroundPosition="center"
//         backgroundSize="cover"
//         backgroundRepeat="no-repeat"
//         top="0"
//       />
//       <Box
//         position="absolute"
//         top="0"
//         height="25vh"
//         width="vw"
//         minWidth="100vw"
//       >
//         <Flex
//           height="100%"
//           width="100%"
//           flexDir="column"
//           align="center"
//           justify="center"
//           color="white"
//           zIndex="2"
//         >
//           {/* fontSize="4xl" */}
//           <Heading fontWeight="800" py="10" className="thing">
//             <b className="thing">Our Services</b>
//           </Heading>

//           {/* <style jsx>{`
//         // THIS WORKS DOWN BELOW
//         .thing {
//           font-size: 100px;
//         }
//         // ABOVE IS WHAT WORKED

//         // THis works too either max-width or min-width on this media query
//         // @media (min-width: 768px) {
//         //   .thing {
//         //     font-size: 200px;
//         //   }
//         // }
//         // above

//         /// this is applying to portrait
//         @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
//           .thing {
//             font-size: 250px;
//           }
//           ///

//           @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
//             .thing {
//               font-size: 300px;
//             }
//           }
//         }
//       `}</style> */}
//         </Flex>
//       </Box>
//     </Box>
//   );
// };

import Head from "next/head";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import { Background } from "./styledSectionComponent";
import { useColorModeValue } from "@chakra-ui/react";

const Banner = ({ children, ...props }) => {
  const bgImage = "url('/images/cliffEdge2.jpeg')";
  return (
    <Background bgImage={bgImage}>
      <Flex justify="center" align="center" {...props} color="white">
        {children}
      </Flex>
    </Background>
  );
};
export const section1 = ({ ...props }) => {
  return (
    <>
      <Box height="25vh" top="0" w="100%">
        <Banner h="100%" color="white">
          <Heading fontWeight="600" py="10" fontSize="4xl">
            <b className="thing">Our Services</b>
          </Heading>
        </Banner>
      </Box>
      <Box position="fixed" top="0" width="100%" zIndex="10"></Box>
    </>
  );
};
