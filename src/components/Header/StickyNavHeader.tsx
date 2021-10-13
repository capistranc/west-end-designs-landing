import { NavBar } from "./NavBar";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import { links } from "./index";

export const StickyNavHeader = ({ active = null, ...props }) => {
  return (
    <Box
      top="0"
      as="nav"
      id="nav"
      zIndex="sticky"
      position="fixed"
      w="100%"
      color="white"
      bgColor="rgba(0.4,0.4,0.4,0.4)"
      {...props}
    >
      <NavBar links={links} color={props.color} active={active}></NavBar>
    </Box>
  );
};
