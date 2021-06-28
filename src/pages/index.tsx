import Head from "next/head";
import { Parallax5 } from "../layouts";
import NextLink from "next/link";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Box,
  Stack,
  StackDivider,
  Center,
  VStack,
  Spacer,
  Image,
  Link,
  Divider,
  ScaleFade,
} from "@chakra-ui/react";
import { FooterContent } from "../components/Footer";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { AnimeImage } from "../components/Home/useOnScreenComponent";
import { ParallaxText } from "../components/parallaxCards";

export default function Index({ allPostsData }) {
  const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  });

  const bgImages = [
    "url('/images/catalinaLight.jpg')",
    "url('/images/catalinaDark.jpg')",
    "url('/images/catalinaLight.jpg')",
  ];
  const component1 = (
    <Flex
      h="100%"
      w="100%"
      color="white"
      justify="center"
      alignItems="center"
      flexDir={["column", "column", "row", "row"]}
    >
      <Heading as="h1" color="white">
        SCROLL DOWN
      </Heading>
    </Flex>
  );

  const component2 = (
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

    <Box p={4} display={{ md: "flex" }}>
      <Box flexShrink={0} borderRadius="lg" width={{ md: 40 }}>
        {/* <Image
          borderRadius="lg"
          width={{ md: 40 }}
          src="/images/moneyBag.png"
          alt="Hand holding bag of money."
          opacity=".2"
        /> */}
        <AnimeImage image="/images/moneyBag.png" bg="" />
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
      <Box flexShrink={0} borderRadius="lg" width={{ md: 40 }}>
        <AnimeImage image="/images/handShake.png" bg="" />
      </Box>
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
      <Box flexShrink={0} borderRadius="lg" width={{ md: 40 }}>
        <AnimeImage image="/images/writingWithQuill.png" bg="" />
      </Box>
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

  const component3 = (
    <Flex
      h="100%"
      w="100%"
      color="white"
      justify="center"
      alignItems="center"
      height="450px"
      flexDir={["column", "column", "row", "row"]}
    ></Flex>
  );

  const component4 = (
    <ParallaxText>
      <Text color="black">Sometimes u wanna say something</Text>
    </ParallaxText>
  );

  const component5 = <FooterContent color="white" />;

  const components = [
    component1,
    component2,
    component3,
    component4,
    component5,
  ];

  return <Parallax5 components={components} bgImages={bgImages}></Parallax5>;
}
