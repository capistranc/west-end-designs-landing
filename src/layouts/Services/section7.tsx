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
            color="blue.500"
          >
            Mobile and desktop
          </Text>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="blue.500"
          >
            designs that keep users engaged
          </Text>
          <Text mt={2} color="gray.500">
            More than half of all website traffic is now being done with mobile
            devices. We develop websites that are designed for mobile, yet still
            look good on desktops. Its important that websites are built to look
            great for the devices people are using.
          </Text>
        </Box>
      </Box>
    </>
  );
};
