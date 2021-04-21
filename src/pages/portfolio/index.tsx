import Head from "next/head";
import Container from "../../components/Container";
import Date from "../../components/Date";
import { getSortedPostsData } from "../../lib/blog";
import NextLink from "next/link";
import { NextPage } from "next";

export const Portfolio: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Portfolio</title>
      </Head>
      <section>
        <h2>Portfolio</h2>
      </section>
    </Container>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Portfolio;
