import React from "react";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import { theme } from "../theme/colors";

import { Footer } from "../components/Footer";
import { BannerHeader, StickyNavHeader } from "../components/Header";
import { Date, Logo } from "../components/";

export const Layout = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <BannerHeader bg={theme.bg[colorMode]} color={theme.fg[colorMode]} />
      <Flex
        position="relative"
        top="0"
        as="main"
        justifyContent="center"
        align="center"
        flexDirection="column"
        bg={theme.bg[colorMode]}
        color={theme.fg[colorMode]}
      >
        {children}
      </Flex>
      <Footer bg={theme.bg[colorMode]} color={theme.fg[colorMode]} />
    </>
  );
};
