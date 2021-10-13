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

export const BannerSectionServices = ({ ...props }) => {
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
              >
                {" "}
                A website built for your expansion.
              </Text>
            </Box>
            <Box pl={8} pr={8} align="center">
              <Text fontSize="md">
                At West End Designs, we recognize that your business’s website
                is not only a representation of your business, but also an
                extension of it. We know our client’s websites need to be
                unique, and we do this by creating a hand coded custom website
                for each of our clients. If your website looks great and your
                potential customers have a great experience using it, those
                potential customers can be turned into real customers.
              </Text>
            </Box>
            <Box>
              <Button
                color={theme.bw[colorMode]}
                bg={theme.wb[colorMode]}
                variant="solid"
                size="lg"
              >
                <Link href="/contact">
                  <a>CONNECT</a>
                </Link>
              </Button>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};
