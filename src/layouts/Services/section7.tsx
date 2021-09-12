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
            color="teal.600"
          >
            Mobile and desktop
          </Text>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            designs that keep users engaged
          </Text>
          <Text mt={2} color="gray.500">
            More often than not, people are primarily accessing the internet
            through their mobile phones. With our mobile first design approach,
            our websites look great on phones, desktops, and other devices.
          </Text>
        </Box>
      </Box>
    </>
  );
};
