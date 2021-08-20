import { Flex, Heading, Box, Text, Link } from "@chakra-ui/react";

export const component2 = (
  // <Flex background-color="white">
  //   <Center h="100px" color="black" fontSize="xl" >
  //     <Text>$0 down to start</Text>
  //   </Center>
  //   <Center h="100px" color="black" fontSize="xl">
  //     <Text>No contract</Text>
  //   </Center>
  //   <Spacer />
  //   <Center h="100px" color="black" fontSize="xl">
  //     <Text>Unlimited updates</Text>
  //   </Center>
  // </Flex>

  <Box p={4}>
    <Box flexShrink={0} borderRadius="lg" width={{ md: 40 }}>
      {/* <Image
          borderRadius="lg"
          width={{ md: 40 }}
          src="/images/moneyBag.png"
          alt="Hand holding bag of money."
          opacity=".2"
        /> */}
    </Box>
    <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
      <Text
        fontWeight="bold"
        textTransform="uppercase"
        fontSize="sm"
        letterSpacing="wide"
        color="teal.600"
      >
        $0 down to start
      </Text>
      <Link
        mt={1}
        display="block"
        fontSize="md"
        lineHeight="normal"
        // fontWeight="semibold"
        href="#"
      >
        Have peace of mind knowing that ..
      </Link>
    </Box>
    <Box flexShrink={0} borderRadius="lg" width={{ md: 40 }}></Box>
    <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
      <Text
        fontWeight="bold"
        textTransform="uppercase"
        fontSize="sm"
        letterSpacing="wide"
        color="teal.600"
      >
        No contract!
      </Text>
      <Link
        mt={1}
        display="block"
        fontSize="md"
        lineHeight="normal"
        // fontWeight="semibold"
        href="#"
      >
        Have peace of mind knowing that ..
      </Link>
    </Box>
    {/* <Center height="50px">
        <Divider orientation="vertical" />
      </Center> */}
    <Box flexShrink={0} borderRadius="lg" width={{ md: 40 }}></Box>
    <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
      <Text
        fontWeight="bold"
        textTransform="uppercase"
        fontSize="sm"
        letterSpacing="wide"
        color="teal.600"
      >
        Unlimited edits!
      </Text>
      <Link
        mt={1}
        display="block"
        fontSize="md"
        lineHeight="normal"
        // fontWeight="semibold"
        href="#"
      >
        Have peace of mind knowing that ..
      </Link>
    </Box>
  </Box>
);
