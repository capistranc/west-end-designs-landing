import { Layout } from "../layouts/Layout";
import { NextPage } from "next";
import { ContactForm } from "../components/Forms/ContactForm";
import { StickyNavHeader, WhiteStickyNavHeader } from "../components/Header";
import { BannerSectionAbout } from "../layouts/About/bannersectionabout";
import { theme } from "../theme";

import React, { useRef, useEffect, useState } from "react";


import {
  Flex,
  Box,
  Text,
  Center,
  Image,
  Heading,
  Button,
  useColorMode,
} from "@chakra-ui/react";

export const About: NextPage = ({}) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <WhiteStickyNavHeader
        id="sticky-nav-bar"
        position="fixed"
        // color={theme.fg[colorMode]}
        color="gray.900"
      />
      <Flex top="0" as="main" flexDirection="column" backgroundColor="white">
        <Box height={{ base: "40rem", md: "25rem" }}>
          <BannerSectionAbout />
        </Box>

        <Box
          w="100%"
          h={{ base: "40rem", md: "30rem" }}
          backgroundColor="rgba(111,157,171, .05)"
        >
          <Flex w="100%" h="100%" align="center">
            <Text
              h="40%"
              w="70%"
              position="relative"
              // top="50%"
              // transform="translateY(-50%)"
              color="gray.700"
              margin="auto"
              fontWeight="bold"
              // bg="red"
            >
              At West End Designs, we believe that you deserve a well designed
              website that is affordable. A more valuable way where customers
              are earned rather than bought. We're obsessively passionate about
              it, and our mission is to help people achieve it. We focus on
              search engine optimization. It's one of the least understood and
              least transparent aspects of great marketing, and we see that as
              an opportunity. We're excited to simplify SEO for everyone through
              our software, education, and community.
            </Text>
          </Flex>
        </Box>
        <Box
          w="100%"
          h={{ base: "40rem", md: "30rem" }}
          backgroundColor="rgba(111,157,171, .3)"
        ></Box>
        <Box
          w="100%"
          h={{ base: "40rem", md: "30rem" }}
          backgroundColor="rgba(111,157,171, .05)"
        ></Box>
        <Box
          w="100%"
          h={{ base: "40rem", md: "30rem" }}
          backgroundColor="rgba(111,157,171, .3)"
        >
          {/* <Image
            width={{ base: "20rem", md: "20rem" }}
            src="/images/swirlyoval.svg"
            alt="Swirly oval svg"
            position="relative"
            // top="50%"
            // transform="translateY(-50%)"
            margin="auto"
          /> */}
          <Box
            backgroundImage="/images/swirlyoval.svg"
            h="50%"
            w="50%"
            background-repeat="no-repeat"
            background-size="contain"
          ></Box>
        </Box>
      </Flex>
    </>
// import { ResumeMap } from "../layouts/Bio/ResumeMap";

// export const About: NextPage = () => {
//   const { colorMode } = useColorMode();

//   return (
//     <Layout
//       title="Hey! nice to meet you"
//       description="Chris and Mike started West End Designs to help small and medium sized businesses compete in todays modern world of rapidly advancing technology."
//     >
//       <Box align="center" color={theme.fg[colorMode]} bg={theme.bg[colorMode]}>
//         <ResumeMap />
//       </Box>
//     </Layout>
//   );
// };

export default About;

// export const About: NextPage = () => {
//   const { colorMode } = useColorMode();

//   return (
//     <Layout
//       title="Hey! nice to meet you"
//       description="Chris and Mike started West End Designs to help small and medium sized businesses compete in todays modern world of rapidly advancing technology."
//     >
//       <Box height={{ base: "20rem", md: "30rem" }} top="0" w="100%" bg="white">
//         <Banner h="100%" color="white">
//           <Heading fontWeight="600" py="10" fontSize="4xl">
//             <b className="thing">About The Team</b>
//           </Heading>
//         </Banner>
//       </Box>
//       <Box position="fixed" top="0" width="100%" zIndex="10" bg="white"></Box>
//       {/* <Box>The Team</Box> */}
//       <Box height="70rem" bg="white">
//         <SimpleGrid
//           height="50%"
//           w="100%"
//           display={{ md: "inline-flex" }}
//           base={{ base: 2, md: 2 }}
//           padding={{ base: 6 }}
//           mb={{ base: "0", md: "0" }}
//           mt={{ base: "0", md: "0" }}
//         >
//           <Box
//             height={{ base: "70%", md: "100%" }}
//             w={{ base: "100%", md: "50%" }}
//             mb={{ base: 5, md: 0 }}
//           >
//             <Flex
//               justify="center"
//               w="100%"
//               height={{ base: "100%", md: "70%" }}
//               position="relative"
//               top={{ md: "15%" }}
//             >
//               <Image
//                 layout="fill"
//                 objectFit="contain"
//                 src="/images/chrisCropped.png"
//                 alt="Picture of developer"
//               />
//             </Flex>
//           </Box>

//           <Box w={{ base: "100%", md: "40%" }} margin="auto">
//             Chris Capistran is Co-Owner and a developer at West End Designs.
//             Chris majored in Math and Computer Science at UCLA and has numerous
//             years experience working in tech as a developer.
//           </Box>
//         </SimpleGrid>
//         <SimpleGrid
//           // bg="red"
//           height="50%"
//           w="100%"
//           display={{ md: "inline-flex" }}
//           base={{ base: 2, md: 2 }}
//           padding={{ base: 6 }}
//           mb={{ base: "0", md: "0" }}
//           mt={{ base: "0", md: "0" }}
//         >
//           <Box
//             height={{ base: "70%", md: "100%" }}
//             w={{ base: "100%", md: "50%" }}
//             mb={{ base: 5, md: 0 }}
//           >
//             <Flex
//               justify="center"
//               w="100%"
//               height={{ base: "100%", md: "70%" }}
//               position="relative"
//               top={{ md: "15%" }}
//             >
//               <Image
//                 layout="fill"
//                 objectFit="contain"
//                 src="/images/michaelCropped.png"
//                 alt="Picture of developer"
//               />
//             </Flex>
//           </Box>

//           <Box w={{ base: "100%", md: "40%" }} margin="auto">
//             Chris Capistran is Co-Owner and a developer at West End Designs.
//             Chris majored in Math and Computer Science at UCLA and has numerous
//             years experience working in tech as a developer.
//           </Box>
//         </SimpleGrid>
//       </Box>
//     </Layout>
//   );
// };
