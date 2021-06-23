import { NavBar } from "./NavBar";
import Head from "next/head";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import { BlurryBackground } from "../BlurryBackground";
import { useColorModeValue } from "@chakra-ui/react";

import { links } from "./index";

export const StickyNavHeader = ({ ...props }) => {
  return (
    <>
      <Box
        bgColor="transparent"
        position="sticky"
        top="0"
        width="100%"
        zIndex="10"
        sx={{ "backdrop-filter": "blur(20px)" }}
        {...props}
      >
        <NavBar
          links={links}
          mixBlendMode="difference"
          bgColor="transparent"
        ></NavBar>
      </Box>
    </>
  );
};
