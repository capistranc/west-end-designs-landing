import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  VStack,
  Link,
} from "@chakra-ui/react";

export const section7 = () => {
  return (
    <>
      <Box p={4} display={{ lg: "inline" }} w="100%" height="20%">
        <Box flexShrink={0}>
          <Box borderRadius="lg" width={{ md: 40 }} bg="blue"></Box>
        </Box>
        <Box mt={{ base: 4, md: 0 }}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            Lorem Impsum
          </Text>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            Lorem Impsum
          </Text>
          <Text mt={2} color="gray.500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
        </Box>
      </Box>
    </>
  );
};
