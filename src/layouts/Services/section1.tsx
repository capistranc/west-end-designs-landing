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
export const section1 = () => {
  return (
    <>
      <Box height={{ base: "35vh", md: "40vh" }} top="0" w="100%">
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
