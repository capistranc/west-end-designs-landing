import { Flex, Box } from "@chakra-ui/react";

export function Background({ children, bgImage, ...props }) {
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
        bgPosition: "left 30%",
        bgSize: "cover",
        bgRepeat: "no-repeat",
        zIndex: "-1",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        // sx= {{ ::_before: {'background-position-y': 'top' } }}

        // filter: "blur(4px)",
      }}
      {...props} //Keep props at bottom for manual override
    >
      {children}
    </Box>
  );
}

export const Banner = ({ children, ...props }) => {
  const bgImage = "url('/images/cliffEdge.jpeg')";
  return (
    <Background bgImage={bgImage}>
      <Flex justify="center" align="center" {...props} color="white">
        {children}
      </Flex>
    </Background>
  );
};
