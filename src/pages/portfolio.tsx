import Head from "next/head";
import { Layout } from "../layouts/Layout";
import { Date } from "../components/Date";
import { getSortedPostsData } from "../lib/blog";
import NextLink from "next/link";
import { NextPage } from "next";
import {
  Box,
  Heading,
  Link,
  Stack,
  Button,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { getPosts } from "../lib/instagram";

export const Portfolio: NextPage = () => {

  return (
    <Layout title="Portfolio" description="Come see some of our happy clients">
      <Head>
        <title>Portfolio</title>
      </Head>
      <Button> CLICK FOR ISNTAGRAM STUFF </Button>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Portfolio;
