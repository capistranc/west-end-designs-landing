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
} from "@chakra-ui/react";
import { FooterContent } from "../components/Footer";
export default function Index({ allPostsData }) {
  const bgImages = [
    "url('/images/catalinaLight.jpg')",
    "url('/images/catalinaDark.jpg')",
    "url('/images/catalinaLight.jpg')",
  ];
  const component1 = (
    <Box as="caption">
      <Heading
        as="h1"
        position="absolute"
        left="0"
        top="50%"
        width="100%"
        text-align="center"
        color="white"
      >
        SCROLL DOWN
      </Heading>
    </Box>
  );

  const component2 = (
    <Text
      as="p"
      color="#777"
      background-color="white"
      text-align="center"
      padding="50px 80px"
    >
      Parallax scrolling is a web site trend where the background content is
      moved at a different speed than the foreground content while scrolling.
      Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed
      posuere mollis ullamcorper libero ante lectus, blandit pellentesque a,
      magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna
      mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam
      pede, nullam vitae eu placerat eget et vehicula. Varius quisque non
      molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris
      ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla
      vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id
      vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin
      magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas,
      porta porttitor placerat leo.
    </Text>
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
    >
      <Text>Sometimes u wanna say something</Text>
    </Flex>
  );

  const component5 = <FooterContent color="white" />;

  const components = [
    component1,
    component2,
    component3,
    component2,
    component5,
  ];

  return <Parallax5 components={components} bgImages={bgImages}></Parallax5>;
}
