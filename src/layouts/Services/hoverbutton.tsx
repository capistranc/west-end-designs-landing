import React from "react";
import { Box, BoxProps } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/react";
export const MotionBox = motion<BoxProps>(Box);
export function HoverButton({ children, ...props }) {
  return (
    <MotionBox
      height="40px"
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      // mt={10}
      w={"full"}
      bg={"blue.400"}
      color={"white"}
      display={"inline-flex"}
      rounded={"xl"}
      boxShadow={"0 5px 20px 0px rgb(70 130 180 / 43%)"}
      _focus={{
        bg: "blue.500",
      }}
      {...props}
    >
      {children}
    </MotionBox>
  );
}
