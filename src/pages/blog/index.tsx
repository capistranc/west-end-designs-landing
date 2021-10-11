import React, { useState } from "react";
import Head from "next/head";
import {
  Heading,
  Flex,
  Box,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode,
} from "@chakra-ui/react";

import { Layout } from "../../layouts/Layout";
import { getAllFilesFrontMatter } from "../../lib/mdx";
import { BlogPostPreview } from "../../components/Blog/BlogPostPreview";
import { theme } from "../../theme";

import { SearchIcon } from "@chakra-ui/icons";

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

  const { colorMode } = useColorMode();
  return (
    <>
      <Layout title="West End Designs Blog" description="My Blog">
        <Stack
          color={theme.fg[colorMode]}
          bg={theme.bg[colorMode]}
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          mt="20rem"
          maxWidth="1000px"
          minWidth="100px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            minWidth="100px"
            w="100%"
            flexBasis="100%"
            px={4}
          >
            <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
              Blog ({posts.length} posts)
            </Heading>

            <InputGroup mb={4} mr={4} minW={{ md: "52em" }} w="100%">
              <Input
                aria-label="Search by title"
                placeholder="Search by title"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <InputRightElement>
                <SearchIcon color="gray.300" />
              </InputRightElement>
            </InputGroup>
            {!filteredBlogPosts.length && "No posts found :("}
            {filteredBlogPosts.map((frontMatter) => (
              <BlogPostPreview key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
        </Stack>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blogPosts");

  return { props: { posts } };
}
