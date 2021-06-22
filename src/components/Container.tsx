import React from "react";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import { bgColor, fgColor } from "../styles/colors";

import Footer from "./Footer/index";
import Header from "./Header";

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Header bg={bgColor[colorMode]} color={fgColor[colorMode]} />
      <Flex
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

export default Layout;
