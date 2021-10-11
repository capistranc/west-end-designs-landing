import { NavBar } from "./NavBar";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import React, { useRef, useEffect, useState } from "react";

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
      // if (sentinels) {
      //   for (let i = 0; i < sentinels.length; i++) {
      //     observer.unobserve(sentinels[i]);
      //   }
      // }
      return clearTimeout(delay);
    };
  });

  return (
    <Box>
      <Box
        top="0"
        as="nav"
        id="nav"
        zIndex="sticky"
        w="100%"
        position={isVisible ? "absolute" : "fixed"}
        color={isVisible ? "white" : "black"}
        bg={isVisible ? "transparent" : "white"}
        {...props}
      >
        <NavBar
          links={links}
          color={props.color}
          variant={isVisible ? "noLogo" : "default"}
          active={active}
        ></NavBar>
      </Box>
    </Box>
  );
};
