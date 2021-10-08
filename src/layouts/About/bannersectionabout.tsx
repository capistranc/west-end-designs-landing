import Head from "next/head";
import Link from "next/link";
import {
  Flex,
  Box,
  Heading,
  Text,
  Center,
  VStack,
  Stack,
  useColorModeValue,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { theme } from "../../theme";

export const BannerSectionAbout = ({ ...props }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box backgroundColor={theme.bg2[colorMode]} height="100%" w="100%">
        <Flex
          height="100%"
          justify="center"
          align="center"
          color={theme.fg2[colorMode]}
        >
          <Stack spacing={8} align="center">
            <Box>
              <Text
                fontSize="4xl"
                textAlign={{ base: "center" }}
                padding={{ base: "30px" }}
                fontWeight="bold"
              >
                {" "}
                The West End Designs Story{" "}
              </Text>
            </Box>
            <Box pl={8} pr={8} align="center">
              <Text fontSize="xl">
                We are here to help show the best version of your company online
              </Text>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};
