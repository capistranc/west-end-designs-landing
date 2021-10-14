import { NavBar } from "./NavBar";
import { Flex, Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import React, { useRef, useEffect, useState } from "react";
import { theme } from "../../theme";

export const MorphingNavBar = ({ links, active = null, ...props }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    let sentinels;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    });

    const delay = setTimeout(() => {
      sentinels = document.getElementsByClassName("header-sentinel");

      if (!sentinels) return;

      for (let i = 0; i < sentinels.length; i++) {
        observer.observe(sentinels[i]);
      }
    }, 500); //Added a delay to give DOM time to render before looking for sentinel

    return () => {
      return clearTimeout(delay);
    };
  });

  const { colorMode } = useColorMode();

  const bg = theme.bg[colorMode];
  const fg = theme.fg[colorMode];

  return (
    <Box>
      <Box
        top="0"
        as="nav"
        id="nav"
        zIndex="sticky"
        w="100%"
        position={isVisible ? "absolute" : "fixed"}
        color={isVisible ? "white" : fg}
        bg={isVisible ? "rgba(0.1,.1,0.1,0.1)" : bg}
        // bg={isVisible ? "transparent" : bg}
        boxShadow={!isVisible && "md"}
        {...props}
      >
        <NavBar links={links} color={props.color} active={active}></NavBar>
      </Box>
    </Box>
  );
};
