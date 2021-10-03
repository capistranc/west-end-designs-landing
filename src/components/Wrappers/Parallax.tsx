import { Box } from "@chakra-ui/react";
export const Parallax = ({ children, ...props }) => (
  <Box
    position="relative"
    className="parallaxSection"
    overflow="hidden"
    backgroundAttachment="fixed"
    background-repeat="no-repeat"
    backgroundPosition="center"
    backgroundSize="cover"
    // h="100%"
    // w="100%"
    // height="calc(var(--vh, 1vh))"
    // width="calc(var(--vw, 1vw))"
    {...props}
  >
    {children}
  </Box>
);
