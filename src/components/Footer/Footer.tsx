import * as React from "react";
import { theme } from "../../theme";
import {
  Box,
  Spacer,
  Link,
  SimpleGrid,
  useColorMode,
  SimpleGridProps,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

import { SocialMediaLinks, FooterHeading } from "./index";
import { Logo } from "../Logo";
import { Text, TextProps } from "@chakra-ui/layout";

import { links } from "./index";

export const Footer = ({ ...props }) => {
  const { colorMode } = useColorMode();
  return (
    <Stack
      align="center"
      // position="absolute"
      // pt="50"
      // bottom="0"
      spacing="10"
      divider={<StackDivider />}
      py="12"
      px={{ base: "4", md: "8" }}
      bg={theme.bg2[colorMode]}
      color={theme.fg2[colorMode]}
      width="100%"
      {...props}
    >
      <Stack
        d="flex"
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "10", lg: "28" }}
        justify="center"
      >
        <Box flex="1">
          <Logo />
          <Link href="mailto:contact@westendwebdesigns.com">
            contact@westendwebdesigns.com
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
  );
};

export const Copyright = (props: TextProps) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} West End Designs, Inc. All rights
    reserved.
  </Text>
);

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={[1, 2, 2, 2]} {...props}>
    <Box minW="6em">
      <FooterHeading fontSize="xl" mb="4">
        Code
      </FooterHeading>
      <Stack>
        <Link as="h1">Mobile Designs</Link>
        <Link as="h1">Web Applications</Link>
        <Link as="h1">Full Stack Solutions</Link>
      </Stack>
    </Box>
    <Box minW="6em">
      <FooterHeading fontSize="xl" mb="4">
        Content
      </FooterHeading>
      <Stack>
        <Link as="h1">Google Analytics</Link>
        <Link as="h1">Content Management</Link>
        <Link as="h1">Search Engine Optimization</Link>
      </Stack>
    </Box>
  </SimpleGrid>
);
