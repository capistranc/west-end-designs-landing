import { Flex, Box, Heading, Text } from "@chakra-ui/react";

export const section5 = () => {
  return (
    <>
      <Box
        height="25vh"
        w="100%"
        flexDir="column"
        align="center"
        justify="center"
        color="white"
        backgroundColor="black"
      >
        <Heading fontWeight="600" py="10" fontSize="4xl">
          <b className="thing">Our Services</b>
        </Heading>
      </Box>
    </>
  );
};
