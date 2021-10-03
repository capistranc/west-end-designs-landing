import React, { useRef } from "react";
import { Box } from "@chakra-ui/react";

import { useOnScreen, useHasRendered } from "../../lib/hooks";

export const OnRender = ({ children, from = "left", ...props }) => {
  const ref = useRef();
  const isVisible = useHasRendered(ref);

  return (
    <Box ref={ref} {...props}>
      {isVisible && <>{children}</>}
    </Box>
  );
};
