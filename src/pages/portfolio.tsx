import { Layout } from "../layouts/Layout";
import { Date } from "../components/Date";
import { getSortedPostsData } from "../lib/blog";
import NextLink from "next/link";
import { NextPage } from "next";
import { Button } from "@chakra-ui/react";
import { getPosts } from "../lib/instagram";

export const Portfolio: NextPage = () => {
  async function clickFn() {
    console.log(await getPosts());
  }

  return (
    <Layout title="Portfolio" description="Come see some of our happy clients">
      <Button onClick={clickFn}> EAT FROM ME </Button>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Portfolio;
