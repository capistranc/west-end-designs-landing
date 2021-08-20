import { Flex, Heading } from "@chakra-ui/react";

export const component1 = (
  <Flex
    h="100%"
    w="100%"
    color="white"
    justify="center"
    alignItems="center"
    flexDir={["column", "column", "row", "row"]}
  >
    <Heading as="h1" color="white">
      SCROLL DOWN
    </Heading>
  </Flex>
);
