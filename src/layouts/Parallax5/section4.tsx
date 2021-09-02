import { Flex, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";

const ListItem = ({ header, subText, ...props }) => {
  return (
    <Flex direction="row" {...props}>
      <CheckIcon mt="1" mr="2" color="blue.500" />
      <Flex direction="column" align="flex-start">
        <Heading as="h6" size="medium" mb="1">
          {header}
        </Heading>
        <Text textStyle="subText" color="gray.300">
          {subText}
        </Text>
      </Flex>
    </Flex>
  );
};
export const section4 = () => {
  return (
    <Flex
      direction="column"
      bg="#444444"
      minHeight="100vh"
      height="100%"
      width="100%"
    >
      <Flex
        p="4"
        direction="row"
        justify="flex-start"
        align="flex-start"
        mb="3rem"
      >
        <Heading variant="h2" fontWeight="light" color="white">
          How we do it.
        </Heading>
      </Flex>

      <Flex direction="column" align="center" justify="center">
        <Flex
          direction="column"
          justify="flex-start"
          p="1rem"
          px="1rem"
          color="white"
        >
          <Heading color="white" size="3xl" mb="1rem">
            Mobile first Designs
          </Heading>

          <Text as="h4" fontSize="2xl" textStyle="h2">
            Search Engine Optimized
          </Text>
          <Text py="1" textStyle="subText" color="gray.300" maxWidth="80%">
            We also offer logo and graphic design services via our own in-house
            graphic designer. If you have an existing logo that needs a touch up
            or need a completely new one we can help build your business's
            brand.
          </Text>
        </Flex>

        <Flex
          p="4" //4 spacing units is 1rem in chakra
          flexDirection={["column-reverse", "column-reverse", "row", "row"]}
          color="white"
          height="100%"
          justify="space-evenly"
          align="space-around"
          mb="4em"
        >
          <Flex flex="2" direction="column" align="center" justify="center">
            <SimpleGrid columns={[1, 2, 2, 2]} gap="8" mt="12" maxWidth="56em">
              <ListItem
                header="SEO Optimized"
                subText={`It's important to have your website linked from other websites, like directories.`}
              />
              <ListItem
                header="Server side rendered"
                subText={`It's important to have your website linked from other websites, like directories.`}
              />
              <ListItem
                header="Google Business Profile"
                subText={`We will install  google analytics for free so you can measure  the traffic on your website.`}
              />
              <ListItem
                header={"Hand Crafted"}
                subText={`It's important to have your website linked from other websites, like directories.`}
              />
              <ListItem
                header="Frequent Updates"
                subText={`We will install  google analytics for free so you can measure  the traffic on your website.`}
              />
              <ListItem
                header="Web Accessibility"
                subText={`It's important to have your website backlinked from other websites`}
              />
            </SimpleGrid>
          </Flex>
          <Flex
            flex="1"
            flexDirection="column"
            p="2em"
            align="flex-start"
            justify="flex-start"
          >
            <Heading variant="h2" fontSize="xl">
              Improve Website Performance
            </Heading>
            <Image m="8" alignSelf="center" boxSize="10em" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
