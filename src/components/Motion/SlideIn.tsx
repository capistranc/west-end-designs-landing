import React, { useRef } from "react";
import { Box } from "@chakra-ui/react";
import { MotionFlex, MotionBox } from "./index";
import { useOnScreen, useHasRendered } from "../../lib/hooks";
import { slideFrom } from "./variants";
import { AnimatePresence } from "framer-motion";

export const SlideIn = ({ children, from = "left", ...props }) => {
  // const isBrowser = useBreakpointValue({ md: "browser" });
  // const variant = isBrowser ? slideFrom(from) : slideFrom("left");
  const ref = useRef();
  const isVisible = useHasRendered(ref);

  return (
    <Box ref={ref} {...props} overflow="hidden">
      <AnimatePresence>
        {isVisible && (
          <MotionBox
            h="100%"
            w="100%"
            variants={slideFrom(from)}
            initial="hidden"
            animate="show"
            transition={{
              duration: 0.5,
              delay: 0.3 * props.delay,
              stiffness: 500,
            }}
          >
            {children}
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
};
