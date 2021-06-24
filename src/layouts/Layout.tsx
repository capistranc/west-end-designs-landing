import React from "react";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import { bgColor, fgColor } from "../styles/colors";

import { Footer } from "../components/Footer";
import { BannerHeader, StickyNavHeader } from "../components/Header";
import { Date, Logo } from "../components/";

export const Layout = ({ children, title }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <BannerHeader
        title={title}
        bg={bgColor[colorMode]}
        color={fgColor[colorMode]}
      />
      <Flex
        position="absolute"
        top="0"
        as="main"
        justifyContent="center"
        align="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={fgColor[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
      <Footer bg={bgColor[colorMode]} color={fgColor[colorMode]} />
    </>
  );
};
