import { Flex, Box, Heading, Text, Stack, VStack } from "@chakra-ui/react";

export const section3 = () => {
  return (
    <>
      <Box p={10} display={{ lg: "inline" }} w="100%" height="20%">
        <Box flexShrink={0}>
          <Box borderRadius="lg" width={{ md: 40 }} bg="blue"></Box>
        </Box>
        <Box mt={{ base: 4, md: 0 }}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="md"
            letterSpacing="wide"
            color="blue.500"
          >
            Building a better experience
          </Text>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="md"
            letterSpacing="wide"
            color="blue.500"
          >
            for your customers
          </Text>
          <Text mt={2} color="gray.500">
            In todays day and age, how you present your company online quite
            important. Many business owners are not aware of what it takes to
            have a website that creates a strong online presence, which helps
            attract customers who have been accustomed to savvier designed
            websites.
          </Text>
        </Box>
      </Box>
    </>
  );
};
