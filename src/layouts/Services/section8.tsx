import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Center,
  Image,
  Link,
} from "@chakra-ui/react";

export const section8 = () => {
  return (
    <>
      <Box p={4} display={{ lg: "inline" }} height="30%">
        <Flex
          //   mt={{ base: 4, md: 0 }}
          //   bg="black"
          width={{ base: "100%", sm: "400px" }}
          height={{ base: "250px", sm: "300px" }}
          margin="auto"
        >
          <Box
            boxShadow="0 0 10px gray"
            rounded="md"
            bg="gray.50"
            w="100%"
            height="100%"
          >
            <Flex align="center" w="100%" height="20%" bg="DarkTurquoise">
              <Flex align="center" justify="center" margin="auto">
                <Text w="100%" height="100%" textAlign="center">
                  PREMIUM
                </Text>
              </Flex>
            </Flex>
            <Box bg="white" w="100%" height="80%">
              <VStack w="100%" align="normal">
                <Flex align="center" mt="1">
                  <Flex align="center" justify="center" margin="auto">
                    <Text textAlign="center">$150/Month</Text>
                  </Flex>
                </Flex>
                <VStack align="normal">
                  <Flex align="normal">
                    <p> &#9733;</p>
                    <Box>Lorem Ipsum</Box>
                  </Flex>
                  <Flex align="normal">
                    <p> &#9733;</p>
                    <Box>Lorem Ipsum</Box>
                  </Flex>
                  <Flex align="normal">
                    <p> &#9733;</p>
                    <Box>Lorem Ipsum</Box>
                  </Flex>
                  <Flex align="normal">
                    <p> &#9733;</p>
                    <Box>Lorem Ipsum</Box>
                  </Flex>
                </VStack>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
