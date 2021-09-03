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
            <Box bg="blue" w="100%" height="20%">
              <Center>PREMIUM</Center>
            </Box>
            <Box bg="white" w="100%" height="80%">
              <VStack w="100%" align="normal">
                <Center text-align="center">$150/Month</Center>
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
