import {
  Flex,
  Heading,
  Box,
  Text,
  Image,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";
import { MotionFlex, SlideListItem } from "../../components/Motion";
import { FaCodepen } from "react-icons/fa";
import { DashedLine } from "../../components/svg/DashedLine";
import { theme } from "../../theme/colors";

export const Services2 = () => {
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
    <Box
      direction="column"
      height="100%"
      width="100%"
      align="center"
      justify="center"
      position="relative"
      backgroundColor={useColorModeValue("blue.400", "teal.800")}
      color={useColorModeValue("white", "gray.100")}
    >
      <Box
        position="absolute"
        top="-10rem"
        right="0"
        zIndex="1"
        transform="skewY(-5deg)"
        bg={useColorModeValue("blue.50", "teal.900")}
        h="10rem"
        w="100%"
      />
      <Box
        position="absolute"
        top="-0rem"
        right="0"
        zIndex="1"
        transform="skewY(-5deg)"
        backgroundColor={useColorModeValue("blue.400", "teal.800")}
        h="10rem"
        w="100%"
      />

      <Box
        position="absolute"
        bottom="-10rem"
        right="0"
        zIndex="1"
        transform="skewY(-5deg)"
        bg={useColorModeValue("blue.50", "teal.900")}
        h="10rem"
        w="100%"
      />
      <Box
        position="absolute"
        bottom="0rem"
        right="0"
        zIndex="1"
        transform="skewY(-5deg)"
        backgroundColor={useColorModeValue("blue.400", "teal.800")}
        h="10rem"
        w="100%"
      />

      <Icon
        position="absolute"
        overflow="hidden"
        boxSize={["16rem", "18rem", "20rem", "24rem"]}
        // color="gray.300"
        transform="rotate(0.5turn)"
        opacity="0.1"
        color={useColorModeValue("white", "gray300")}
        as={FaCodepen}
        top="10%"
        right="-5%"
      />
      <DashedLine
        strokeColors={useColorModeValue("white", theme.toHex("teal.900"))}
      />
      <DashedLine
        strokeColors={useColorModeValue("white", theme.toHex("teal.900"))}
      />
      <DashedLine
        strokeColors={useColorModeValue("white", theme.toHex("teal.900"))}
      />

      <Box p="1rem" px="1rem">
        <Heading fontSize="5xl" mb="1rem">
          $0 Down, No Contract
        </Heading>

        <Text as="h4" pl=".25em" fontSize="2xl" textStyle="h2">
          Starting at $150 per month.
        </Text>
      </Box>

      <Flex
        p="4" //4 spacing units is 1rem in chakra
        flexDirection={["column-reverse", "column-reverse", "row", "row"]}
        justify="space-evenly"
        align="space-around"
        mb="2rem"
      >
        <Flex direction="column" align="center" justify="center">
          <SimpleGrid columns={[1, 2, 2, 2]} gap="1rem" mt="2rem">
            {listData.map((item, i) => {
              return <SlideListItem {...item} key={i} delay={i} />;
            })}
          </SimpleGrid>
        </Flex>
      </Flex>
      <DashedLine
        strokeColors={useColorModeValue("white", theme.toHex("teal.900"))}
      />
      <DashedLine
        strokeColors={useColorModeValue("white", theme.toHex("teal.900"))}
      />
      <DashedLine
        strokeColors={useColorModeValue("white", theme.toHex("teal.900"))}
      />
    </Box>
  );
};
