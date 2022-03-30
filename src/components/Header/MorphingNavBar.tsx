import { NavBar } from "./NavBar";
import { Flex, Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import React, { useRef, useEffect, useState } from "react";
import { theme } from "../../theme";
import { AnimatePresence } from "framer-motion";
import { MotionBox } from "../Motion";

const variants = {
  hidden: { opacity: 1, x: -500, y: -200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 1, x: 0, y: -200 },
};

export const MorphingNavBar = ({ links, active = null, ...props }) => {
  const [sentinelPresent, setPresent] = useState(false);
  const [thisColor, setColor] = useState("white");
  const [thisBackground, setBackground] = useState("rgba(0.1,0.1,0.1,0.1)");
  const [thisShadow, setShadow] = useState("none");

  const { colorMode } = useColorMode();

  function setStyle(sentinelPresent) {
    console.log(sentinelPresent);
    setPresent(sentinelPresent);
    setBackground(sentinelPresent ? "rgba(0.1,0.1,0.1,0.1)" : "white");
    setColor(sentinelPresent ? "white" : "black");
    setShadow(sentinelPresent ? "none" : "md");
  }

  useEffect(() => {
    let sentinels;

    const observer = new IntersectionObserver(([entry]) => {
      setStyle(entry.isIntersecting);
    });

    const delay = setTimeout(() => {
      sentinels = document.getElementsByClassName("header-sentinel");

      if (!sentinels.length) {
        console.log("FALSE");
        setStyle(false);
        return;
      }

      for (let i = 0; i < sentinels.length; i++) {
        observer.observe(sentinels[i]);
      }
    }, 500); //Added a delay to give DOM time to render before looking for sentinel

    return () => {
      return clearTimeout(delay);
    };
  }, [active]);
  return (
    <AnimatePresence>
      <MotionBox
        initial="hidden"
        animate="enter"
        key={thisShadow}
        variants={variants}
        top="0"
        as="nav"
        id="nav"
        zIndex="sticky"
        w="100%"
        transition={{ type: "linear" }}
        position={sentinelPresent ? "absolute" : "fixed"}
        color={thisColor}
        bg={thisBackground}
        boxShadow={thisShadow}
        {...props}
      >
        <NavBar links={links} color={props.color} active={active}></NavBar>
      </MotionBox>
    </AnimatePresence>
  );
};
