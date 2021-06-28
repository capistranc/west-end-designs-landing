import React, { useRef, useEffect, useState } from "react";
import { Box, Stack } from "@chakra-ui/react";

import { StickyNavHeader } from "../components/Header";

export const Parallax5 = ({ components, bgImages }) => {
  const ParallaxBox = ({ children, ...props }) => {
    return (
      <Box
        className="parallaxSection"
        position="relative"
        backgroundAttachment="fixed"
        backgroundPosition="center"
        background-repeat="no-repeat"
        backgroundSize="cover"
        minHeight="100vh"
        {...props}
      >
        <Box className="sentinel" data-header={props["data-header"]}></Box>
        {children}
      </Box>
    );
  };

  const [headerColor, setHeaderColor] = useState("white");
  useEffect(() => {
    // const headerRef = document.getElementById("sticky-nav-bar");

    const sections = document.querySelectorAll(".sentinel");
    const options = {
      root: null, //The element that is used as the viewport for checking visibility of the target.
      // Must be the ancestor of the target. Defaults to the browser viewport if not specified or null
      rootMargin: "0px",
      threshold: [0.2, 0.9],
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {
          if (entry.intersectionRatio >= 0.9) {
            setHeaderColor(entry.target.dataset.header);
          }
        }
      });
    };
    let observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  });

  return (
    <Box>
      <StickyNavHeader
        position="fixed"
        color={headerColor}
        id="sticky-nav-bar"
      />
      <Stack top="0" as="main" height="100vh" width="100vw">
        <ParallaxBox bgImage={bgImages[0]} data-header="white">
          {components[0]}
        </ParallaxBox>
        <ParallaxBox position="relative" data-header="black">
          {components[1]}
        </ParallaxBox>
        <ParallaxBox bgImage={bgImages[1]} height="100%" data-header="white">
          {components[2]}
        </ParallaxBox>
        <ParallaxBox position="relative" data-header="black">
          {components[3]}
        </ParallaxBox>
        <ParallaxBox bgImage={bgImages[2]} height="100%" data-header="white">
          {components[4]}
        </ParallaxBox>
      </Stack>
    </Box>
  );
};
