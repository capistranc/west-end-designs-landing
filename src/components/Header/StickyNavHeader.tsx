import { NavBar } from "./NavBar";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import { links } from "./index";

export const StickyNavHeader = ({ ...props }) => {
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

  useEffect(() => {
    let observer = new IntersectionObserver(callback, options);

    observer.observe(ref.current);
  });

  return (
    <>
      <Box
        ref={ref}
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
          color="white"
          sx={{ "mix-blend-mode": "difference" }}
          //   bgColor="transparent"
        ></NavBar>
      </Box>
    </>
  );
};
