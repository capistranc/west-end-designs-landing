import { MotionBox } from "./index";
import { useColorMode } from "@chakra-ui/react";
const overlayVariant = {
  hidden: (colorMode) => ({
    bg: "rgba(0,0,0,0)",
    opacity: 0,
    scale: colorMode === "light" ? 5 : 1,
    rotateZ: colorMode === "light" ? -90 : 0,
  }),
  show: (colorMode) => {
    if (colorMode === "light") {
      return {
        opacity: 0.7,
        scale: 1,
        rotateZ: 0,
        transition: {
          type: "tween",
          // delay: 2,
          duration: 2,
        },
      };
    } else if (colorMode === "dark") {
      return {
        opacity: 0.7,
        scale: 1,
        rotateZ: 0,
        bg: "rgba(9,59,72,1)",
        transition: {
          type: "tween",
          // delay: 2,
          duration: 2,
        },
      };
    }
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
    bg: "rgba(9,59,72,.9)",
    sx: {
      mixBlendMode: "color-burn",
    },
    opacity: "70%",
  },
};

export const SunOverlay = () => {
  const { colorMode } = useColorMode();

  return (
    <MotionBox
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
      bg="url('/images/sunOverlay.png'), rgba(0.4,0.4,0.4,0.2)"
      {...overlayProps[colorMode]}
      background-repeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="right"
    />
  );
};
