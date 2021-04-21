import React from "react";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import { bgColor, color } from "../styles/colors";
import Header from "./Header";

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Header bg={bgColor[colorMode]} color={color[colorMode]} />
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </>
  );
};

export default Layout;
