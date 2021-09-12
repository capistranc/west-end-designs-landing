import { Flex, Heading, Box, Text, Image, SimpleGrid } from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";
import { MotionFlex, SlideListItem } from "../../components/Motion";

export const ImageRightWithList = () => {
  const listData = [
    {
      header: "Hosting Fees Included",
      subText: `Hosting fees are included in your monthly payments`,
    },
    {
      header: "24/7 Customer Service",
      subText: `Call direct. No automated response. Talk to one of us directly.`,
    },
    {
      header: "Unlimited Edits",
      subText: `We provide unlimited edits to your website anytime. See something you want updated, we will change it that day.`,
    },
    {
      header: "Web Design & Development",
      subText: `Our websites are hand designed from scratch and will be tested for mobile devices, tabets, and pcs.`,
    },
    {
      header: "Google Analytics",
      subText: `We will install  google analytics for free so you can measure  the traffic on your website.`,
    },
    {
      header: "Citations and Listings",
      subText: `It's important to have your website backlinked from other websites`,
    },
  ];

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
        mb="2rem"
      >
        <Heading variant="h2" fontWeight="light" color="white">
          How we do it.
        </Heading>
      </Flex>

      <Flex direction="column" w="100%" h="100%">
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

          <Text as="h4" pl=".25em" fontSize="2xl" textStyle="h2">
            Search Engine Optimized
          </Text>
          <Text py="1" pl="0.5em" textStyle="subText" color="gray.300">
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
          justify="space-evenly"
          align="space-around"
          mb="1em"
        >
          <Flex flex="2" direction="column" align="center" justify="center">
            <SimpleGrid
              columns={[1, 1, 2, 2]}
              gap="1rem"
              mt="2rem"
              maxWidth="56em"
            >
              {listData.map((item, i) => {
                return <SlideListItem {...item} key={i} delay={i} />;
              })}
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
