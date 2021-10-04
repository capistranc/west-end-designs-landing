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

export const Intro = ({ ...props }) => {
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
          <Heading variant="h2">
            Welcome to{" "}
            <Text d="inline-block" color="teal.600">
              West End Designs
            </Text>
          </Heading>
          <Text maxWidth="45rem">
            Getting online is easy. Succeeding online is a different story.
            Search Engine Optimzation, conversion-based web designs, Google
            Analytics. Here at the West End we use every tool available to
            guarantee your success. We are so confident in our designs, that we
            offer mockups for our standard package free of charge.
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
