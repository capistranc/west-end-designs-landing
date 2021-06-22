import React from "react";
import Head from "next/head";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  Button,
  Link,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Layout } from "./Layout";
import { StickyContactUs } from "../components/StickyContactUs";

export default function BlogLayout({ children, frontMatter }) {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "gray.700",
    dark: "gray.400",
  };
  const router = useRouter();
  const slug = router.asPath.replace("/blog", "");

  const postTitle = `${slug} - Blog - West End`;

  return (
    <Layout title={postTitle}>
      <Head>
        <title>{postTitle}</title>
      </Head>
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="1000px"
        w="100%"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="1000px"
          w="100%"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            {frontMatter.title}
          </Heading>
          <Flex
            justify="space-between"
            align={["initial", "center"]}
            direction={["column", "row"]}
            mt={2}
            w="100%"
            mb={4}
          >
            <Flex align="center">
              <Avatar
                size="xs"
                name="Chris Capistran"
                src="../images/portrait.jpeg"
                mr={2}
              />
              <Text fontSize="sm" color={textColor[colorMode]}>
                {frontMatter.by}
                {"Chris Capistran / "}
              </Text>
            </Flex>
            <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
              {frontMatter.readingTime.text}
            </Text>
          </Flex>
        </Flex>
        {children}
        {/* <StickyContactUs /> */}
      </Stack>
    </Layout>
  );
}
