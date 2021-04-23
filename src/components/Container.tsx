import React from "react";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import { bgColor, fgColor } from "../styles/colors";
import NavBar from "./NavBar";
import styled from "@emotion/styled";

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
  `;

  return (
    <>
      <StickyNav>
        <NavBar bg={bgColor[colorMode]} color={fgColor[colorMode]} />
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={fgColor[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </>
  );
};

export default Layout;
