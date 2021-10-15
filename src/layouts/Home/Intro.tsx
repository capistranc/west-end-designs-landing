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

const introData = [
  {
    titleBegin: "Welcome to",
    titleEnd: "West End Designs",
    text: (
      <>
        Getting online is easy. Succeeding online is a different story. Search
        Engine Optimization, Google Analytics, Server-Side Rendering... At{" "}
        <Text as="h1" d="inline-block">
          West End Designs
        </Text>{" "}
        we use every tool available to guarantee your success. We are so
        confident in our designs, that your first mockup for a standard website
        is free of charge.
      </>
    ),
    buttonText: "CONNECT NOW",
    buttonLink: "#contact-form",
  },
];
export const Intro = ({
  titleBegin,
  titleEnd,
  buttonText = "CONNECT NOW",
  buttonLink = "#contact-form",
  children,
  ...props
}) => {
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
            {titleBegin || introData[0].titleBegin}
            <Heading d="inline-block" variant="h2" as="h1" color="teal.600">
              {titleEnd || introData[0].titleEnd}
            </Heading>
          </Heading>
          <Text maxWidth="48em" as="div">
            {children || introData[0].text}
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
          <NextLink href={buttonLink}>{buttonText}</NextLink>
        </Button>

        <DashedLine height="6rem" />
      </Box>
    </Box>
  );
};
