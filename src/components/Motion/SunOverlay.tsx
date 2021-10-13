import { MotionBox } from "./index";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
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
      delay: 0.5,
    },
  }),

  enter: (colorMode) => {
    if (colorMode === "light") {
      return {
        opacity: 0.7,
        scale: 1,
        rotateZ: 0,
        transition: {
          delay: 0.5,
          duration: 0.8,
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
          delay: 0.5,
          duration: 1.5,
        },
      };
    }
  },
  exit: {
    opacity: 0,
    scale: 5,
    rotateZ: 90,
    transition: { type: "tween", duration: 0.3 },
  },
};

const overlayProps = {
  light: {
    bg: "url('/images/sunOverlay.png')",
    sx: {
      mixBlendMode: "hard-light",
    },
  },
  dark: {
    bg: "rgba(25,25,112,1)",
    sx: {
      mixBlendMode: "hard-light",
    },
    opacity: "100%",
  },
};

export const SunOverlay = () => {
  const { colorMode } = useColorMode();

  const Overlay = ({ ...props }) => (
    <MotionBox
      key="sun"
      position="absolute"
      overflow="hidden"
      bottom="0"
      left="0"
      top={{ base: "-50", md: "0" }}
      right={{ base: "-50", md: "0" }}
      // h="100vh"
      // w="100vw"
      h="100%"
      w="100%"
      variants={overlayVariant}
      custom={colorMode}
      opacity="0"
      initial="hidden"
      animate="enter"
      exit="exit"
      bg="url('/images/sunOverlay.png')"
      background-repeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="right"
      {...overlayProps[colorMode]}
      {...props}
    />
  );

  return (
    <>
      <AnimatePresence custom={colorMode} initial={false} exitBeforeEnter>
        <MotionBox key={colorMode}>
          <Overlay />
          <Overlay
            key={`${colorMode}2`}
            sx={{ mixBlendMode: "overlay" }}
            bg={useColorModeValue(
              "transparent",
              "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.8491771708683473) 50%, rgba(0,0,0,1) 100%)",
            )}
          />
        </MotionBox>
      </AnimatePresence>
    </>
  );
};
