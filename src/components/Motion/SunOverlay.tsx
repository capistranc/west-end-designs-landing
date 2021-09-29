import { MotionBox } from "./index";
import { useColorMode } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

const overlayVariant = {
  hidden: (colorMode) => ({
    bg: "rgba(0,0,0,0)",
    opacity: 0,
    x: 0,
    y: 0,
    scale: colorMode === "light" ? 5 : 1,
    rotateZ: colorMode === "light" ? -90 : 0,
    transition: {
      duration: 1,
    },
  }),
  show: (colorMode) => {
    if (colorMode === "light") {
      return {
        opacity: 0.7,
        scale: 1,
        rotateZ: 0,
        transition: {
          // delay: 2,
          duration: 1,
        },
      };
    } else if (colorMode === "dark") {
      return {
        opacity: 0.5,
        scale: 1.1,
        rotateZ: 0,
        bg: "rgba(25, 25, 112,1)",
        transition: {
          type: "spring",
          // delay: 2,
          duration: 1,
        },
      };
    }
  },
  exit: {
    opacity: 0,
    scale: 5,
    rotateZ: 90,
    transition: { type: "spring", duration: 0.5 },
  },
};

const overlayProps = {
  light: {
    bg: "url('/images/sunOverlay.png'), rgba(0.4,0.4,0.4,0.2)",
    sx: {
      mixBlendMode: "hard-light",
    },
  },
  dark: {
    bg: "rgba(9,59,72,.7)",
    sx: {
      mixBlendMode: "color-burn",
    },
    opacity: "70%",
  },
};

export const SunOverlay = () => {
  const { colorMode } = useColorMode();

  const Overlay = ({ ...props }) => (
    <MotionBox
      key="sun"
      position="absolute"
      top="0"
      overflow="hidden"
      bottom="0"
      left="0"
      right="0"
      h="100vh"
      w="100vw"
      variants={overlayVariant}
      custom={colorMode}
      opacity="0"
      initial="hidden"
      animate="show"
      exit="exit"
      bg="url('/images/sunOverlay.png'), rgba(0.4,0.4,0.4,0.2)"
      background-repeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="right"
      {...overlayProps[colorMode]}
      {...props}
    />
  );

  return (
    <AnimatePresence custom={colorMode} initial={true} exitBeforeEnter>
      <Overlay key={colorMode} />
    </AnimatePresence>
  );
};
