import * as React from "react";
import {
  Box,
  Spacer,
  Link,
  SimpleGrid,
  SimpleGridProps,
  Stack,
  StackDivider,
  Flex,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

import { SocialMediaLinks } from "./SocialMediaLinks";

import Logo from "../Logo";
import { FooterHeading } from "./FooterHeading";
import { Text, TextProps } from "@chakra-ui/layout";

const Footer = ({ links, ...props }) => {
  const image = "url('/images/catalina.jpg')";
  const bgImageLight =
    "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.30)), url('/images/catalina.jpg')";
  const bgImageDark =
    "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.61)) , url('/images/catalina.jpg')";

  const bgImage = useColorModeValue(bgImageLight, bgImageDark);

  const color = "white";

  return (
    <Box position="relative" bottom="0" width="100%">
      <Box
        position="relative"
        bgPosition="center"
        as="footer"
        role="contentinfo"
        mx="auto"
        py="12"
        height="100%"
        width="100%"
        color={color}
        zIndex="0"
        px={{ base: "4", md: "8" }}
        _before={{
          position: "absolute",
          content: '""',
          bgImage: bgImage,
          bgPosition: "center",
          bgSize: "cover",
          bgRepeat: "no-repeat",
          zIndex: "-1",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          filter: "blur(8px)",
        }}
      >
        <Stack
          zIndex="1"
          align="center"
          spacing="10"
          divider={<StackDivider />}
        >
          <Stack
            d="flex"
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: "10", lg: "28" }}
            justify="center"
          >
            <Box flex="1">
              <Logo />
              <Link href="mailto:capistranc@gmail.com">
                WestEndDesigns@gmail.com
              </Link>
              <Spacer />
              <Link href="tel:714-932-9998">(949) 735 - 5619</Link>
            </Box>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "10", md: "20" }}
            >
              <LinkGrid spacing={{ base: "10", md: "20", lg: "28" }} flex="1" />
            </Stack>
          </Stack>
          <Stack
            direction={{ base: "column-reverse", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Copyright />
            <SocialMediaLinks color="white" />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;

export const Copyright = (props: TextProps) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} West End Designs, Inc. All rights
    reserved.
  </Text>
);

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Product</FooterHeading>
      <Stack>
        <Link>How it works</Link>
        <Link>Pricing</Link>
        <Link>Use Cases</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Legal</FooterHeading>
      <Stack>
        <Link>Privacy</Link>
        <Link>Terms</Link>
        <Link>License</Link>
      </Stack>
    </Box>
  </SimpleGrid>
);
