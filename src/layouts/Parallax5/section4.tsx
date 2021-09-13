import { Flex, Heading, Box, Text, Image, SimpleGrid } from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";
import { MotionFlex, SlideListItem } from "../../components/Motion";

export const section4 = () => {
  const listData = [
    {
      header: "No Contract",
      subText: `You pay as you go. Join when you want, and leave when you want.`,
    },
    {
      header: "Unlimited Edits",
      subText: `We provide unlimited edits to your website anytime.`,
    },
    {
      header: "Hosting Fees Included",
      subText: `Hosting fees are included in your monthly payments. You just pay for your domain.`,
    },
    {
      header: "Google Analytics",
      subText: `We will install google analytics for free so you can measure the traffic on your website.`,
    },
    {
      header: "Own your profiles",
      subText: `We can help you set up your domain, google analytics, and email. But they belong to you.`,
    },
    {
      header: "Additional Services",
      subText: `You can talk to us about extra services, if you need help with blogs, social media, or adsense.`,
    },
  ];

  return (
    <Flex
      direction="column"
      bg="linear-gradient(0deg,#444444, #1E1E1E)"
      // bg="#444444"
      height="100%"
      width="100%"
      pt="4"
      pb="4"
    >
      <Flex direction="column" w="100%" h="100%">
        <Heading p="4" mb="12" variant="h2" fontWeight="light" color="white">
          How much does it cost
        </Heading>

        <Flex
          direction="column"
          justify="center"
          align="center"
          p="1rem"
          px="1rem"
          color="white"
        >
          <Heading color="white" size="3xl" mb="1rem">
            $0 Down, No Contract
          </Heading>

          <Text as="h4" pl=".25em" fontSize="2xl" textStyle="h2">
            Starting at $150 per month.
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
              columns={[1, 2, 3, 3]}
              gap="1rem"
              mt="2rem"
              maxWidth="60em"
            >
              {listData.map((item, i) => {
                return <SlideListItem {...item} key={i} delay={i} />;
              })}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
