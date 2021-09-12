import React, { useRef } from "react";
import { Flex } from "@chakra-ui/react";
import { MotionFlex } from "./index";
import { useOnScreen, useHasRendered } from "../../lib/hooks";
import { slideFrom } from "./variants";

export const SlideIn = ({ children, ...props }) => {
  const slideFromLeft = slideFrom("left");
  const ref = useRef();
  const isVisible = useHasRendered(ref);

  return (
    <Flex ref={ref} minHeight="32rem" m="1" {...props}>
      {isVisible && (
        <MotionFlex
          display="block"
          {...slideFromLeft}
          transition={{
            duration: 0.5,
            delay: 0.3 * props.delay,
            stiffness: 500,
          }}
          {...props}
        >
          {children}
        </MotionFlex>
      )}
    </Flex>
  );
};
