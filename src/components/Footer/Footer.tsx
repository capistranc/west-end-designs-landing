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

const BackgroundDiv = ({ children }) => {
  return (
    <Box>
      <Image
        // src="/images/profile.jpg"
        // as="footer"
        // role="contentinfo"
        // mx="auto"
        // maxW="7xl"
        // py="12"
        // height="100%"
        bgPosition="left"
        bgSize="cover"
        bgImage="url('/images/profile.jpg')"
        width="100%"
        position="absolute"
      />
      <Box position="relative" float="left" top="0px" left="0px">
        {children}
      </Box>
    </Box>
  );
};

const BackgroundImage = ({ children, ...props }) => {
  return (
    <Box>
      <Box
        bgImage="url('/images/profile.jpg')"
        bgPosition="left"
        bgSize="cover"
        height="100%"
        position="absolute"
      >
        <Box position="relative" float="left" top="0px" left="0px">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

const Footer = (props) => {
  const bgImageLight =
    "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.30)) , url('/images/catalina.jpg')";
  const bgImageDark =
    "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url('/images/catalina.jpg')";

  const bgImage = useColorModeValue(bgImageLight, bgImageDark);

  //   const color = useColorModeValue("gray.200", "white");
  const color = "white";

  return (
    <Box>
      <Box
        bgImage="url('/images/profile.jpg')"
        bgPosition="left"
        bgSize="cover"
        height="100%"
        position="absolute"
      ></Box>
      <Box
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        as="footer"
        role="contentinfo"
        className="my-footer"
        mx="auto"
        py="12"
        w="100%"
        color={color}
        px={{ base: "4", md: "8" }}
      >
        <Stack align="center" spacing="10" divider={<StackDivider />}>
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
