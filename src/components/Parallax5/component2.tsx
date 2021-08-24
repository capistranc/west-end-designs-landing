import {
  Flex,
  Heading,
  Box,
  Text,
  Link,
  Spacer,
  Image,
  Divider,
  Textarea,
} from "@chakra-ui/react";

export const component2 = (
  <Flex direction="column" h="100%" bg="gray.600">
    <Flex p="4" direction="row" justify="flex-start" align="flex-start">
      <Heading as="h1" color="white">
        What We Do
      </Heading>
    </Flex>

    <Flex marginBottom="20">
      <Spacer flex="2" />
      <Heading color="white">SEO Optimized Web Design</Heading>
      <Spacer flex="2" />
    </Flex>

    <Flex
      p="4" //4 spacing units is 1em in chakra
      flexDirection={["column", "column", "row", "row"]}
      color="white"
      height="100%"
      justify="space-evenly"
      align="space-evenly"
    >
      <Spacer />
      <Box flex="3" border="1px">
        <Flex
          direction="column"
          justify="space-evenly"
          align="center"
          p="4"
          height="100%"
        >
          <Spacer />
          <Image h="600px" w="400px" boxSize="200px" />
          <Heading py="8"> $0 DOWN</Heading>
          <Spacer />
          <Text align="center">
            $0 Down to start. We sell our software as a services on a
            subscription based plan starting from as little as $150 a month.
          </Text>
          <Spacer />
        </Flex>
      </Box>

      <Spacer />
      <Divider orientation="vertical" px="1px" />
      <Divider orientation="vertical" px="1px" />
      <Spacer />
      <Flex flex="6" direction="column">
        <Heading as="h4"> $0 Down, Starting at $150 a month. </Heading>
      </Flex>
      <Spacer />
    </Flex>
  </Flex>
);
