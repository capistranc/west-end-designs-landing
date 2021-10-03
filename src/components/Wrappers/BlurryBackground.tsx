import { Box } from "@chakra-ui/react";

/**
 * Common use case:
 */

// import {useColorModeValue} from "@chakra-ui/react"
//  const bgImageLight =
//     "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.30)), url('/images/catalina.jpg')";
//   const bgImageDark =
//     "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.61)) , url('/images/catalina.jpg')";
//   const bgImage = useColorModeValue(bgImageLight, bgImageDark);

//Used in Header and Footer
export function BlurryBackground({ children, bgImage, ...props }) {
  return (
    <Box
      position="relative"
      height="100%"
      width="100%"
      zIndex="0"
      _before={{
        position: "absolute",
        content: '""',
        bgImage: bgImage,
        bgPosition: "left",
        bgSize: "cover",
        bgRepeat: "no-repeat",
        zIndex: "-1",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        // filter: "blur(4px)",
      }}
      {...props} //Keep props at bottom for manual override
    >
      {children}
    </Box>
  );
}
