import { Flex, Text } from "@chakra-ui/react";
export const ParallaxText = ({ children }) => {
  return (
    <Flex
      h="100%"
      w="100%"
      color="white"
      justify="center"
      alignItems="center"
      height="450px"
      flexDir={["column", "column", "row", "row"]}
    >
      {children}
    </Flex>
  );
};
