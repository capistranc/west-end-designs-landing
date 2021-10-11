import {
  Flex,
  Heading,
  Box,
  Text,
  Image,
  Icon,
  SimpleGrid,
  Button,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { theme } from "../../theme/colors";
import NextLink from "next/link";
import { DashedLine } from "../../components/svg/DashedLine";
import { GiBigWave, GiCliffCrossing } from "react-icons/gi";

import { DiamondDecoratorTopDown } from "../../components/Decorators/Diamond";

export const Intro = () => {
  const { colorMode } = useColorMode();

  return (
    <Box position="relative" id="intro">
      <DiamondDecoratorTopDown bgColor={theme.bg[colorMode]} />
      <Box
        align="center"
        color={theme.fg[colorMode]}
        bgColor={theme.bg[colorMode]}
        backgroundColor={useColorModeValue("white", "teal.900")}
      >
        <DashedLine />

        <Box my="4">
          <Heading variant="h2" as="div">
            Welcome to{" "}
            <Heading d="inline-block" variant="h2" as="h1" color="teal.600">
              West End Designs
            </Heading>
          </Heading>
          <Text maxWidth="48em" as="div">
            Getting online is easy. Succeeding online is a different story.
            Search Engine Optimization, Google Analytics, Server-Side
            Rendering... At{" "}
            <Text as="h1" d="inline-block">
              West End Designs
            </Text>{" "}
            we use every tool available to guarantee your success. We are so
            confident in our designs, that your first mockup for a standard
            website is free of charge.
          </Text>
        </Box>

        <DashedLine height="6rem" />
        <Button
          variant="solid"
          borderRadius="0"
          my="4"
          // bg="teal.500"
          // color="white"
        >
          <NextLink href="#contact-form">CONNECT NOW</NextLink>
        </Button>

        <DashedLine height="6rem" />
      </Box>
    </Box>
  );
};
