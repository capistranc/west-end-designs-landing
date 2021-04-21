import React, { useState } from "react";
import Head from "next/head";
import {
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import Container from "../../components/Container";
import { getAllFilesFrontMatter } from "../../lib/mdx";
import BlogPost from "../../components/BlogPostPreview";

import { SearchIcon } from "@chakra-ui/icons";

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <Head>
        <title>Blog - Benjamin Carlson</title>
      </Head>
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            px={4}
          >
            <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
              Blog ({posts.length} posts)
            </Heading>
            <InputGroup mb={4} mr={4} w="100%">
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
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blogPosts");

  return { props: { posts } };
}

// import Head from "next/head";
// import Container from "../../components/Container";
// import Date from "../../components/Date";
// import { getSortedPostsData } from "../../lib/blog";
// import NextLink from "next/link";

// export default function Blog({ allPostsData }) {
//   const renderPostsData = () => {
//     return allPostsData.map(({ id, date, title }) => {
//       const slug = id.replace(/\.mdx/, "");
//       return (
//         <li key={id}>
//           <NextLink href={`/blog/${slug}`}>{title}</NextLink>
//           <br />
//           <small>
//             <Date dateString={date} />
//           </small>
//         </li>
//       );
//     });
//   };

//   return (
//     <Container>
//       <Head>
//         <title>Blog</title>
//       </Head>
//       <section>
//         <h2>Blog</h2>
//         <ul>{renderPostsData()}</ul>
//         <p>[Your Self Introduction]</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{" "}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//     </Container>
//   );
// }

// export async function getStaticProps() {
//   console.log("/blog getStaticProps");
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
