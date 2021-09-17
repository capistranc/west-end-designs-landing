import { Flex, Box, Heading, Text, Stack, VStack } from "@chakra-ui/react";

export const section5 = () => {
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
            fontSize="sm"
            letterSpacing="wide"
            color="blue.500"
          >
            Let us help you
          </Text>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="blue.500"
          >
            hit all the marks
          </Text>
          <Text mt={2} color="gray.500">
            We focus on hitting all the checkpoints that are needed to drive
            customers to your website, and keep them there. We create fast, well
            designed, and Search Engine Optimized (SEO) websites..
          </Text>
        </Box>
      </Box>
    </>
  );
};
