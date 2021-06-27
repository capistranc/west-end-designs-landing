import React, { useRef, useEffect } from "react";
import {
  useColorMode,
  Button,
  Flex,
  Text,
  Box,
  Stack,
  Heading,
} from "@chakra-ui/react";

import { StickyNavHeader } from "../components/Header";

export const Parallax5 = ({ components, bgImages }) => {
  const { colorMode } = useColorMode();

  const ParallaxBox = ({ children, bgImage, ...props }) => {
    return (
      <Box
        className="background"
        bgImage={bgImage}
        position="relative"
        backgroundAttachment="fixed"
        backgroundPosition="center"
        background-repeat="no-repeat"
        backgroundSize="cover"
        {...props}
      >
        {children}
      </Box>
    );
  };

  const ref = useRef();

  let options = {
    root: null, //The element that is used as the viewport for checking visibility of the target.
    // Must be the ancestor of the target. Defaults to the browser viewport if not specified or null
    rootMargin: "0px",
    threshold: [0.5],
  };

  const callback = (entries, observer) => {
    // console.log(entries);
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        let elem = entry.target;

        console.log("WHATS ON THIS ELEM", elem);
      }
    });
  };

  // useEffect(() => {
  //   let observer = new IntersectionObserver(callback, options);

  //   observer.observe(ref.current);
  // });

  return (
    <>
      <StickyNavHeader position="fixed" />
      <Stack as="main" height="100vh" width="100vw">
        <ParallaxBox bgImage={bgImages[0]} minHeight="100%">
          {components[0]}
        </ParallaxBox>
        <Box position="relative"> {components[1]}</Box>
        <ParallaxBox bgImage={bgImages[1]} height="100%">
          {components[2]}
        </ParallaxBox>
        <Box position="relative">{components[3]}</Box>
        <ParallaxBox bgImage={bgImages[2]} height="100%">
          {components[4]}
        </ParallaxBox>
      </Stack>
    </>
  );
};
