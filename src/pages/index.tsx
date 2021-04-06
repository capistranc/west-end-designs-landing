import Head from "next/head";
import Container from "../components/Container";
import Date from "../components/Date";
import { getSortedPostsData } from "../lib/posts";
import NextLink from "next/link";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'

export default function Index({ allPostsData }) {
  return (
    <Container>
      <Head>
        <title>West End Designs</title>
      </Head>
      <section>
        <h2 >Whats going on</h2>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Container>
  );
}