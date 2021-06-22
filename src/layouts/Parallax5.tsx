import React from "react";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import { bgColor, fgColor } from "../styles/colors";

import { Footer } from "../components/Footer";
import { StickyNavHeader } from "../components/Header";

export const Parallax5 = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <StickyNavHeader bg={bgColor[colorMode]} color={fgColor[colorMode]} />
      <Flex
        position="relative"
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
