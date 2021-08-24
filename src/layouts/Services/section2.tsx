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

import { CheckIcon } from "@chakra-ui/icons";

const ImageWithTextCard = ({ header, subText, ...props }) => {
  return (
    <Flex
      direction="column"
      justify="space-evenly"
      align="center"
      p="4"
      height="100%"
      {...props}
    >
      <Spacer />
      <Image boxSize="200px" />
      <Heading py="8"> {header}</Heading>
      <Spacer />
      <Text align="center">{subText}</Text>
      <Spacer />
    </Flex>
  );
};
const ListItem = ({ header, subText, ...props }) => {
  return (
    <Flex direction="row" {...props}>
      <CheckIcon mt="1" mr="2" color="blue.500" />
      <Flex direction="column" align="flex-start">
        <Heading as="h6" size="medium" mb="1">
          {header}
        </Heading>
        <Text> {subText}</Text>
      </Flex>
    </Flex>
  );
};
export const section2 = (
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
        <ImageWithTextCard
          header={"$0 DOWN"}
          subText={`$0 Down to start. We sell our software as a services on a
              subscription based plan starting from as little as $150 a month.`}
        />
      </Box>

      <Spacer />
      <Divider orientation="vertical" px="1px" />
      <Divider orientation="vertical" px="1px" />
      <Spacer />
      <Flex flex="6" direction="column">
        <Heading as="h4"> $0 Down, Starting at $150 a month. </Heading>
        <Text py="4">
          We also offer logo and graphic design services via our own in-house
          graphic designer. If you have an existing logo that needs a touch up
          or need a completely new one we can help build your business's brand.
        </Text>
        <ListItem
          header="Hosting Fees Included"
          subText={`Hosting fees are included in your monthly payments`}
        />
        <ListItem
          header="Hosting Fees Included"
          subText={`Hosting fees are included in your monthly payments`}
        />
        <ListItem
          header="Hosting Fees Included"
          subText={`Hosting fees are included in your monthly payments`}
        />
        <ListItem
          header="Hosting Fees Included"
          subText={`Hosting fees are included in your monthly payments`}
        />
      </Flex>
      <Spacer />
    </Flex>
  </Flex>
);
