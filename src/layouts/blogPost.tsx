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
import { theme } from "../theme";
import { Layout } from "./Layout";

export default function BlogLayout({ children, frontMatter }) {
  const { colorMode } = useColorMode();

  const router = useRouter();
  const slug = router.asPath.replace("/blog", "");

  const postTitle = `${slug} - Blog - West End`;

  return (
    <Layout title={postTitle} description=" ">
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        mt="20"
        maxWidth="1000px"
        w="100%"
        color={theme.fg[colorMode]}
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
              <Text fontSize="sm">
                {frontMatter.by}
                {"Chris Capistran / "}
              </Text>
            </Flex>
            <Text fontSize="sm" minWidth="100px" mt={[2, 0]}>
              {frontMatter.readingTime.text}
            </Text>
          </Flex>
        </Flex>
        {children}
      </Stack>
    </Layout>
  );
}
