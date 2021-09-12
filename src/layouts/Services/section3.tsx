import { Flex, Box, Heading, Text, Stack, VStack } from "@chakra-ui/react";

export const section3 = () => {
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
            fontSize="md"
            letterSpacing="wide"
            color="teal.600"
          >
            Building a better experience
          </Text>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="md"
            letterSpacing="wide"
            color="teal.600"
          >
            for your customers
          </Text>
          <Text mt={2} color="gray.500">
            In todays day and age, your online presence is important for
            increasing your customer base. Many business owners are not aware of
            what it takes now a days to have a website that creates a strong
            online presence, and in turn helps increase your customer base.
          </Text>
        </Box>
      </Box>
    </>
  );
};
