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
  const bgImageLight =
    "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.30)) , url('/images/catalina.jpg')";
  const bgImageDark =
    "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url('/images/catalina.jpg')";

  //   console.log(getPosts());

  const bgImage = useColorModeValue(bgImageLight, bgImageDark);
  return (
    <Layout
      title="Portfolio"
      description="Come see some of our happy clients"
      mt="8"
    >
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
