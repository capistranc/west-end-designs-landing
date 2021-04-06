import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import Date from "../components/Date";
import { getSortedPostsData } from "../lib/posts";
import NextLink from "next/link";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2 >Whats going on</h2>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}