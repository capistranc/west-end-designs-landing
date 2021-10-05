import React from "react";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import { theme } from "../theme/colors";

import { BannerHeader, StickyNavHeader } from "../components/Header";
import { Date, Logo } from "../components/";

export const Layout = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box position="relative" as="main">
        {children}
      </Box>
    </>
  );
};
