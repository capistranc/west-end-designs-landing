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
import { colors, fgColor, bgColor } from "../../theme/colors";
import NextLink from "next/link";
import { DashedLine } from "../../components/svg/DashedLine";

export const Intro = ({ ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <Box position="relative">
      {/* <Box
        position="absolute"
        w="50vw"
        h="12vh"
        top="-5vh"
        positon="absolute"
        // transform="skewY(3deg)"
        // bgColor="red"
        right="0"
      >
        <svg
          viewBox="0 0 100 10"
          // preserveAspectRatio="xMinYMid none"
          preserveAspectRatio="xMinYMin "
          fill="red"
        >
          <path strokeWidth="4" stroke="red" d="M0, 0 L 50, 10 L 100,0 Z" />
        </svg>
      </Box> */}
      <Box
        align="center"
        color={fgColor[colorMode]}
        bgColor={bgColor[colorMode]}
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
        <Button variant="solid" borderRadius="0" my="4">
          <NextLink href="#contact-form">CONTACT US</NextLink>
        </Button>

        <DashedLine height="6rem" />
      </Box>
    </Box>
  );
};
