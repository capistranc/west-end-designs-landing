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

import { DiamondDecorator } from "../../components/Decorators/Diamond";

export const Intro = ({ ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <Box position="relative" id="intro">
      <DiamondDecorator bgColor={theme.bg2[colorMode]} />
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
            You’ll need more than just a beautiful website to stand out these
            days. Online marketing solutions. Conversion-based web design
            coupled with a lead generating marketing plan, your online success
            is inevitable.
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
