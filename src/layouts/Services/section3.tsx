import { Flex, Box, Heading, Text, Stack, VStack } from "@chakra-ui/react";

export const section3 = () => {
  return (
    <>
      {/* <Box
        height="25vh"
        w="100%"
        flexDir="column"
        align="center"
        justify="center"
        color="white"
        backgroundColor="black"
      >
        <Heading fontWeight="600" py="10" fontSize="4xl">
          <b className="thing">Our Services</b>
        </Heading>
      </Box> */}
      <VStack
        height="40vh"
        w="100%"
        // flexDir="column"
        // align="center"
        // justify="center"
        // color="white"
      >
        <Box height="20%" w="90%" fontSize="3xl">
          Lorem Impsum
        </Box>
        <Box height="20%" w="90%" fontSize="3xl">
          Lorem Impsum
        </Box>
        <Box height="60%" w="90%">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Box>
      </VStack>
    </>
  );
};
