import { Box } from "@chakra-ui/react";

export default function BlurryBackground({ children, bgImage, ...props }) {
  return (
    <Box
      {...props}
      position="relative"
      mx="auto"
      height="100%"
      width="100%"
      zIndex="0"
      _before={{
        position: "absolute",
        content: '""',
        bgImage: bgImage,
        bgPosition: "center",
        bgSize: "cover",
        bgRepeat: "no-repeat",
        zIndex: "-1",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        filter: "blur(8px)",
      }}
    >
      {children}
    </Box>
  );
}
